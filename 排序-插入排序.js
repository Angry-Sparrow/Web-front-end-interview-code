/*
 * @Author: lee
 * @Date:2019/7/26 14:09
 * @Last Modified by:lee
 * @Last Modified time:2019/7/26 14:09
 */
// 插入排序：【稳定】 O(n^2)

const insertSort = (arr) => {
    const len = arr.length;
    let j;
    for(let i = 0; i< len; i++){
        j = i;
        while(j > 0 && arr[j-1] > arr[j]){
            arr[j] = arr[j-1];
            j--;
        }
    }
    return arr;
};
const arr = new Array(2,3,1,3,4,5,6,44,33,25,9);
console.log(insertSort(arr));
