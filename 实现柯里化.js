// 什么是柯里化？
// 柯里化是把一个多参数函数转换为一个嵌套的一元函数的过程

// =============普通写法未调通版o(╥﹏╥)o请看下面几个版本===============================
function curry(fn){
    var args = Array.prototype.slice.call(arguments,1);
    return function(){
        // 这里形成了死循环
        var newArgs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(this, newArgs);
    };
}
function multiFn(a,b,c){
    return a * b * c;
}
var multi = curry(multiFn);
console.log(multi(2,3,4));

// =============Es6写法大佬版===============================
// const curry = (fn, arr = []) => (...args) => (
//     arg => arg.length === fn.length
//         ? fn(...arg)
//         : curry(fn,arg)
// ) ([...arr, ...args]);
// function fn(a,b,c){
//     return a * b * c;
// }
// console.log(curry(fn)(1)(2)(3));
// console.log(curry(fn)(2,2,3));

// =============Es6写法逻辑清晰版===============================
// let curry = (fn) => {
//     if(typeof fn !== 'function'){
//         console.log('No function provided');
//     }
//     return function curriedFn(...args){
//         if(args.length < fn.length){
//             return function(){
//                 let arr = [].slice.call(arguments);
//                 // console.log(arr); // 用来测试
//                 return curriedFn.apply(null,args.concat(arr));
//             }
//         }
//         return fn.apply(null,args);
//     }
// };
// function multiFn(a,b,c){
//     return a * b * c;
// }
// console.log(curry(multiFn)(1)(2)(3));
// console.log(curry(multiFn)(2,2,3));


// =============柯里化经典面试题(有问题)===============================
// 实现一个add方法，使计算结果能够满足如下预期：
// add(1)(2)(3) = 6;
// add(1, 2, 3)(4) = 10;
// add(1)(2)(3)(4)(5) = 15;

// function add() {
//     // 第一次执行时，定义一个数组专门用来存储所有的参数
//     var _args = Array.prototype.slice.call(arguments);
//
//     // 在内部声明一个函数，利用闭包的特性保存_args并收集所有的参数值
//     var _adder = function() {
//         _args.push(...arguments);
//         return _adder;
//     };
//
//     // 利用toString隐式转换的特性，当最后执行时隐式转换，并计算最终的值返回
//     _adder.toString = function () {
//         return _args.reduce(function (a, b) {
//             return a + b;
//         });
//     };
//     return _adder;
// }
//
// add(1)(2)(3);                // 6
// add(1, 2, 3)(4);             // 10
// add(1)(2)(3)(4)(5);          // 15
// add(2, 6)(1);                // 9
