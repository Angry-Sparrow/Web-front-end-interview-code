/*
 * @Author: lee
 * @Date:2019/7/26 15:52
 * @Last Modified by:lee
 * @Last Modified time:2019/7/26 15:52
 */
// 堆排序：【不稳定】 O(nlog(n))
// 把无序数列构建成二叉堆；
//
// 循环删除堆顶元素，替换到二叉堆的末尾，调整堆产生新的堆顶。

/* 堆下沉调整 */
const adjustHeap = (arr, parentIndex, length) => {
    let temp = arr[parentIndex] ;/* temp保存父节点值，用于最后赋值 */
    let childIndex = 2 * parentIndex + 1 ;/* 保存子节点位置 */
    while (childIndex < length) {
        /* 如果有右子节点，且右子节点大于左子节点的值，则定位到右子节点 */
        if (childIndex + 1 < length && arr[childIndex + 1] > arr[childIndex]) {
            childIndex++
        }
        /* 如果父节点小于任何一个子节点的值，直接退出循环 */
        if (temp >= arr[childIndex]) {
            break;
        }
        /* 无序交换，单向赋值即可 */
        arr[parentIndex] = arr[childIndex];
        parentIndex = childIndex;
        childIndex = 2 * childIndex + 1
    }
    arr[parentIndex] = temp
};
const heapSort = arr => {
    /* 把无序数列构建成最大堆 */
    for (let i = Math.floor(arr.length / 2); i >= 0; --i) {
        adjustHeap(arr, i, arr.length - 1)
    }
    for (let i = arr.length - 1; i > 0; --i) {
        /* 交换最后一个元素与第一个元素 */
        [arr[i], arr[0]] = [arr[0], arr[i]];
        /* 调整最大堆 */
        adjustHeap(arr, 0, i)
    }
    return arr;
};

const arr = new Array(2,3,1,3,4,5,6,44,33,25,9);
console.log(heapSort(arr));

