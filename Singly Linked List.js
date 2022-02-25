// 10 --> 5 --> 16
class Node {
  constructor(value){
    this.value = value;
    this.next = null;
  }
}
class LinkedList {
  constructor(value){
    this.head = new Node(value)
    this.tail = this.head
    this.length = 1
  }

  append(value){
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
  }

  prepend(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
  }

  insert(index, value){
    if(0 < index && index <= this.length){
      let pre = this.head;
      for (let i=0; i<index-1; i++){
        pre = pre.next
      }
      let node = new Node(value);
      node.next = pre.next
      pre.next = node
      this.length++
    } else {
      console.log('please enter value between 0 and '+this.length)
    }
  }

  delete(index){
    if(0 < index && index <= this.length){
      let pre = this.head;
      for (let i=0; i<index-1; i++){
        pre = pre.next
      }
      let del = pre.next;
      let remainingNode = del.next;
      pre.next = remainingNode;
      this.length--;
    } else {
      console.log('please enter value between 0 and '+this.length)
    }
  }

  printLinkedList() {
    let arr = [];
    let temp = this.head;
    let linkedListlength = this.length
    while(linkedListlength >= 1){
      if(temp.next != null){
        let val = temp.value;
        temp = temp.next;
        arr.push(val);
        linkedListlength--;
      } else {
        let val = temp.value;
        arr.push(val);
        linkedListlength--;
      }
    }
    console.log(arr);
  }


}

const myLinkedList = new LinkedList(10);

myLinkedList.prepend(5)
myLinkedList.append(16)
myLinkedList.prepend(20)
myLinkedList.prepend(30)
myLinkedList.insert(4, 60)
myLinkedList.printLinkedList()
myLinkedList.delete(4)
myLinkedList.printLinkedList()
myLinkedList.delete(2)
myLinkedList.printLinkedList()

// Recursively adding numbers
function plus(x){
  return function (y){
    if(y){
      return plus(x+y)
    } else {
      console.log(x)
      return x;
    }
  }
}

// plus(2)(3)(4)(6)();


