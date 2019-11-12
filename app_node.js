const Sort = require("./lib/nodejs/sort.js")

let sort = new Sort({arrData:[2,5,2,1,8,33,23,20,7]})

// console.log("＝＝＝ 冒泡排序后数据",sort.bubbling(0))
// console.log("＝＝＝ 插入排序后数据",sort.insert(1))
// console.log("＝＝＝ 归并排序后数据",sort.merge(1,0,8))
console.log("＝＝＝ 快速排序后数据",sort.merge(0,0,8))


