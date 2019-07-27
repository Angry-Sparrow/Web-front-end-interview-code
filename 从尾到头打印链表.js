/*
 * @Author: lee
 * @Date:2019/7/24 10:22
 * @Last Modified by:lee
 * @Last Modified time:2019/7/24 10:22
 */

 function Node(element){
     this.element = element;
     this.next = null;
 }
 function LinkedList(){
     this.head = new Node("head");
     this.length = 0;
 }
 //默认插入尾部
 LinkedList.prototype.born = function(arr){
     var arr_len = arr.length;
     for(var i = 0; i < arr_len; i++){

         var newNode = new Node(arr[i]);
         var querynode = new Node();
         if(i == 0){
            this.head = newNode;
             this.length++;
         }else{
             querynode = this.head;
             for(var j = 0; j < this.length; j++){
                 querynode = querynode.next;
             }
             querynode.next = newNode;
             newNode.next = null;
             this.length++;
         }

         process.stdout.write(querynode.element.toString());
     }

 };
 LinkedList.prototype.find = function (pos){
     if(pos<0 || pos > this.length){
         return false;
     }
     var quserynode = new Node();
     for(var i = 0,querynode = this.head;i < pos;i++){
         querynode = querynode.next;
     }
     process.stdout.write(querynode.element.toString());
 };
 LinkedList.prototype.display = function(){
     var querynode = new Node();
     for(var i = 0,querynode = this.head;i<this.length;i++){
         querynode = querynode.next;
         process.stdout.write(querynode.element.toString());
     }
 };
 var myList = new LinkedList();
 console.log("请输入数据:");
 process.stdin.on("data",function(element){
     var arr = element.toString().split(",");

     console.log("链表元素为：");
     myList.born(arr);
     myList.display();
     console.log();
     console.log("查找链表位置2的元素：");
     myList.find(2);
     console.log();
     console.log("查找链表位置0的元素：");
     myList.find(0);
     console.log();
 });