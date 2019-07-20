/*
 * @Author: lee
 * @Date:2019/6/20 20:50
 * @Last Modified by:lee
 * @Last Modified time:2019/6/20 20:50
 *
 * bind()方法会创建一个新的函数，当这个新函数运行时
 * bind（）的第一个参数将作为他运行时的this
 * 之后一系列参数将会在传递的实参前传入作为它的参数
 *
 * 注意点：考虑实例化后对原型链的影响
 */
//
// Function.prototype.bind2 = function(content){
//
//     if(typeof this != "function"){
//         // 如果新建的实例不是个函数
//         throw Error("not a function.");
//     }
//
//     let fn = this;
//     //去掉传入的第一个作为函数名的参数
//     let args = [...arguments].slice(1);
//     let resFn = function(){
//         return fn.apply
//     }
// } ;
var foo = {
    value : "223",
    getValue : function(){
        console.log(this);
        console.log(this.value);
        console.log(arguments[0],arguments[1]);
    }
}
var newGetValue = foo.getValue.bind(foo,1);
newGetValue(2);


