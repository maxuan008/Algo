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
        //O(nlgn)
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
            for(let k=l1, t=0;k<=h2;k++) this.parmas.arrData[k] = tmp[t++]

        }

        //****** 快速: 1.采用分治的方法，在制定数组中,获取一个随机数，并将范围内的数组，按基准分成2个区。
        //********* 2.不停的重复这个过程直到所有的都排好
        quick(flag, lo, hi){
            if(lo>=hi) return ;  //只有一个元素时就不用排了
                        
            let {arrData} = this.parmas
            if(arrData.length <= 1) return;
            
            let pos = this.processRandRange(flag,lo,hi)
            //在将左 右两边排好
            this.quick(flag, lo, pos-1)
            this.quick(flag, pos+1, hi)
        }

        //生成随机下标， 并把它作为基准数进行 左右 分区
        processRandRange(flag,lo,hi) {
            let {arrData} = this.parmas
            let  tmp = Math.floor(Math.random()*(hi-lo)+lo)

            //先将基准数放到最右边
            this.swap(arrData, tmp, hi)

            //指定2个指针， i指针保持左边的数都是符合规则(小于或大于)基准数, j遍历全部数据
            for(let i=lo, j=lo;j<hi;j++){
                if((arrData[j]<arrData[hi] && flag==0 ) && ( arrData[j]>arrData[hi] && flag==1 )  ){
                    this.swap(arrData, i++,j) //把符合条件的数都放到最左边， 并把i向后移动
                }
            }

            //最后交换i指针数和最后一个基准数: 重点问题:因为I指针被J指针遍历过，而且没有发生交换，说明此时的I指针数据>=基准数
            this.swap(arrData,i, hi)

            return i   //返回基准位置

        }









}

module.exports = SortClass

