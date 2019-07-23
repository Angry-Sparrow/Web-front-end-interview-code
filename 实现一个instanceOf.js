/*
 * @Author: lee
 * @Date:2019/7/22 22:03
 * @Last Modified by:lee
 * @Last Modified time:2019/7/22 22:03
 */

// instanceof运算符用于测试构造函数的prototype属性是否出现在对象的原型链中的任何位置
// __proto__:隐式原型
// prototype:显示原型

function instanceOf(left,right){
    let proto  = left.__proto__;
    let prototype = right.prototype;
    while(true){
        if(proto == null) return false;
        if(proto == prototype) return true;
        proto = proto.__proto__;
    }
}