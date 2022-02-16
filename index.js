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
myLinkedList.printLinkedList()
// myLinkedList.insert(index, value)

// 
function plus(x){
  return function (y){
    if(y){
      return plus(x/y)
    } else {
      console.log(x)
      return x;
    }
  }
}

plus(2)(3)(4)(6)();

