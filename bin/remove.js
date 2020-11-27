#! /usr/bin/env node

'use strict';

var inquirer = require('inquirer');
var fs = require('fs')

function remove() {
  let serviceList = []
   fs.readFile(__dirname + "/data.json", function (err, data) {
    if (err) {
      return console.error(err);
    }
    let tempData = JSON.parse(data.toString()); //将二进制的数据转换为字符串
    tempData.data.forEach(item => {
      serviceList.push(item.name)
    })
    const promptList = [
      {
        type: "list",
        message: "请服务器:",
        name: "deletService",
        choices: serviceList,
      },
    ];

    inquirer.prompt(promptList).then(answers => {
      let deletIndex = null
      tempData.data.forEach((item,index)=>{
        if(item.name == answers.deletService){
          deletIndex = index
        }
      })
      tempData.data.splice(deletIndex,1);
      var str = JSON.stringify(tempData); //因为nodejs的写入文件只认识字符串或者二进制数，所以把json对象转换成字符串重新写入json文件中
      fs.writeFile(__dirname + "/data.json", str, function (err) {
        if (err) {
          return console.error(err);
        }
        console.log('----------删除成功-------------');
      })
    });
  })
}

module.exports = remove