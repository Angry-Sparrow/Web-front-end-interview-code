

function duplicates(arr){
    var arrCover = [];//用于存档重复的数值
    for(var i=0;i<arr.length;i++){
        if(arr.indexOf(arr[i]) !== arr.lastIndexOf(arr[i])&&arrCover.indexOf(arr[i])===-1){//存在重复  且尚未加入到arrCover中

            arrCover.push(arr[i]);
        }
    }
    return arrCover;
}