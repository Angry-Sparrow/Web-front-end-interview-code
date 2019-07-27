/*
 * @Author: lee
 * @Date:2019/7/26 13:53
 * @Last Modified by:lee
 * @Last Modified time:2019/7/26 13:53
 */
// 选择排序：【不稳定】 复杂度 O(n^2)
const selectionSort = (arr) => {
    const len = arr.length;
    let min;
    for(let i = 0;i < len-1; i++){
        min = i;
        for(let j = i+1 ;j < len; j++ ){
            if(arr[j] < arr[min]){
                min = j;
            }
        }
        [arr[i],arr[min]] = [arr[min],arr[i]];
    }
    return arr;
};
const arr = new Array(2,3,1,3,4,5,3,1,6,44,33,25,9);
console.log(selectionSort(arr));