function getLeaders(arr) {
    let n = arr.length;
    arr = arr.reverse();
    let res = [arr[0]];
    for(let i=0; i<n ; i++) {
        if(i>0 && arr[i] > arr[i+1]) {
            res.push(arr[i]);
        }
    }
    return res.reverse();
}


let res = getLeaders([63, 70, 80, 33, 33, 47, 20]);
console.log("res: ", res);