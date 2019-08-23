/*
 * @Author: lee
 * @Date:2019/8/22 14:56
 * @Last Modified by:lee
 * @Last Modified time:2019/8/22 14:56
 */

// 题目描述
// 实现一个打点计时器，要求
// 1、从 start 到 end（包含 start 和 end），每隔 100 毫秒 console.log 一个数字，每次数字增幅为 1
// 2、返回的对象中需要包含一个 cancel 方法，用于停止定时操作
// 3、第一个数需要立即输出

var readline = require('readline');
const read = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
read.on('line',function(line){
    var temp = line.split(' ');
    var start = temp[0];
    var end   = temp[1];
    function count (start, end){
        console.log(start++);
        var timer = setInterval(function(){
            if(start <= end){
                console.log(start++);
            }else{
                clearInterval(timer);
            }
        },100);
        return{
            cancel : function(){
                clearInterval(timer);
            }
        }
    }
    count(start,end);
});