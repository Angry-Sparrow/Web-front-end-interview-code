'use strict';
var test =1;
function func(){
    console.log(test);
    // let test = 2;
    console.log(this);
}
func();