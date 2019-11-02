// 需求： 封装一个方法，给定一个文件路径，用这个方法读取文件并返回内容给调用者
const fs = require('fs')
const path = require('path')

// 普通读取文件的方式
// 运行此文件， 在当前目录下运行： node .\1-1.封装读取文件的方法.js
// ./1.txt是要读取文件的路径， utf-8是读取文件的编码格式 (err, datastr)当文件读取完成,调用这个callback回调函数来读取文件的结果，如果err为null就说明读取成功了,没有出错
// fs.readFile(path.join(__dirname, './1.txt'), 'utf-8', (err, datastr) => { //这是普通读取文件的方式
//     if (err) {
//         throw err;
//     } else {
//         console.log(datastr);
//     }
// })

// 给定文件路径，返回读取到的内容,  readFile是异步进行,这种方式是没有返回值的，返回的是undefined
// function getFileByPath(filePath) {
//     //注意， readFile是异步进行的
//     fs.readFile(filePath, 'utf-8', (err, datastr) => { //这是普通读取文件的方式
//         if (err) {
//             throw err;
//         } else {
//             return datastr;
//         }
//     })
// }

//getFileByPath(path.join(__dirname, './1.txt'), (err, datastr) => {
//     console.log(datastr)
// })

// 改造上面的方法为回调函数
// function getFileByPath(filePath, callback) {
//     //注意， readFile是异步进行的
//     fs.readFile(filePath, 'utf-8', (err, datastr) => { //这是普通读取文件的方式
//         if (err) {
//             callback(err);
//             return;
//         } else {
//             callback(datastr)
//         }
//     })
// }

//继续改造， 添加callback参数， 第一个参数为失败的结果， 第二个为成功的结果
// function getFileByPath(filePath, callback) {
//     //注意， readFile是异步进行的
//     fs.readFile(filePath, 'utf-8', (err, datastr) => { //这是普通读取文件的方式
//         if (err) {
//             callback(err);
//             return;
//         } else {
//             // 成功之后，err位置的参数为null
//             callback(null, datastr)
//         }
//     })
// }

// 继续改造，改为两个回调函数
function getFileByPath(filePath, succback, errback) {
    //注意， readFile是异步进行的
    fs.readFile(filePath, 'utf-8', (err, datastr) => { //这是普通读取文件的方式
        if (err) {
            errback(err);
            return;
        } else {
            // 成功之后，err位置的参数为null
            succback(datastr)
        }
    })
}

// getFileByPath(path.join(__dirname, './5.txt'), function(datastr) {
//     console.log(datastr);
// }, function(err) {
//     console.log(err.message);
// })

// ======================================================================================
// 需求，先读取1文件，再读取2文件，再读3文件
getFileByPath(path.join(__dirname, './1.txt'), function(datastr) {
    console.log(datastr);
    getFileByPath(path.join(__dirname, './2.txt'), function(datastr) {
        console.log(datastr);
        getFileByPath(path.join(__dirname, './3.txt'), function(datastr) {
            console.log(datastr);
        })
    })
})
// 上面这种方式被称为回调地狱， 问题： 回调套回调，如果读二十个，看着非常不爽， 而且缩进太多
// 可以使用es6中的promise来解决回调地狱的问题