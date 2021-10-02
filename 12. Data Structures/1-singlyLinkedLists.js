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

}

var list = new SinglyLinkedList()
list.push('HELLO');
list.push('WORLD');
list.push('ME');
list.push('!');
list.pop();
list.pop();
list.pop();
list.pop();