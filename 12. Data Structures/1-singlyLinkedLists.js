/*
Linked List
  A linked list is a dynamic data structure that allows for constant time insertion and removal at any point in the linked list (compare this to an array which on average has linear time insertion and removal operations). In exchange for this insertion and removal speed, linked lists are not indexed and any find operations on a link list require the linear time operation of traversing the entire linked-list from the beginning.

  - A data structure that contains a head, tail and length property.
  - Linked Lists consist of nodes, each node has a value and a pointer to another node or null.
*/

/*
Comparisons with Array
  List
    - Do not have indexes!
    - Connected via nodes with a next pointer
    - Random access is not allowed

  Array
   - Indexed in order!
   - Insertion and deletion can be expensive
   - Can quickly be accessed at a specific index
*/

class Node{
  constructor(val){
      this.val = val;
      this.next = null;
  }
}

class SinglyLinkedList{
  constructor(){
      this.head = null;
      this.tail = null;
      this.length = 0;
  }

  //Push: add a new node to the end of the Linked List.
  push(val){
      var newNode = new Node(val);
      if(this.head === null){
          this.head = newNode;
          this.tail = this.head;

      } else {
          this.tail.next = newNode;
          this.tail = newNode;
      }
      this.length++
      return this;
  }
  //Pop: remove node from the end of the Linked List.
  pop() {
      if(this.head === null){
          return undefined;
      } else {
          var current = this.head;
          var newTail = current;
          while (current.next){
              newTail = current;
              current = current.next;
          }

          newTail.next = null;
          this.tail = newTail;
          this.length--;
          if(this.length === 0){
              this.head = null;
              this.tail = null;
          }
          return current;
      }
  }
  //Shifting: removing a new node from the beginning of the Linked List.
  shift() {
    if(!this.head) return undefined;
        let oldHead = this.head;
        this.head = this.head.next;
        this.length--;
         if(this.length === 0){
            this.head = null;
        }
        return oldHead;
  }
  //Unshifting: adding a new node to the beginning of the Linked List.
  unshift(val) {
    var newNode = new Node(val);
    if(!this.head){
        this.head = newNode
        this.tail = this.head;

    } else {
       newNode.next = this.head;
       this.head = newNode;
    }
    this.length++;
    return this;
  }
  //Get: retrieving a node by it's position in the Linked List.
  get(index){
    if(index < 0 || index >= this.length) return null;
    let count = 0;
    let current = this.head;
    while (count !== index){
        count++;
        current = current.next;
    }
    return current;
  }
  //Set: changing the value of a node based on it's position in the Linked List.
  set(index, value){
    let current = this.get(index);
    if(current){
        current.val = value;
        return true;
    }
    return false;
  }
  //Insert: add a node to the Linked List at a specific position
  insert(index, value){
    if(index < 0 || index > this.length){
        return false;
    } else if (index === this.length){
        this.push(value);
        return true;
    } else if (index === 0){
      //another way of returning true
       return  !!this.unshift(value);
    } else {
        let newNode = new Node(value);
        let nodeBefore = this.get(index-1);
        let nodeAfter = nodeBefore.next;
        // let nodeAfter = this.get(index);
        nodeBefore.next = newNode;
        newNode.next = nodeAfter;
        this.length++;
        return true;
    }
  }
  //Remove: removing a node from the Linked List at a specific position.
  remove(index){
    if(index < 0 || index > this.length) return undefined;
    if (index === this.length - 1) return this.pop();
    if (index === 0) return this.shift();
    // let nodeBefore = this.get(index - 1);
    // let nodeAfterNext = this.get(index + 1);
    // let removedNode = nodeBefore.next;
    // nodeBefore.next = nodeAfterNext;
    var previousNode = this.get(index - 1);
    var remove = previousNode.next;
    previousNode.next = remove.next;
    this.length--;
    return remove;
  }

}

var list = new SinglyLinkedList()
list.push('HELLO');
list.push('WORLD');
list.push('ME');
list.push('!');
list.shift();