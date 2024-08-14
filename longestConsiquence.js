let arr = [102, 4, 5, 103, 101, 104, 2, 1]

function longestConseq(arr) {

    let nums = new Set(arr)
    arr = [...nums];
    let longest = 1;

    for(let i=0; i<arr.length; i++) {
        if(!nums.has(arr[i] - 1)) {
            count = 1;
            x = arr[i]
            while(nums.has(x + 1)) {
                x = x + 1
                count++;
            }
            longest = Math.max(longest, count);
        }
    }
    console.log("longest: ", longest);
}

let res = longestConseq(arr);