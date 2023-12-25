const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor(){
    this._root = null; 
  }

  root() {
    return this._root;
  }

  add(data,node) {
    if(!node){
      //without chaining
      // this._root ? this.add(data,this._root) : this._root = new Node(data);

      //with chaining
      if(this._root){
        return this.add(data,this._root)
      }else{
        this._root = new Node(data);
        return this;
      }
      // /with chaining
    }else{
      //without chaining
      // if(data > node.data){
      //   node.right ? this.add(data, node.right) : node.right = new Node(data);
      // }else{
      //   node.left ? this.add(data, node.left) : node.left = new Node(data);
      // };

      //with chaining
      if(data > node.data){
        if(node.right){
          return this.add(data, node.right);
        }else{
          node.right = new Node(data);
          return this;
        };
      }else{
        if(node.left){
          return this.add(data, node.left);
        }else{
          node.left = new Node(data);
          return this;
        };
      };
      // /with chaining
    };
  };

  has(data,node,find,needParentNode) {
    if(!node){
      return this._root ? needParentNode ? this.has(data,this._root,find,true) : this.has(data,this._root,find)  : find ? null:false;
    }else{
      if(node.data === data){
        return find ? needParentNode ? {node,parent:needParentNode}:node : true;
      }else{
        if(data > node.data){
          return node.right ? needParentNode ?this.has(data, node.right,find,node) : this.has(data, node.right,find) : find ? null:false;
        }else{
          return node.left ? needParentNode ? this.has(data, node.left,find,node) : this.has(data, node.left,find) : find ? null:false;
        };
      };
    };
  }

  find(data,needParentNode) {
    return this.has(data, null, true, needParentNode);
  }

  remove(data) {
    // throw new NotImplementedError('Not implemented');
    // remove line with error and write your code here

    //const removeData = this.find(data);
    /*if(removeData){
      //if deleted node
     if(removeData.node.left === null && removeData.node.right === null){
        if(removeData.parent instanceof Node){
          removeData.parent.data > data ? removeData.parent.left = null : removeData.parent.right = null;
          return this;
        }
        }
  }*/
}

  min(node) {
    if(!node){
      return this._root ? this.min(this._root) : null;
    }else{
      return node.left ? this.min(node.left) : node.data;
    };
  }

  max(node) {
    if(!node){
      return this._root ? this.max(this._root) : null;
    }else{
      return node.right ? this.max(node.right) : node.data;
    };
  }
}

function addItems(){
  console.log('\n Add Items');
console.log('add много цифир');
/*bst.add(13);
bst.add(15);
bst.add(9);
bst.add(20);
bst.add(18);
bst.add(32);
bst.add(25);
*/
}

module.exports = {
  BinarySearchTree
};