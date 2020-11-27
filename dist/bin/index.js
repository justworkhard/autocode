#! /usr/bin/env node

'use strict';
const {
    resolve
} = require('path')
const ssh2 = require('ssh2');
var fs = require("fs");
const {
    program
} = require('commander');
var compressing = require('compressing')
var inquirer = require('inquirer');
var add = require('./add.js')
var remove = require('./remove.js')
var list = require('./list.js')
const createDocs = require('./copy2dist')
var AES = require('./utils')
var getDAes = AES.getDAes

let connection = ''
let ip = null
let user = null
let password = null
let servicePath = null
let params = {}
let comment = []

// 连接函数
function conFun() {
    console.log('开始连接...');
    connection = new ssh2();
    console.log('getDAes(password)',getDAes(password));
    connection.connect({
        "host": ip,
        "username": user,
        "password": getDAes(password)
    });
    connection.on('error', function (err) {
        connection.end()
        console.log('连接失败');
    });
    connection.on('ready', function () {
        console.log('开始上传');
        upLoadFile(connection, params)
    });
}

// 上传函数
function upLoadFile(conn, params) {
    const file = params.file
    const target = params.target
    if (!conn) {
        return
    }
    conn.sftp(function (err, sftp) {
        if (err) {
            throw err
        }
        console.log(file, target);
        sftp.fastPut(file, target, {}, function (err, result) {
            if (err) {
                throw err
            }
            Shell(conn)
        })
    })
}
// 执行脚本函数
function Shell(conn) {
    conn.shell(function (err, stream) {
        if (err) throw err;
        stream.on('close', function () {
            console.log('发布完成！！');
            // 删除压缩包
            fs.unlinkSync('./dist.zip')
            conn.end();
        }).on('data', function (data) {
            console.log('STDOUT: ' + data)
        });
        stream.end(comment.join('\n'));
    });
}

program
    .option('-a, --add', 'add service')
    .option('-rm, --remove', 'remove service')
    .option('-l, --list', 'list service');
program.parse(process.argv);

switch (true) {
    case program.add:
        add()
        break
    case program.remove:
        remove()
        break
    case program.list:
        list()
        break
    default:
        push()
}

async function push() {
    let serviceList = []
    let selectIndex = null
    let tempData = {}
    console.log('__dirname',__dirname);
    await fs.readFile(__dirname + "/data.json", function (err, data) {
        if (err) {
            return console.error(err);
        }
        tempData = JSON.parse(data.toString()); //将二进制的数据转换为字符串
        tempData.data.forEach(item => {
            serviceList.push(item.name)
        })
        const promptList = [{
                type: "list",
                message: "请选择发布方式:",
                name: "pushType",
                choices: ['发布打包后dist', '发布express'],
            },
            {
                type: "list",
                message: "请服务器:",
                name: "deletService",
                choices: serviceList,
            },
        ];

        inquirer.prompt(promptList).then(async answers => {
            if (answers.pushType !== '发布打包后dist') {
                await createDocs('./', './dist', function () {
                    console.log('打包完成');
                })
            }
            tempData.data.forEach((item, index) => {
                if (item.name == answers.deletService) {
                    selectIndex = index
                }
            })
            console.log('selectIndex', selectIndex, tempData.data[selectIndex]);
            ip = tempData.data[selectIndex].config.ip
            user = tempData.data[selectIndex].config.user
            password = tempData.data[selectIndex].config.pw
            servicePath = tempData.data[selectIndex].config.dir
            params = {
                file: `./dist.zip`,
                target: `${servicePath}/dist.zip`
            }
            comment = [
                `cd ${servicePath}`,
                'unzip -o dist.zip',
                'rm -f dist.zip',
                'exit',
                'close'
            ]
            console.log('=====进行发布====');
            // 将dist压缩
            compressing.zip
                .compressDir('./dist/.', './dist.zip')
                .then(() => {
                    console.log(`Tip: 文件压缩成功`);
                    conFun()
                })
                .catch(err => {
                    console.log("Tip: 压缩报错");
                    console.error(err);
                });
        });
    })

}