/*
 * @Author: lee
 * @Date:2019/7/22 10:23
 * @Last Modified by:lee
 * @Last Modified time:2019/7/22 10:23
 */

function Parent(name){
    this.name = name;
}
Parent.prototype.sayName  = function(){
    console.log('parent name : ' ,this.name);
};
function Child(name,parentName){
    Parent.call(this.parentName);
    this.name = name;
}
// 空的中间函数
function create(proto){
    function F(){}
    F.prototype = proto;
    return new F();
}
//将Child的prototype指向Parent的prototype
Child.prototype = create(Parent.prototype);
// Child.prototype.sayName = function(){
//     console.log('child name:' ,this.name);
// };
Child.prototype.constructor = Child;
//创建Parent实例
var parent = new Parent('father');
//给parent添加sayName原型属性
parent.sayName();  // parent name :  father
var child = new Child('son','father');
child.sayName();   // parent name :  son
