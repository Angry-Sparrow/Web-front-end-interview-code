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
}