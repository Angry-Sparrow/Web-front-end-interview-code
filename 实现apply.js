/*
 * @Author: lee
 * @Date:2019/6/19 10:13
 * @Last Modified by:lee
 * @Last Modified time:2019/6/19 10:13
 */

/*
 * apply和call的不同之处在于，其第二个参数必须为数组。
 */

Function.prototype.apply2 = function(context = window){
    context.fn = this; // [Function: bar]
    console.log(context.fn);
    let result;
    if(arguments[1]){
        result = context.fn(...arguments[1]); // 从这一步会直接跳转到function bar
        console.log(this + result); //undefined
    }else{
        result = context.fn();
    }
    delete context.fn;
    console.log(this + this.result);
    return result;
};
var foo = {
    value : 1
};
function bar(...args) {
    console.log(...args);
    console.log(this.value);
};
bar.apply2(foo,[11,22,33]);
