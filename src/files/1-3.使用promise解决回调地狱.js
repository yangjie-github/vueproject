const fs = require('fs')
const path = require('path')

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

//先读取1，在读取2，再读取3
// 通过.then()指定回调函数时候，第一个是成功的函数必须传，第二个可以省略；
// 在上一个.then中返回一个新的promise实例，可以用下一个.then来使用
//在promise里面报错的话，如果第一个失败，后面的不执行；如果不想后面的promise被终止，这时候需要手动为之前每一个指定失败回调函数, 在失败黎明也要return promise
// getFileByPath(path.join(__dirname, './5.txt'))
// .then(function(data) {
//     console.log(data);
//     return getFileByPath(path.join(__dirname, './6.txt'));
// }, function(err) {
//     console.log(err.message);
//     return getFileByPath(path.join(__dirname, './6.txt'));
// })
// .then(function(data) {
//     console.log(data);
//     return getFileByPath(path.join(__dirname, './3.txt'));
// }, function(err) {
//     console.log(err.message);
//     return getFileByPath(path.join(__dirname, './3.txt'));
// })
// .then(function(data) {
//     console.log(data);
// })


// 新需求，如果前面的promise执行失败，则后面的不执行；
// 这时候不需要指定失败的回调，在后面加上一个catch, 如果任何一个失败，会立即进入catch进行处理,后面的promise不会执行
getFileByPath(path.join(__dirname, './1.txt'))
.then(function(data) {
    console.log(data);
    return getFileByPath(path.join(__dirname, './6.txt'));
})
.then(function(data) {
    console.log(data);
    return getFileByPath(path.join(__dirname, './3.txt'));
})
.then(function(data) {
    console.log(data);
})
.catch(function(err) {
    console.log(err.message)
})
