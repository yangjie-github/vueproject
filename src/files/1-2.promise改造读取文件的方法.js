// 1.promise是一个构造函数， 可以new 一个promise得到promise的实例对象
// 2.promise上有两个函数，resolve(成功之后回调函数)， reject（失败时候的回调函数）
// 3.promise的原型对象上有一个.then（）方法，只要是promise的实例都可以访问这个方法
// 4.promise表示一个异步操作，new一个实例，这个实例就表示一个具体的异步操作
// 5.promise创建的实例是一个异步操作，那么这个异步操作的结果只能有两种状态
//      5.1 成功， 需要在内部调用resolve把结果返回给调用者
//      5.2 失败， 需要在内部调用reject把结果返回给调用者
//      5.3 promise异步操作，内部拿到操作的结果是无法使用return返回给调用者的，这时候需要使用回调函数把记过返回给调用者
// 6.我们可以在new出来的promise实例上调用.then（）方法预先为这个promise异步操作指定成功和失败的回调函数(resolve, reject)

// function里面写的是具体的异步操作，只要promise被new出来，就会执行function（执行异步操作）
const fs = require('fs')
const path = require('path')

// function getFileByPath(filePath) {
//     var promise = new Promise(function(resolve, reject) {
//         fs.readFile(filePath, 'utf-8', (err, datastr) => {
//             if (err) {
//                 reject(err);
//             } else {
//                 resolve(datastr);
//             }
//         })
//     })

//     return promise;
// }

// // 执行顺序， 先定义getFileByPath方法， 在调用，调用时候先通过.then（）预先设置成功和失败的回调函数
// var p = getFileByPath(path.join(__dirname, './1.txt')).then(function(datastr) {
//     console.log(datastr);
// }, function(err) {
//     console.log(err.message);
// });

// 改造上面的方法
function getFileByPath(filePath) {
    return new Promise(function(resolve, reject) {
        fs.readFile(filePath, 'utf-8', (err, datastr) => {
            if (err) {
                reject(err);
            } else {
                resolve(datastr);
            }
        })
    })
}

// 执行顺序， 先定义getFileByPath方法， 在调用，调用时候先通过.then（）预先设置成功和失败的回调函数
getFileByPath(path.join(__dirname, './2.txt'))
.then(function(datastr) {
    console.log(datastr);
}, function(err) {
    console.log(err.message);
});

