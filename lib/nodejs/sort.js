//=====＝＝＝＝＝＝=排序算法＝＝＝＝＝＝＝
class SortClass{
    constructor(parmas){
        this.parmas = parmas
    }

    swap(arrData,p1, p2){
        let tmp = arrData[p1]
        arrData[p1] = arrData[p2]
        arrData[p2] = tmp
        //return arrData
    }
    //>>>>基础：冒泡 插入  
        //****************冒泡: 1.每次排查一个最大(或最小)数到尾部. 2.每次从头部开始循环，逐个“两两比较”直到没有排好序位置。 3.当没有交换时，或全部排好时，结束。
        //O(1)--O(n2)
        bubbling(flag){ //参数： arrData: this.parmas.arrData ,  flag: 0 大到小， 1 小到大
            let { arrData } = this.parmas
            if(arrData.length <=1) return arrData  //如果数组中元素数量只有一个或以下直接返回
            let hasChange = true  //交换标记， 默认有交换
            for(let i=0; (i<arrData.length-1) && hasChange ; i++){ //循环条件：hasChange 没有交换了说明排好了。
                hasChange = false
                for(let j=0;j< arrData.length-1-i;j++ ){
                    if( (flag ==0 && arrData[j]<arrData[j+1]) || (flag == 1 && arrData[j]>arrData[j+1]) ){
                        this.swap(arrData,j,j+1)
                        hasChange = true  
                    }
                }
            }
            return arrData
        }

        //****************插入: 1.把数组从第一个位置开始分为两部分， 保持左边始终是排好序的。 2.选取排“好序的”靠右的“第一个”数, 逐个比较左边部分“两两比较”,插入到正确位置。3.循环第2步，直到全部数字全部插入到左边区域。
        //O(n)--O(n2)
        insert(flag){ //参数： arrData: this.parmas.arrData ,  flag: 0 大到小， 1 小到大
            let { arrData } = this.parmas
            if(arrData.length <=1) return arrData  //如果数组中元素数量只有一个或以下直接返回
            for(let i=0;i<arrData.length-1;i++) { //首次，第一元素已排好, 一直排到len-1个元素
                for(let j=i+1; j>0;j--){
                    if((flag==0 && arrData[j-1]<arrData[j]) || (flag ==1 && arrData[j-1]>arrData[j]) ){
                        this.swap(arrData, j, j-1)
                    } else { //如果“靠右第一个元素”是 “顺排”的, 不用再循环比较， 直接进入下一个循环进行插入
                        break
                    }
                }
            }
            return arrData
        }
    
    //>>>>常规：归并 快速      
        //****** 归并:  1.采用分治的思想，深度将数组从中间切分，直至全部切分成单元素后，再开始合并（在原数组上）。
        merge(flag,lo, hi){
            
            let {arrData} = this.parmas
            
            //console.log('>>>',flag,lo, hi, arrData,mid)

            if(arrData.length <= 1) return arrData

            //如果切分只有一个元素了，直接返回
            if(lo>=hi) return arrData

            //有多个元素时继续，切分：1. 现计算mid: lo + (hi-lo)/2 , 左边为：[lo, mid), 右边包含mid:[mid, hi]
            let mid = lo + parseInt( (hi-lo)/2 ) 
            console.log('===mid:',lo, hi,mid)
            this.merge(flag,lo,mid-1)
            this.merge(flag,mid==lo?mid+1:mid,hi)
            this.merge_fun(flag,lo, lo==mid?lo:mid-1 , lo==mid?mid+1:mid ,hi)
            return arrData
        }


        merge_fun(flag,l1,l2,h1,h2){
            let {arrData} = this.parmas
            let tmp = [], err = false  
            for(var i=l1,j=h1; !err && (i<=l2 || j<=h2 )   ; ){
                let leftVal, rightVal
                if(i<=l2) leftVal = arrData[i]
                if(j<=h2) rightVal = arrData[j]

                console.log("===leftVal, rightVal:",leftVal, rightVal)
                if(leftVal !=undefined && rightVal != undefined) { //如果2侧有效
                    if(flag == 0){ //从小到大
                        if(leftVal < rightVal) {
                            tmp.push(leftVal)
                            i++
                        } else {
                            tmp.push(rightVal)
                            j++               
                        }
                    } else {
                        if(leftVal > rightVal) {
                            tmp.push(leftVal)
                            i++
                        } else {
                            tmp.push(rightVal)
                            j++               
                        }              
                    }
                    
                }else{
                    if(leftVal !=undefined){
                        tmp.push(leftVal)
                        i++
                    }
                    if(rightVal !=undefined){
                        tmp.push(rightVal)
                        j++  
                    }
                }
                if(leftVal ==undefined &&  rightVal == undefined ) err = true    

            }
            
            console.log("====tmp:",tmp)
            for(let k=l1;k<=h2;k++) this.parmas.arrData[k] = tmp[tmp.length - 1 - (h2-k)]


            // var i=lo, j=mid , flag = true
            // if(lo >= hi) return ;
            // if(hi-lo == 1) {j=hi; } 
            // console.log("====i,mid,j:",this.parmas.arrData, lo, mid, hi)
            // while((i<mid || j<=hi) && flag){
            //     let leftVal, rightVal
                
            //     if(i==lo || i<mid) { // 1,1,2 i==lo：左边只有一个元素而且＝＝mid，  i<mid, 表示左区有效
            //         leftVal = this.parmas.arrData[i]
            //     }   
            //     if(j<=hi){
            //         rightVal = this.parmas.arrData[j]
            //     }
                
            //     console.log("===leftVal, rightVal:",leftVal, rightVal)
            //     if(leftVal !=undefined && rightVal != undefined) { //如果2侧有效
            //         if(flag == 0){ //从小到大
            //             if(leftVal < rightVal) {
            //                 tmp.push(leftVal)
            //                 i++
            //             } else {
            //                 tmp.push(rightVal)
            //                 j++               
            //             }
            //         } else {
            //             if(leftVal > rightVal) {
            //                 tmp.push(leftVal)
            //                 i++
            //             } else {
            //                 tmp.push(rightVal)
            //                 j++               
            //             }              
            //         }
                    

            //     }else{
            //         if(leftVal !=undefined){
            //             tmp.push(leftVal)
            //             i++
            //         }
            //         if(rightVal !=undefined){
            //             tmp.push(rightVal)
            //             j++  
            //         }
            //     }
            //     if(leftVal ==undefined &&  rightVal == undefined ) flag = false
            // }


        }

        //****** 快速










}

module.exports = SortClass

