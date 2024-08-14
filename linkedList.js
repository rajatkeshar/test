class Node {
    constructor(info) {
        this.info = info;
        this.next = null;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
        this.size = 0;
    }

    add(info) {
        let newNode = new Node(info);
        let q = this.head;
        console.log("q: ", q)
        if(!q) {
            this.head = newNode;
        } else {
            while(q.next) {
                q = q.next;
            }
            q.next = newNode;
        }
        this.size++
    }

    display() {
       let q = this.head;
       while(q) {
            console.log(q.info);
            q = q.next;
       } 
    }
}

let ll = new LinkedList();
ll.add(1);
ll.add(2);
ll.add(4);
ll.display();
console.log(ll.size)
