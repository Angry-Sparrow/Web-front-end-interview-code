/*
 * @Author: lee
 * @Date:2019/7/22 16:25
 * @Last Modified by:lee
 * @Last Modified time:2019/7/22 16:25
 */

// emmmm面试必备，但是死活写不出来系列……
// promise使用
// var promise = new Promise((resolve,reject) => {
//     if(success){
//         resolve(value);
//     }else{
//         reject(error);
//     }
// });


// 一般版本
function myPromise(constructor){
    let self = this;
    self.status = "pending";
    self.value = "undefined";
    self.reason = "undefined";
    function resolve(value){
        if(self.status === 'pending'){
            self.value = value;
            self.status = "resolved";
        }
    }
    function reject(reason){
        if(self.status === 'pending'){
            self.reason = reason;
            self.status = 'rejected';
        }
    }
    try{
        constructor(resolve,reject);
    }catch(e){
        reject(e);
    }
}
myPromise.prototype.then = function(onFullfilled,onRejected){
    let self = this;
    switch(self.status){
        case "resolved":
            onFullfilled(self.value);
            break;
        case "rejected":
            onRejected(self.reason);
            break;
        default:
    }
};
// 测试
var p = new Promise(function(resolve,reject){
    resolve(1)
});
p.then(function(x){
    console.log(x);
});


// 高级版本（待完善）
