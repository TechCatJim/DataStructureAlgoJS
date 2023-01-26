class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(data) {
    var node = new Node(data);
    if (!this.first) {
      this.first = node;
      this.last = node;
    } else {
      this.last.next = node;
      this.last = node;
    }
    return ++this.size;
  }
}
var queue = new Queue();
queue.enqueue(10); // 1
queue.size; // 1
queue.enqueue(100); // 2
queue.size; // 2
queue.enqueue(1000); // 3
queue.size; // 3
