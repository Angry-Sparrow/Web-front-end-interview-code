// 什么是柯里化？
// 柯里化是把一个多参数函数转换为一个嵌套的一元函数的过程

// =============普通写法未调通版o(╥﹏╥)o请看下面几个版本===============================
function curry(){
    var args = Array.prototype.slice.call(arguments);
    var fn = function(){
        // 这里形成了死循环
        var newArgs = args.concat(Array.prototype.slice.call(arguments));
        return multi.apply(this,newArgs);
    };
    fn.toString = function(){
        return args.reduce(function(a,b){
            return a * b;
        })
    };
    return fn;
}
function multiFn(a,b,c){
    return a * b * c;
}
var multi = curry(multiFn);
multi(2)(3)(4);
multi(2,3,4);
multi(2)(3,4);
multi(2,3)(4);

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