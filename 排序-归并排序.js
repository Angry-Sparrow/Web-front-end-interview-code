/*
 * @Author: lee
 * @Date:2019/7/26 15:25
 * @Last Modified by:lee
 * @Last Modified time:2019/7/26 15:25
 */
// 归并排序：【稳定】 O(nlog(n))

//归并排序有两种

// 一： 自上而下递归
const merge = (left,right) => {
    let resArr = [];
    while(left.length && right.length){
        if(left[0] < right[0]){
            resArr.push(left.shift())
        } else{
            resArr.push(right.shift())
        }
    }
    return resArr.concat(left,right);
};
const mergeSort = (arr) => {
    if(arr.length <= 1){
        return arr;
    }
    let middle = Math.floor(arr.length /2);
    let left = arr.slice(0,middle);
    let right = arr.slice(middle);
    return merge(mergeSort(left),mergeSort(right));
};
const arr = new Array(2,3,1,3,4,5,6,44,33,25,9);
console.log(mergeSort(arr));



// 一： 自下而上迭代