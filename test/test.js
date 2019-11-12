// var obj = { a: 1 }

// if (obj.a && obj.a.b && obj.a.b.c) console.log(6666)



// var moment = require('moment')
// var tmpdate = new Date("2019-09-16 21:00:00")  //2019-09-14 09:00:00

// console.log("2019-09-16 09:00:00"  , moment(new Date("2019-09-16 09:00:00")).valueOf()    )
// console.log("2019-09-16 21:00:00", moment(new Date("2019-09-16 21:00:00")).valueOf()  )



// var co = require('co');
// var fs = require('fs');
// var Promise = require('promise')

// var go = function*() {
//     console.log(1111111)
//     var f1 = yield readFile('./111.txt')
//     var f2 = yield readFile('./222.txt')
//     console.log('files data:', f1.a, f2)
//         //let a = 2
//         //throw "555"
//     return [1, 2, 3]
//     console.log(555555)
// }

// var tt = function*() {
//     // co(go()).then(function(res) {
//     //     console.log(res)
//     // }).catch(onerror)
//     var res = yield go()
//     console.log(res)
//     return res
// }

// var test_promise = function(callback){
//     co(tt()).then(function(v){
//         console.log('V:',v)
//         callback(null,v)
//     }).catch( function(err){
//         console.error(err.stack);
//         callback('系统错误')
//     })
// }

// test_promise(function(err,data){
//     console.log(2222,err,data)
// })

// //go()


// function onerror(err) {
//     // log any uncaught errors
//     // co will not throw any errors you do not handle!!!
//     // HANDLE ALL YOUR ERRORS!!!
//     console.error(err.stack);
// }

// return;


// var arr = ['aa', 'bb']
// console.log(111, arr.indexOf('aa'))

// return;
// var str = " dfkd  "
// console.log(str)
// console.log(str.trim().split(";"))
// return;


// //var ejsExcel = require('ejsexcel');
// var xlsx = require('node-xlsx')

// var exBuf = fs.readFileSync('test.xlsx');

// var path = 'test.xlsx'
// var sheetList = xlsx.parse(path);
// var tmp = sheetList[0].data[6]
// tmp.splice(0, 1)
// console.log(tmp)
// console.log(111, sheetList[0].data[6])
// return

// ejsExcel.getExcelArr(exBuf).then(exlJson => {
//     console.log("************  read success:getExcelArr");
//     var workBook = exlJson;

//     var workSheets = workBook[0];
//     console.log(workSheets)
//         // workSheets.forEach((item, index) => {
//         //     console.log((index + 1) + " row:" + item.join('    '));
//         // })

// })

// //return;



// function readFile(fileName) {
//     return new Promise(function(resolve, reject) {
//         fs.readFile(fileName, function(err, data) {
//             if (err) reject(err);
//             //console.log(222)
//             resolve(data);
//         });
//     });
// } 


var c = [255, -24.5, 98.98, 4.8, 29, 12.9, 65.5, 1, 55, 21, 4, 2.5, 1,1.5, 36, 11.5, 4, 177.68, 2.5, 25, 2, 12, 5, 1, 8, 4,22,
    2.5, 18, 11, 5, 31, 20.6, 2.5, 33, 18, 11.9, 2.5, 15.5, 29, 2, 2.5, 2, 1.5, 18, 5, 4, 1.5, 16, 24, 1.5 , 12.5, 2.5,
    4.5, 9.9, 1.5, 9, 1.5, 1, 16, 34, 5, 31, 1, 25, -25, 7.5, 5, 15, 1.5, 18, 11, 79, 43.23, 15.5, 9, 39, 23.9, 54, 45,
    -79,1, 15, 34.6, -0.41, 65, 378, 69, 79,14.5, 20, 41.8 , 5, 31, 30.7, 26, 4, 313, 21.6, 45, 224.11, 15, 40, 2.5, -45,
    49, 179, 49.5, -0.84, 24, 1, 24.4, 1.5, 18.6, 27, 29, 73, 24.9, 15, 289, 100, 200, 300, 256, 61.3, 10, 178, 12, 164
]

var total = 0
for(var money of c) total = total + money
console.log('10月总额：', total)


//console.log('end')





