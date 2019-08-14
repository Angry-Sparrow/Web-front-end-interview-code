/*
 * @Author: lee
 * @Date:2019/7/26 13:42
 * @Last Modified by:lee
 * @Last Modified time:2019/7/26 13:42
 */
// 冒泡排序：【稳定】 O(n^2)

const bubbleSort = (arr) => {
    const len = arr.length;
    for(let i = 0 ;i < len;i++){
        for(let j = 0;j < len-i; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]];
            }
        }
    }
    return arr;
};

const arr = new Array(1,2,3,5,3,2,1,4,5,33);
console.log(bubbleSort(arr));