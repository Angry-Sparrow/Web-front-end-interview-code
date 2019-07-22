/*
 * @Author: lee
 * @Date:2019/7/22 21:40
 * @Last Modified by:lee
 * @Last Modified time:2019/7/22 21:40
 */

// =============节流==========================
function throttle(fn,wait){
    let prev = new Date();
    return function(){
        const args = arguments;
        const now = new Date();
        if(now - prev > wait){
            fn.apply(this,args);
            prev = new Date();
        }
    }
}



// =============防抖、节流结合==========================
// const throttle = function(fn,delay,isDebounce){
// //   let timer;
// //   let lastCall = 0;
// //   return function(...args){
// //       if(isDebounce){
// //           if(timer) clearTimeout(timer);
// //           timer = setTimeout(() => {
// //               fn(...args);
// //           },delay)
// //       }else{
// //           const now = new Date().getTime();
// //           if(now - lastCall < delay) return lastCall = now;
// //           fn(...args);
// //       }
// //   }
// // };