/*
 * @Author: lee
 * @Date:2019/7/20 21:30
 * @Last Modified by:lee
 * @Last Modified time:2019/7/20 21:30
 */
//阮一峰先生的网络日志讲得很是明晰，建议大家直接看阮一峰先生的。
// 百度即能搜到。
// 网上大部分都是copy的阮一峰先生的，并且大部分copy得并不明晰，反而会让人迷糊。

// =================【构造函数的继承】================================
//*********【1】call ，apply实现方式******************************
//现有“动物”构造函数
function Animal(){
    this.species = "动物";
}
function Cat(name,color){
    this.name  = name;
    this.color = color;
}
function Cat(name,color){
    Animal.apply(this,arguments);
    this.name  = name;
    this.color = color;
}
var cat1 = new Cat("毛毛","黑色");
console.log("cat1当前种类：" + cat1.species);


//*********【2】 prototype模式************************************
//现有“动物”构造函数
function Animal(){
    this.species = "动物";
}
function Cat(name,color){
    this.name  = name;
    this.color = color;
}
// 理念：如果“猫”的prototype对象指向Animal实例，则所有“猫”的实例都继承Animal；

// 每一个实例也有一个constructor属性，默认调用prototype对象的constructor属性。

Cat.prototype = new Animal();  //将Cat的prototype指向了Animal实例
// 任何一个prototype对象都有一个constructor属性，指向它的构造函数。
//这样会造成继承链紊乱
console.log(Cat.prototype.constructor == Animal); //true
console.log(cat1.constructor == Cat.prototype.constructor); //true
console.log(cat1.constructor == Animal); //true
//手动纠正原型链继承关系
Cat.prototype.constructor =  Cat;
var cat1 = new Cat("毛毛","黑色");
console.log("cat1当前种类：" + cat1.species);
//【注】
//如果替换了prototype对象：o.prototype = {};
//下一步一定要为新的prototype对象加上constructor属性，并将属性指回原来的构造函数：
//o.prototype.constructor = o;


//*********【3】直接继承prototype*****************************************
//现有“动物”构造函数
function Animal(){};
Animal.prototype.species = "动物";
function Cat(name,color){
    this.name  = name;
    this.color = color;
}
Cat.prototype = Animal.prototype;
Cat.prototype.constructor = Cat; //这样写将Animal.prototype对象的constructor属性也更改为了Cat
var cat1 = new Cat("毛毛","黑色");
console.log("cat1当前种类：" + cat1.species);


//*********【4】利用空对象作为中介******************************************
//设现有“动物”构造函数
function Animal(){
    this.species = "动物";
}
function Cat(name,color){
    this.name  = name;
    this.color = color;
}
// var F = function(){};
// F.prototype = Animal.prototype;
// Cat.prototype = new F();
// Cat.prototype.constructor = Cat;
//封装成函数
function extend(Child,Parent){
    var F = function(){};
    F.prototype = Parent.prototype;
    Child.prototype = new F();
    Child.prototype.constructor = Child;
    //下面这行实现的效果是：给子对象一个uber属性，此属性指向父对象的prototype属性
    //相当于在子对象上打开一条直接调用父对象方法的通道
    //用来实现继承的完备性（备用性质）
    Child.uber = Parent.prototype;
}
extend(Cat,Animal);
var cat1 = new Cat("毛毛","黑色");
console.log("cat1当前种类：" + cat1.species);

//*********【5】拷贝继承*******************************************
//现有“动物”构造函数
function Animal(){}
Animal.prototype.species = "动物";
function Cat(name,color){
    this.name  = name;
    this.color = color;
}
function extend2(Child,Parent){
    var p = Parent.prototype;
    var c = Child.prototype;
    for(var i in p){
        c[i] = p[i];
    }
    c.uber = p;
}
extend2(Cat,Animal);
var cat1 = new Cat("毛毛","黑色");
console.log("cat1当前种类：" + cat1.species);


// ===================【非构造函数的继承】===========================
//理解非构造函数的继承，我们首先需要了解清楚，什么是构造函数，非构造函数又是什么
//我的理解，简单说来，非构造函数就是对象。
//现有A对象和B对象，如何让B对象去继承A对象

var Chiese = {
    nation : "中国"
};
var Doctor = {
    career : "医生"
};
//让“医生”去继承“中国” → “中国医生”
// *********【1】object()方法******************************************
//object()函数:将子对象的prototype属性指向父对象，从而使得子对象与父对象连在一起
function object(o){
    function F(){};
    F.prototype = o;
    return new F();
}
//生成子对象：
var Doctor = object(Chinese);
//添加子对象本身属性：
Doctor.career = "医生";
console.log(Doctor.nation); // 中国

// *********【2】浅拷贝方法******************************************
function extendCopy(p){
    var c = {};
    for (var i in p){
        c[i] = p[i];
    }
    c.uber = p;
    return c;
}
var Doctor = extendCopy(Chinese);
Doctor.career = "医生";
console.log(Doctor.nation); //中国
// 局限性：如果父对象的属性等于数组或另一个对象
// 子对象实际上只获得了父对象的内存地址，父对象可能被篡改
// 如：
// 给Chinese添加“出生地”属性，值为数组

Chinese.birthPlaces = ["北京","上海","香港"];
var Doctor = extendCopy(Chinese);
Doctor.birthPlaces.push('厦门');
// Chinese的“出生地”也被更改
console.log(Doctor.birthPlaces); //北京，上海，香港，厦门
console.log(Chinese.birthPlaces); //北京，上海，香港，厦门
// extendCopy() 只是拷贝基本数据类型 → 浅拷贝


// *********【3】深拷贝方法******************************************
// 阮老师原话：
// 所谓"深拷贝"，就是能够实现真正意义上的数组和对象的拷贝。
// 它的实现并不难，只要递归调用"浅拷贝"就行了。
function deepCopy(p,c){
    var c = c || {};
    for(var i in p){
        if(typeof p[i] === 'object'){
            c[i] = (p[i].contructor === Array) ? [] :{};
            deepCopy(p[i],c[i]);
        }else{
            c[i] = p[i];
        }
    }
    return c;
}
var Doctor = deepCopy(Chinese);
Chinese.birthPlaces = ['北京','上海','香港'];
Doctor.birthPlaces.push('厦门');
console.log(Doctor.birthPlaces); //北京, 上海, 香港, 厦门
console.log(Chinese.birthPlaces); //北京, 上海, 香港