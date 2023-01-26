class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return undefined;
    let curr = this.head;
    for (let i = 0; i < idx; i++) {
      curr = curr.next;
    }
    return curr;
  }

  set(index, val) {
    if (index > this.length) return false;
    var foundNode = get(index);
    foundNode.val = val;
    length++;
  }

  pop() {
    if (this.length === 0) return undefined;
    //set temporary to the head
    let temp = this.head;
    let oldtail = this.tail;

    //loop through the list
    for (let i = 0; i < this.length; i++) {
      //if the temp.next is the tail set the temp.next to null because we are deleting it
      if (temp.next === this.tail) {
        temp.next = null;
        this.tail = temp;
        this.length--;
        return oldtail;
      } else {
        temp = temp.next;
      }
    }
  }

  shift(val) {
    if (this.length === 0) return null;
    var newhead = this.head.next;
    this.head = newhead;
    this.length--;
    return this;
  }

  rotate(index) {
    if (index === 0 || index > this.length) return this;
    if (index < 0) index = this.length + index;

    var current = this.head;
    var count = 0;
    while (count < index) {
      this.push(current.val);
      this.shift(current.val);
      current = current.next;
      count++;
    }
    return this;
  }

  unshift(val) {
    let node = new Node(val);
    this.length === 0 ? (this.tail = node) : (node.next = this.head);
    this.head = node;
    this.length++;
    return this;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    var newNode = new Node(val);
    var prev = this.get(index - 1);
    var temp = prev.next;
    prev.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }
  remove(index) {
    if (index < 0 || index > this.length) return undefined;
    if (index === 0) {
      let temp = this.head;
      this.head = this.head.next;
      this.length--;
      return temp;
    }

    let prevNode = this.head;
    let count = 0;

    while (count < index - 1) {
      prevNode = prevNode.next;
      count++;
    }

    let returnvalue = prevNode.next;
    prevNode.next = prevNode.next.next;
    this.length--;
    return returnvalue;
  }
}

var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;

singlyLinkedList.rotate(3);
singlyLinkedList.head.val; // 20
singlyLinkedList.head.next.val; // 25
singlyLinkedList.head.next.next.val; // 5
singlyLinkedList.head.next.next.next.val; // 10
singlyLinkedList.head.next.next.next.next.val; // 15
singlyLinkedList.tail.val; // 15
singlyLinkedList.tail.next; // null
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;

singlyLinkedList.rotate(-1);
singlyLinkedList.head.val; // 25
singlyLinkedList.head.next.val; // 5
singlyLinkedList.head.next.next.val; // 10
singlyLinkedList.head.next.next.next.val; // 15
singlyLinkedList.head.next.next.next.next.val; // 20
singlyLinkedList.tail.val; // 20
singlyLinkedList.tail.next; // null
var singlyLinkedList = new SinglyLinkedList();
singlyLinkedList.push(5).push(10).push(15).push(20).push(25);
singlyLinkedList.head.val; // 5
singlyLinkedList.tail.val; // 25;
