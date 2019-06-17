/*
 * @Author: lee
 * @Date:2019/6/13 15:07
 * @Last Modified by:lee
 * @Last Modified time:2019/6/13 15:07
 *
 * 首先需要明确如下几点：
 * 1:Boolean、String、Number三个类型会自动转换成对应的原始值；
 * 2:undefined、任意函数、symbol会被忽略（出现在非数组对象的属性值中时），或者被转换成null（出现在数组中时）；
 * 3:不可枚举的属性会被忽略；
 * 4:循环引用的属性会被忽略。
 */

function jsonStringify(obj){
    let type = typeof obj;
    //分类序列化，第一类，非对象类或者为null
    if(type !== "object" || type === null){
        //对应点2，如果是string、undefined、function类型，需要为obj添加双引号标识
        if(/string|undefined|function/.test(type)){
            obj = '"' + obj + '"';
        }
        return String(obj);
    }
    //对象类型的序列化
    else{
        let json = []
            arr  = (obj && obj.constructor === Array);
        for(let k in obj){
            let v = obj[k];
            //
            let type = typeof v;
            if(/string|undefined|function/.test(type)){
                v = '"' + v + '"';
            }else if(type === "object"){
                //做一个递归序列化
                v = jsonStringify(v);
            }
            json.push((arr ? "" : '"' + k + '":') + String(v));
        }
        return (arr ? "[" : "{") + String(json) + (arr ? "]" : "}");
    }
}
console.log(jsonStringify({x : 5}));  // {"x":5}
console.log(jsonStringify([1,"false",false])); // [1,"false",false]
console.log(jsonStringify({b : undefined})); // {"b":"undefined"}
console.log(jsonStringify({a : {b : {c : 3}}})); // {"a":{"b":{"c":3}}}
