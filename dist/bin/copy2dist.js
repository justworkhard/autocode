#! /usr/bin/env node

'use strict';

var fs = require('fs');
var path = require("path");

function writeFile(p, text) {
    fs.writeFile(p, text, function (err) {
        if (!err)
            console.log("写入成功！")
    })
}

//递归创建目录 同步方法  
function mkdirsSync(dirname) {
    if (fs.existsSync(dirname)) {
        return true;
    } else {
        if (mkdirsSync(path.dirname(dirname))) {
            console.log("mkdirsSync = " + dirname);
            fs.mkdirSync(dirname);
            return true;
        }
    }
}

function _copy(src, dist) {
    var paths = fs.readdirSync(src)
    paths.forEach(function (p) {
        var _src = src + '/' + p;
        var _dist = dist + '/' + p;
        var stat = fs.statSync(_src)
        if (stat.isFile()) { // 判断是文件还是目录
            fs.writeFileSync(_dist, fs.readFileSync(_src));
        } else if (stat.isDirectory() && p != 'node_modules' && p != 'dist') {
            copyDir(_src, _dist) // 当是目录是，递归
        }
    })
}

/*
 * 复制目录、子目录，及其中的文件
 * @param src {String} 要复制的目录
 * @param dist {String} 复制到目标目录
 */
function copyDir(src, dist) {
    var b = fs.existsSync(dist)
    if (!b) {
        mkdirsSync(dist); //创建目录
    }
    _copy(src, dist);
}

function createDocs(src, dist, callback) {
    console.log("createDocs...")
    copyDir(src, dist);
    console.log("copyDir finish exec callback")
    if (callback) {
        callback();
    }
}

module.exports = createDocs
// createDocs('./', './dist', function () {})