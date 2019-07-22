/*
 * @Author: lee
 * @Date:2019/7/22 20:58
 * @Last Modified by:lee
 * @Last Modified time:2019/7/22 20:58
 */

function debounce(fn,wait,immediate){
    let timer;
    return function(){
        if(immediate){
            fn.apply(this,arguments);
        }
        if(timer){
            clearTimeout(timer);
        }
        timer = setTimeout(() => {
            fn.apply(this,arguments);
        },wait)
    }
}

function fn(){
    console.log("对此函数做了防抖。")
}
