class Node {
  constructor(value) {
    this.value = value;
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
  find(value) {
    if (value === this.root.value) {
      return this.root;
    } else {
      var current = this.root;
      if (current !== null) {
        if (value < current.value) {
          if (current.left.value === value) {
            return current.left;
          } else {
            current = current.left;
          }
        } else if (value > current.value) {
          if (current.right.value === value) {
            return current.right;
          } else {
            current = current.right;
          }
        }
      } else {
        return undefined;
      }
    }
  }
  remove(val) {
    let delNode;
    const del = (root, val) => {
      if (root === null) return root;
      else if (val > root.value) root.right = del(root.right, val);
      else if (val < root.value) root.left = del(root.left, val);
      else {
        // if node is found
        if (delNode === undefined) delNode = root.value;
        // case 1: no children (leaf)
        if (root.left === null && root.right === null) {
          root = null;
        }

        // case 2: 1 child
        else if (root.left === null) {
          // right child
          root = root.right;
        } else if (root.right === null) {
          // left child
          root = root.left;
        }

        // case 3: 2 children
        else {
          let temp = findMin(root.right); // assign a root to min in a right subtree
          root.value = temp.value;
          root.right = del(root.right, root.value);
        }
      }
      return root;
    };
    const findMin = (root) => {
      if (root === null) return root;
      if (root.left) return findMin(root.left);
      return root;
    };

    this.root = del(this.root, val);
    return delNode;
  }
}

var binarySearchTree = new BinarySearchTree();
binarySearchTree.insert(15).insert(20).insert(10).insert(12);
var foundNode = binarySearchTree.find(20);
foundNode.value; // 20
foundNode.left; // null
foundNode.right; // null

var binarySearchTree = new BinarySearchTree();

binarySearchTree.insert(15).insert(20).insert(10).insert(12);
var foundNode = binarySearchTree.find(120);
foundNode; // undefined

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);
binarySearchTree.remove(50);
binarySearchTree.root.right.value; // 20
binarySearchTree.root.right.right; // null

binarySearchTree.remove(5);
binarySearchTree.root.left.left.value; // 1
binarySearchTree.root.left.left.right; // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50);

binarySearchTree.remove(1);
binarySearchTree.root.left.left.value; // 5
binarySearchTree.root.left.left.left; // null
binarySearchTree.root.left.left.right; // null

binarySearchTree.remove(20);
binarySearchTree.root.right.value; // 50
binarySearchTree.root.right.right; // null
binarySearchTree.root.right.left; // null

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(15)
  .insert(20)
  .insert(10)
  .insert(12)
  .insert(1)
  .insert(5)
  .insert(50)
  .insert(60)
  .insert(30)
  .insert(25)
  .insert(23)
  .insert(24)
  .insert(70);

binarySearchTree.remove(10);
binarySearchTree.root.left.value; // 12
binarySearchTree.root.left.left.value; // 1
binarySearchTree.root.left.left.right.value; // 5

binarySearchTree.remove(50);
binarySearchTree.root.right.value; // 20
binarySearchTree.root.right.right.value; // 60
binarySearchTree.root.right.right.left.value; // 30

var binarySearchTree = new BinarySearchTree();
binarySearchTree
  .insert(22)
  .insert(49)
  .insert(85)
  .insert(66)
  .insert(95)
  .insert(90)
  .insert(100)
  .insert(88)
  .insert(93)
  .insert(89);

binarySearchTree.remove(85);
binarySearchTree.root.right.right.value; // 88
binarySearchTree.root.right.right.right.left.left.value; // 89
