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
    return this.printLinkedList()
  }

  append(value){
    let node = new Node(value);
    this.tail.next = node;
    this.tail = node;
    this.length++;
    return this.printLinkedList()
  }

  prepend(value){
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
    this.length++;
    return this.printLinkedList()
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
      this.length++;
      return this.printLinkedList()
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
      console.log(pre)
      let del = pre.next;
      let remainingNode = del.next;
      pre.next = remainingNode;
      this.length--;
      return this.printLinkedList()
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

  reverse(){
    if(!this.head.next){
      return this.head;
    }
    let first = this.head;
    this.tail = this.head;
    let second = first.next;
    while(second){
      let temp = second.next;
      second.next = first;
      first = second;
      second = temp;
    }
    this.tail.next = null;
    this.head = first;
    return this.printLinkedList()
  }
  
}

const myLinkedList = new LinkedList(10);

myLinkedList.prepend(5)
myLinkedList.append(16)
myLinkedList.prepend(20)
myLinkedList.prepend(30)
myLinkedList.insert(4, 60)
myLinkedList.reverse()
myLinkedList.delete(4)


