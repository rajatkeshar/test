// => [1, 2, 3, 4, 0, -1, 2, 1, -3, 2]
// => [-1, -3, 0, 1, 1, 2, 2, 2, 3, 4]
//     i, j                         k

function threeSum(arr, target) {
    arr = arr.sort();
    let temp = [];
    let n = arr.length;
    for(let i=0; i<n; i++) {
        if(i>0 && arr[i] == arr[i-1]) continue;
        let j = i + 1;
        let k = n - 1;
        while(j < k) {
            let sum = arr[i] + arr[j] + arr[k];
            if(sum === target) {
                temp.push([arr[i], arr[j], arr[k]]);
                j++;
                k--;
            }
            else if(sum < target) j++;
            else k--; 
        }
    }
    return temp;
}

let response = threeSum([1, 2, 3, 4, 0, -1, 2, 1, -3, 2], 0);
console.log("response: ", response);