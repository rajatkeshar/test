function shuffle(arr) {
    for(let i=0; i<arr.length; i++) {
        let j = parseInt(Math.random() * arr.length);
        [arr[i], arr[j]] = [arr[j], arr[i]]
    }
    return arr;
}

let res = shuffle(['a', 'b', 'c', 'd', 'e', 'f', 'g']);
console.log("res: ", res);