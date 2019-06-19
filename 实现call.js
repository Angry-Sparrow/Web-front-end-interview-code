/*
 * @Author: lee
 * @Date:2019/6/18 17:21
 * @Last Modified by:lee
 * @Last Modified time:2019/6/18 17:21
 */

/* call语法：
 * func.call(thisArg,arg1,arg2,...)
 * 调用一个函数，其具有一个指定的this值和参数列表
 * call 核心
 * 将函数设为对象的属性
 * 执行&删除这个函数
 * 指定this到函数并传入给定参数，执行函数
 * 不传入参数时，默认指向为window
 */

// 简易版
// 新建一个对象
// var foo = {
//     value : 1,
//     bar : function(){
//         console.log(this.value);
//     }
// };
// foo.bar();

// 完善版
Function.prototype.call2 = function(content = window){
    content.fn = this;
    console.log(this);  // [Function: bar]
    let args = [...arguments].slice(1);
    let result = content.fn(...args);
    // 查看当前result的值  black 12 1
    console.log(result);
    delete content.fn;
    //删除以后，result的值变为undefined
    console.log(result);
    return result;
};
var foo = {
    value : 1
};
function bar(name,age){
    console.log(name);
    console.log(age);
    console.log(this.value);
}
bar.call2(foo,'black','12');



