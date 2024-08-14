class Node {
    constructor(info) {
        this.info = info;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    insert(info) {
        let newNode = new Node(info);
        if(!this.root) {
            this.root = newNode;
        } else {
            this.insertNode(this.root, newNode);
        }
    }

    insertNode(q, newNode) {
        if(newNode.info < q.info) {
            if(q.left == null) {
                q.left = newNode;
            } else {
                this.insertNode(q.left, newNode);
            }
        } else {
            if(q.right == null) {
                q.right = newNode;
            } else {
                this.insertNode(q.right, newNode);
            }
        }
    }
    search(q, info) {
        if(!q) {
            return -1;
        }
        if(q.info == info) {
            return q;
        } else if(q.info < info) {
            return this.search(q.right, info);
        } else {
            return this.search(q.left, info); 
        }
    }

    inOrder(root) {
        if(root) {
            this.inOrder(root.left);
            console.log(root.info);
            this.inOrder(root.right);
        }
    }
}

let bst = new BinarySearchTree();

bst.insert(6);
bst.insert(4);
bst.insert(9);
let s = bst.search(bst.root, 4)
console.log("s ele: ", s);
bst.inOrder(bst.root);