#! /usr/bin/env node

'use strict';

var inquirer = require('inquirer');
var fs = require('fs')

function list() {
  fs.readFile(__dirname + "/data.json", function (err, data) {
    if (err) {
      return console.error(err);
    }
    var person = data.toString(); //将二进制的数据转换为字符串
    person = JSON.parse(person); //将字符串转换为json对象
    console.log('-------------------------服务器列表---------------------');
    console.log('服务名',     '|',        "服务ip",      '|',     "服务地址");
    person.data.forEach(item => {
       console.log(item.name,   '|',   item.config.ip,   '|',    item.config.dir);
    })

  })
}

module.exports = list