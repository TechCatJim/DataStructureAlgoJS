class Node {
  constructor(val) {
    this.val = val;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  push(val) {
    var node = new Node(val);

    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      var tmp = this.first;
      this.first = node;
      this.first.next = tmp;
    }

    return ++this.size;
  }
  pop() {
    if (!this.size) {
      return undefined;
    }
    let nodeToRemove = this.first;
    if (this.size === 1) {
      this.last = null;
    }
    this.first = nodeToRemove.next;
    this.size--;
    return nodeToRemove.val;
  }
}

var stack = new Stack();

stack.push(10);
stack.push(100);
stack.push(1000);
var removed = stack.pop();
removed; // 1000
stack.size; // 2
stack.pop();
stack.pop();
stack.size; // 0
