/*
 * @Author: lee
 * @Date:2019/7/27 15:50
 * @Last Modified by:lee
 * @Last Modified time:2019/7/27 15:50
 */
var fn = function(s){
    if(!s.length){
        return 0;
    }else{
        var temp = {},
            max = 0,
            head = 0; //记录当前子串的头位置
        for(var i = 0; i < s.length; i++)
        {
            var tail = s[i]; //记录当前尾串的头位置
            if(temp[tail] >= head) //一开始map[v]不存在，undefined，式子值为false
            {
                head = temp[tail]+1;
            }
            temp[tail] = i;
            if(max < i-head+1)
            {
                max = i-head+1; // i-head+1 存放的是当前符合要求的子串的长度
            }
        }
        return max;
    }
};
var s = "axaxa";
console.log(fn(s));
