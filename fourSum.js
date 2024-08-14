// => [1, 2, 3, 4, 0, -1, 2, 1, -3, 2]
// => [-1, -3, 0, 1, 1, 2, 2, 2, 3, 4]
//     i, j,   k                    l
function fourSum(arr, target) {
    let temp = [];
    arr = arr.sort();
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        if (i > 0 && arr[i] == arr[i - 1]) continue;
        for (let j = i + 1; j < n; j++) {
            if (j > i + 1 && arr[j] == arr[j - 1]) continue;
            let k = j + 1;
            let l = n - 1;
            while (k < l) {
                let sum = arr[i] + arr[j] + arr[k] + arr[l];
                if (sum == target) {
                    temp.push([arr[i], arr[j], arr[k], arr[l]])
                    k++;
                    l--
                }
                else if (sum < target) k++;
                else l--;
            }
        }
    }
    return temp;
}

let response = fourSum([1, 2, 3, 4, 0, -1, 2, 1, -3, 2], 0);
console.log("response: ", response);