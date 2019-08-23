/*
 * @Author: lee
 * @Date:2019/8/22 23:08
 * @Last Modified by:lee
 * @Last Modified time:2019/8/22 23:08
 */
// 构造节点
class Node{
    constructor(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
}

// 构造二叉搜索树
class Tree{
    constructor(param = null){
        if(param){
            this.root = new Node(param);
        }else{
            this.root = null;
        }
    }
}

// 二叉搜索树新增
insert(key)
{
    if (this.root === null) {
        this.root = new Node(key);
    } else {
        this._insertNode(this.root, key);
    }
}
_insertNode(node, key)
{
    if (key < node.key) {
        if (node.left === null) {
            node.left = new Node(key);{1}
        } else {
            this._insertNode(node.left, key);{2}
        }
    } else if (key > node.key) {
        if (node.right === null) {
            node.right = new Node(key);{3}
        } else {
            this._insertNode(node.right, key);{4}
        }
    }
}