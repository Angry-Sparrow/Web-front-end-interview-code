/*
 * @Author: lee
 * @Date:2019/7/26 14:53
 * @Last Modified by:lee
 * @Last Modified time:2019/7/26 14:53
 */

// 快速排序：【不稳定】 O(nlog(n))

// =========常规版本nlog(n)=========================

const quickSort = (arr) => {
    const len = arr.length;
    if(len < 2){
        return arr;
    }
//    基准
    const pivot = arr[0];
    const left = [];
    const right = [];
    for (let i = 1; i < len; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }
        if(arr[i] >= pivot){
            right.push(arr[i]);
        }
    }
    return [...quickSort(left),pivot,...quickSort(right)];
};

// =========三路快排版本=========================

// 面对一个有大量重复的数据时，常规快排可能退化到o(n^2)
// 将序列分为3部分：小于pivot，等于pivot，大于pivot

const threeQs = (arr) => {
    const len = arr.length;
    if(len < 2){
        return arr;
    }
    let left = [];
    let center = [];
    let right = [];
    let pivot = arr[0];
    for(let i = 0 ; i < len; i++){
        if(arr[i] < pivot){
            left.push(arr[i]);
        }else if(arr[i] === pivot){
            center.push(arr[i]);
        }else{
            right.push(arr[i]);
        }
    }
    return [...threeQs(left),...center,...threeQs(right)];
};

const arr = new Array(2,3,1,3,4,5,6,44,33,25,9);
console.log("普通快排的结果：" + quickSort(arr));
console.log("三路快排的结果：" + threeQs(arr));