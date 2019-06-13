/*
 * @Author: lee
 * @Date:2019/6/13 10:58
 * @Last Modified by:lee
 * @Last Modified time:2019/6/13 10:58
 *
 * 首先需要明确，一个new操作符到底实现了什么功能？
 * 1、创建了全新的对象；
 * 2、会被执行__proto__链接；
 * 3、令this指向新创建的对象；
 * 4、通过new创建的对象，最终被__proto__链接到函数的原型（prototype）对象上；
 * 5、如果函数没有返回对象类型 Object(包含 Functoin,Array,Date,RegExg,Error)，那么new表达式中的函数调用将返回该对象引用。
 * 说白了就是原型链。
 */
    function New(func){
        //res是我们新建的对象
        var res = {};
        if(func.prototype !== null){
            //如果函数的原型不为空，为新对象做一个原型的映射
            res.__proto__ = func.prototype;
        }
        //这里值得说明的是，Array.prototype.slice.call(arguments,1)起到一个去除第一个参数的作用，第一个参数在这里是函数名
        //就是var obj1 = New(Array,1,2); 里的Array
        //让res这个新建的对象拥有了func方法，它的每个参数都能调用func
        var ret = func.apply(res,Array.prototype.slice.call(arguments,1));
        //做步骤5的判断
        if((typeof ret === "object" || typeof ret === "function") && ret !== null){
            return ret;
        }
        return res;
    }
    var obj1 = New(Array,1,2);
    console.log("obj1 : " + obj1);
    //obj2和obj1是等效的
    var obj2 = new Array(1,2);
    console.log("obj2 : " + obj2);

