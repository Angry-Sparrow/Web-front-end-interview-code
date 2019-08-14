/*
 * @Author: lee
 * @Date:2019/7/22 21:40
 * @Last Modified by:lee
 * @Last Modified time:2019/7/22 21:40
 */

// =============节流[时间戳]==========================

function throttle(fn,delay){
    let prev = new Date();
    return function(){
        const args = arguments;
        const now = new Date();
        if(now - prev > delay){
            fn.apply(this,args);
            prev = new Date();
        }
    }
}

// =============节流[定时器]==========================

// var throttle = function(func,delay){
//     var timer = null;
//     return function(){
//         var context = this;
//         var args = arguments;
//         if(!timer){
//             timer = setTimeout(function(){
//                     func.apply(context,args);
//                     timer = null;
//             }, delay);
//         }
//     }
// };
// function handle(){
//     console.log(Math.random());
// }
// window.addEventListener('scroll',throttle(handle,1000));



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