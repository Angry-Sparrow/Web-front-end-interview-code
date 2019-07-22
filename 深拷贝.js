/*
 * @Author: lee
 * @Date:2019/7/22 21:54
 * @Last Modified by:lee
 * @Last Modified time:2019/7/22 21:54
 */

// ===================普通版===================
// 局限性:需要保证对象是JSON安全的。
var newObj = JSON.parse(JSON.stringify(someObj));


// ===================升级版===================

function deepCopy(obj){
    //核心在于区分复制对象是否为object类型
    if(typeof obj == 'object'){
        var result = obj.constructor == Array ? [] : {};
        for(let i in obj){
            result[i] = typeof obj[i] == 'object' ? deepCopy(obj[i]) : obj[i];
        }
    }else{
        var result = obj;
    }
    return result;
}