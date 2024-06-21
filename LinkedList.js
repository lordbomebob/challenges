// In order to create a linked list
// We have to create a node first.

// Node

// [10] -> [20] -> [30] -> [40] -> [50] -> null
class Node {
    constructor(data) {
        this.data = data; // Data on that node
        this.next = null; // Pointer to the next node
    }
}

let node1 = new Node(10);
let node2 = new Node(20);
let node3 = new Node(30)
let node4 = new Node(40);
let node5 = new Node(50);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;


console.log(node1);

// Traverse the Linked List

function traverseNodes(node) {
    let str = '';
    while(node !== null) {
        str = str + node.data + ' -> ';
        node = node.next;
    }

    console.log(str + ' null '); // 10 -> 20 -> 30 -> 40 -> 50 -> null
}


// Class LinkedList // size

// [1] --> null
// H                C
// [0] --> [1] --> null
class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    prepend(data) {
        let newNode = new Node(data);
        newNode.next = this.head;
        this.head = newNode; // Updating the new Node to the head
        this.size++; // Increment the size
    }

    // ASSIGNMENT 1: Implement append method
    // Append A node.
    append(data){
        let newNode = new Node(data);
        if(!this.head){
            this.head=newNode
        }else{
            let current=this.head
            while(current.next){
                current=current.next
            }
            current.next=newNode
        }
        this.size++
    }
    printList() {
        let current = this.head;
        let str = '';
        while(current !== null) {
            str = str + current.data + ' -> ';
            current = current.next;
        }

        console.log(str + ' null ');
    }

    // Count = 2
                //   [15]
  // H,         P       nN       C
    // [30] -> [20] -> [15] ->[10] -> null
    insertAt(data, index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        let newNode = new Node(data);
        if (index === 0) {
            this.prepend(); // If the index is 0, prepend it.
        }

        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        newNode.next = current;
        previous.next = newNode;
        this.size++;
    }

    // removeFirst
    // [30] -> [20] -> [15] ->[10] -> null
    removeFirst() {
        if (!this.head) {
            return null;
        }

        let removedNode = this.head;
        this.head = this.head.next;
        this.size--;
        return removedNode;
    }

    // Assignment:
    // Implement removeLast method
    removeLast(){
        if (!this.head) {
            return null;
        }
        if(this.size === 1 ){
            this.size--;
            return this.head;
        }
        let current= this.head
        let previous
        while(current.next){
            previous=current
            current=current.next
        }
        let removedNode=previous.next
        previous.next=null
        this.size--
        return removedNode

    }

    // Remove at a specifc index

// Count = 1, index = 1
    //  P       C
    // [30] -> [15] ->[10] -> null
    removeAt(index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        if (index === 0) {
            return this.removeFirst();
        }

        let current = this.head;
        let previous;
        let count = 0;

        while (count < index) {
            previous = current;
            current = current.next;
            count++;
        }

        previous.next = current.next;
        this.size--;

        return current.data;
    }

        //,H                           C
     // [30] -> [20] -> [15] ->[10] -> null
    search(data) {
        let current = this.head;

        while (!current) {
            if (current.data === data) {
                return true;
            }
            current = current.next;
        }

        return false;
    }
//  index = 3, data = 25;
 // count = 3;
       //                      C
    // [30] -> [20] -> [15] ->[10] -> null
    updateAt(data, index) {
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }

        let current = this.head;
        let count = 0;

        while (count < index) {
            current = current.next;
            count++;
        }

        current.data = data; // Update the data that we want.

    }
    merge(data){
        let current=this.head
        let llc=data.head
        
        let storage=new Node(0)
        if(current.data>=llc.data){
            this.head=llc
        }
        while(current && llc){
            
            if(current.data<=llc.data){
                storage.next = current
                current=current.next
            }else{
                storage.next= llc
                llc=llc.next
            }
            storage=storage.next;
        }
        if (current) {
            storage.next = current;
        } else {
            storage.next = llc;
        }
        
        this.size+=data.size
    }


    deleteAtEnd(index){
        if (index < 0 || index > this.size) {
            return null; // Out of bounds
        }
        if (index === 0) {
            return this.removeLast();
        }
        let current=this.head
        let previous=null
        let count=0
        while (count < this.size-index) {
            previous=current
            current=current.next
            count++
        }
        previous.next = current.next;
        this.size--;
    }
}

let linkedList = new LinkedList();

// 10 -> null
// 20 -> 10 -> null
// 30 -> 20 -> 10 -> null
linkedList.prepend(10);
linkedList.prepend(20);
linkedList.prepend(30);
linkedList.insertAt(15, 2);
linkedList.updateAt(25, 3);

// 30 -> 20 -> 15 -> 25 -> null
linkedList.printList();

linkedList.removeLast()
linkedList.printList();
linkedList.deleteAtEnd(2)
linkedList.printList();
// Blockchain
let linkedList2 = new LinkedList();
let linkedList3 = new LinkedList();
linkedList2.prepend(8)
linkedList2.prepend(7)
linkedList2.prepend(5)
linkedList2.prepend(3)
linkedList2.prepend(1)
linkedList3.prepend(15)
linkedList3.prepend(12)
linkedList3.prepend(6)
linkedList3.prepend(4)
linkedList3.prepend(2)
linkedList2.printList();
linkedList3.printList()
linkedList2.merge(linkedList3)
linkedList2.printList();
