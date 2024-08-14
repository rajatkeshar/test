const ALPHABET = 26;

class TrieNode{
    constructor() {
        this.children = new Array(ALPHABET);
        this.isEndOfWord = false;
    }
}

function insertNode(root, key) {
    let q = root;
    for(let i=0; i<key.length; i++) {
        let index = key[i].charCodeAt(0) - 'a'.charCodeAt(0);

        if( q.children[index] == null) {
            q.children[index] = new TrieNode();
        }
        q = q.children[index];
    }
    q.isEndOfWord = true;
}

function searchNode(root, key) {
    let q = root;
    for(let i=0; i<key.length; i++) {
        let index = key[i].charCodeAt(0) - 'a'.charCodeAt(0);
        if(q.children[index] == null) {
            return false;
        }
        q = q.children[index];
    }

    return (q != null && q.isEndOfWord);
}

function isEmpty(root) {
    for(let i=0; i<ALPHABET; i++) {
        if(root.children[i] != null) {
            return false;
        }
        true;
    }
}

function removeNode(root, key, depth) {
    let q = root;

    if(depth == key.length) {
        if(q.isEndOfWord) {
            q.isEndOfWord = false;
        }

        if(isEmpty(q)) {
            q = null;
        }

        return q;
    }
    
    let index = key[depth].charCodeAt(0) - 'a'.charCodeAt(0);
    q.children[index] = removeNode(q, key, depth + 1);    

    if(isEmpty(q) && q.isEndOfWord === false) {
        q = null;
    }
    return q;
}

function display(root, str, level) {

    // if(root.isEndOfWord) {
    //     for(let i=0; i<str.length; i++) {
    //         str[i] = '';
    //     }
    //     console.log(str.join(""));
    // }
    
    for(let i=0; i<ALPHABET; i++) {
        if(root.children[i] != null) {
            str[level] = String.fromCharCode(i + 'a'.charCodeAt(0))
            display(root.children[i], str, level + 1);
        }
    }
}

function run() {
    keys = ["the", "a", "there", "answer", "any", "by", "bye", "their", "hero", "heroplane"];
    let root = new TrieNode();

    for(let i=0; i<keys.length; i++) {
        insertNode(root, keys[i]);
    }

    // console.log("remove node, by: ", removeNode(root, "by", 0));
    // console.log("remove node, yoyo: ", removeNode(root, "yoyo", 0));
    // console.log("remove node, hero: ", removeNode(root, "hero", 0));
    let str = new Array(20).fill(0);
    display(root, str, 0);
    //console.log(str);
}

run()