class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }
  insert(value) {
    if (this.root === null) {
      this.root = new Node(value);
      return this;
    } else {
      var current = this.root;
      while (true) {
        if (value < current.value) {
          if (current.left === null) {
            current.left = new Node(value);
            return this;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right === null) {
            current.right = new Node(value);
            return this;
          } else {
            current = current.right;
          }
        }
      }
    }
  }
  DFSPreOrder() {
    if (this.root === null) {
      return null;
    } else {
      let arr = [];
      const traversefunction = function (currNode) {
        arr.push(currNode.value);
        currNode.left && traversefunction(currNode.left);
        currNode.right && traversefunction(currNode.right);
      };
      traversefunction(this.root);
      return arr;
    }
  }
  DFSInOrder() {
    if (this.root === null) {
      return null;
    } else {
      let arr = [];
      const traversefunction = function (currNode) {
        currNode.left && traversefunction(currNode.left);
        arr.push(currNode.value);
        currNode.right && traversefunction(currNode.right);
      };
      traversefunction(this.root);
      return arr;
    }
  }
  DFSPostOrder() {
    if (this.root === null) {
      return null;
    } else {
      let arr = [];
      const traversefunction = function (currNode) {
        currNode.left && traversefunction(currNode.left);
        currNode.right && traversefunction(currNode.right);
        arr.push(currNode.value);
      };
      traversefunction(this.root);
      return arr;
    }
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
binarySearchTree.DFSPreOrder(); // [15, 10, 1, 5, 12, 20, 50]

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
binarySearchTree.DFSInOrder(); // [1, 5, 10, 12, 15, 20, 50]

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
binarySearchTree.DFSPostOrder(); // [5, 1, 12, 10, 50, 20, 15]
