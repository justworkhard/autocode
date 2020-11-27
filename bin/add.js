#! /usr/bin/env node

'use strict';

var inquirer = require('inquirer');
var fs = require('fs')
var AES = require('./utils')
var getAES = AES.getAES

function add() {
  const promptList = [{
      type: 'input',
      message: '请输入服务名称:',
      name: 'name',
      default: "" // 默认值
    }, {
      type: 'input',
      message: '请输入服务器ip:',
      name: 'ip',
      default: "" // 默认值
    },
    {
      type: 'input',
      message: '请输入登录用户:',
      name: 'user',
      default: "" // 默认值
    }, {
      type: 'input',
      message: '请输入服务器密码:',
      name: 'pw',
    },
    {
      type: 'input',
      message: '请输入服务器目录:',
      name: 'dir',
    }
  ];
 
  inquirer.prompt(promptList).then(answers => {
    let params = {
      name: answers.name,
      config: {
        ip: answers.ip,
        pw: getAES(answers.pw),
        dir: answers.dir,
        user: answers.user
      }
    }
    fs.readFile(__dirname + "/data.json", function (err, data) {
      if (err) {
        return console.error(err);
      }
      var tempData = data.toString(); //将二进制的数据转换为字符串
      tempData = JSON.parse(tempData); //将字符串转换为json对象
      tempData.data.push(params); //将传来的对象push进数组对象中
      var str = JSON.stringify(tempData); //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
      fs.writeFile(__dirname + "/data.json", str, function (err) {
        if (err) {
          return console.error(err);
        }
        console.log('----------新增成功-------------');
      })
    })
  });
}

module.exports = add