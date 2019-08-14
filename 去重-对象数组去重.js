/*
 * @Author: lee
 * @Date:2019/8/8 13:40
 * @Last Modified by:lee
 * @Last Modified time:2019/8/8 13:40
 */

var arr = [{
    key: '01',
    value: '乐乐'
}, {
    key: '02',
    value: '博博'
}, {
    key: '03',
    value: '淘淘'
},{
    key: '04',
    value: '哈哈'
},{
    key: '01',
    value: '乐乐'
}];


//  方法1：利用对象访问属性的方法，判断对象中是否存在key
var result = [];
var obj = {};
for(var i =0; i<arr.length; i++){
    if(!obj[arr[i].key]){
        console.log(arr[i].key);
        result.push(arr[i]);
        obj[arr[i].key] = true;
    }
}
console.log(result); // [{key: "01", value: "乐乐"},{key: "02", value: "博博"},{key: "03", value: "淘淘"},{key: "04", value: "哈哈"}]



//  方法2：利用reduce方法遍历数组,reduce第一个参数是遍历需要执行的函数，第二个参数是item的初始值
var obj = {};
arr = arr.reduce(function(item, next) {
    obj[next.key] ? '' : obj[next.key] = true && item.push(next);
    return item;
}, []);
console.log(arr); // [{key: "01", value: "乐乐"},{key: "02", value: "博博"},{key: "03", value: "淘淘"},{key: "04", value: "哈哈"}]