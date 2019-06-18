/*
 * @Author: lee
 * @Date:2019/6/18 10:26
 * @Last Modified by:lee
 * @Last Modified time:2019/6/18 10:26
 *
 * 来源：https://juejin.im/entry/5a98f1ef518825558001a859
 * 非常推荐！！！
 * JSON.parse和JSON.stringify是对应的，它用来解析JSON字符串。构造由字符串描述的JavaScript值或对象。
 * 提供可选的reviver函数用以在返回之前对所得到的对象执行变换(操作)。
 */
/*方法一：直接调用eval
 *eval()函数拥有执行者权限，易被攻击，形成XSS漏洞。
 * 为了避免攻击，需对参数做校验
 */
function jsonParse(opt){
    // We split the second stage into 4 regexp operations in order to work around
    // crippling inefficiencies in IE's and Safari's regexp engines. First we
    // replace the JSON backslash pairs with "@" (a non-JSON character). Second, we
    // replace all simple value tokens with "]" characters. Third, we delete all
    // open brackets that follow a colon or comma or that begin the text. Finally,
    // we look to see that the remaining characters are only whitespace or "]" or
    // "," or ":" or "{" or "}". If that is so, then the text is safe for eval.
    var rx_one = /^[\],:{}\s]*$/;
    var rx_two = /\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g;
    var rx_three = /"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g;
    var rx_four = /(?:^|:|,)(?:\s*\[)+/g;
    if(
        rx_one.test(
            opt
                .replace(rx_two,"@")
                //将中文的“（”更改为英文的“]”
                .replace(rx_three,"]")
                .replace(rx_four,"")
        )
    )
    return eval('(' + opt + ')');
}
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

/*方法二：Function
 *Function与eval有相同的字符串参数特性
 *
 */

/*方法三：递归
 *
 */

/*方法四：状态机
 *
 *
 */


console.log(jsonParse(jsonStringify({x : 5})));
console.log(jsonParse(jsonStringify([1, "false" , false])));
console.log(jsonParse(jsonStringify({b : undefined})));
console.log(jsonParse(jsonStringify({a : {b : {c : 3}}})));