var arr = [1,1,1,2,2,1,4,3,4];
function uniq(arr){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        for(var j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                ++i;
            }
        }
        newArr.push(arr[i]);
    }
    return newArr;
}
console.log(uniq(arr));