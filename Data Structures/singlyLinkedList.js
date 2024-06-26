class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return undefined;
    let current = this.head;
    let newTail = current;
    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;
    if (this.length == 0) {
      this.head = null;
      this.tail = null;
    }
    return current;
  }

  shift() {
    if (!this.head) return undefined;
    let current = this.head;
    this.head = current.next;
    this.length--;
    if (this.length == 0) this.tail = null;
    return current.val;
  }

  unshift(val) {
    let newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;
    let counter = 0;
    let current = this.head;
    while (index != counter) {
      current = current.next;
      counter++;
    }
    return current;
  }

  set(index, val) {
    let current = this.get(index);
    if (!current) return false;
    current.val = val;
    return true;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index == 0) return !!this.unshift(val);
    if (index == this.length) return !!this.push(val);
    let newNode = new Node(val);
    let previous = this.get(index - 1);
    let temp = previous.next;
    previous.next = newNode;
    newNode.next = temp;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return undefined;
    if (index == 0) return !!this.shift();
    if (index == this.length - 1) return !!this.pop();
    let previous = this.get(index - 1);
    let current = this.get(index);
    previous.next = current.next;
    this.length--;
    return true;
  }

  reverse(){
    let node = this.head
    this.head = this.tail
    this.tail = node
    let next
    let previous = null
    for(let i = 0; i < this.length; i++) {
      next = node.next
      node.next = previous
      previous = node
      node = next
    }
    return this
  }
}

let list = new SinglyLinkList();
list.push("Hello");
list.push("World");
list.push("!");
