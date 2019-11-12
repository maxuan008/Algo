const Sort = require("./lib/nodejs/sort.js")

let sort = new Sort({arrData:[2,5,2,1,8,33,23,20,7]})

// console.log("＝＝＝ 冒泡排序后数据",sort.bubbling(0))
// console.log("＝＝＝ 插入排序后数据",sort.insert(1))
console.log("＝＝＝ 归并排序后数据",sort.merge(1,0,8))

    // //插入：arrData = this.parmas.arrData, O(n)-O(n2)
    // s2(flag){ //flag: 0 大到小， 1 小到大
    //     var arrData = this.parmas.arrData
    //     if(arrData.length <=1) return arrData
    //     for(var i=0;i<arrData.length-1;i++){
    //         for(var j=i+1;j>=0;j--){
    //             if( (flag ==0 && arrData[j]<arrData[j-1]) || (flag ==1 && arrData[j]>arrData[j-1]) ){
    //                 var tmp = arrData[j]
    //                 arrData[j] = arrData[j-1]
    //                 arrData[j-1] = tmp
    //             }else {
    //                 break
    //             }
    //         }
    //     }
    //     return arrData
    // }

