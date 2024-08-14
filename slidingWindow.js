function maxSum(arr, k) {
    let wSum = 0;
    let n = arr.length;
    for(let i=0; i<k; i++) {
        wSum += arr[i];
    }
    let max = wSum;
    for(let i = k; i<n; i++) {
        wSum = wSum - arr[i-k] + arr[i];
        max = Math.max(max, wSum);
    }
    return max;
}

let arr = [1, 4, 2, 10, 2, 3, 1, 0, 20];
let max = maxSum(arr, 4);
console.log("maxSum: ", max);

function smallestSubArrayWinGivenSum(arr, x) {
    let n = arr.length;
    let min = n + 1;
    for(let i=0; i<n; i++) {
        let sum = arr[i] 
        if(sum > x) {
            return 1;
        }

        for(let j=i+1; j<n; j++) {
            sum +=arr[j]; 
            if(sum > x && (j-i+1) < min) {
                min = (j - i +1);
            }
        }
    }
    return min;
}

let min = smallestSubArrayWinGivenSum(arr, 20);
console.log("min: ", min); 

function lengthOfLongestSubArray(arr, x) {
    let n = arr.length;
    let mp = new Map();
    let maxLen = 0;
    let sum = 0;
    for(let i=0; i<n; i++) {
        sum += arr[i];
        if(sum == x) {
            return i + 1;
        }
        if(mp.has(sum - x)) {
            maxLen = Math.max(maxLen, i - mp.get(sum - x))
        }
        if(!mp.get(sum)){
            mp.set(sum, i);
        }
    }
    return maxLen;
}

let maxLen = lengthOfLongestSubArray(arr, 6)
console.log("maxLen: ", maxLen);

function getNegative(arr, i, j) {
    console.log("i, j: ", i, j);
    for(let qi = i; qi<j; qi++) {
        if(arr[qi] < 0) {
            return arr[qi];
        }
    }
}
function firstNegativeNumberOfSubArraySizek(arr, k) {
    let temp = [];
    let n = arr.length;
    for(let i=0; i<n; i++) {
        let ng = (getNegative(arr, i, i+k))? getNegative(arr, i, i+k): 0;
        temp.push(ng)
    }
    return temp;
}

let arr1 = [1,2,-3,4,5,0,-1,-2];
let res = firstNegativeNumberOfSubArraySizek(arr1, 2);
console.log("res: ", res);

function countWindowDistinct(arr, k) {
    let n = arr.length;
    let temp = [];
    for(let i=0; i<n; i++) {
        console.log("i, i+k: ", i, i+k);
        let st = new Set(arr.splice(i, i+k));
        //console.log("st: ", st);
        temp.push(st.size);
    }
    return temp;
}

let arr2 = [1, 2, 1, 3, 4, 2, 3]
let count = countWindowDistinct(arr2, 4);
console.log("count: ", count);

function findMaxSubStringCountWithKChar(str, k) {
    str = str.split('');
    let n = str.length;
    let mp = {};
    let maxLen = 0;
    let j = 0;
    for(let i=0; i<n; i++) {
        if(!mp[str[i]]) {
            mp[str[i]] = 1;
        } else {
            mp[str[i]]++;
        }
        console.log("mp: ", mp);
        console.log("Object.keys(mp): ", Object.keys(mp));
        while(Object.keys(mp).length > k) {
            let leftChar = str[j];
            mp[leftChar]--;
            if(mp[leftChar] == 0) {
                delete(mp[leftChar]);
            }
            j++;
        }
        maxLen = Math.max(maxLen, i - j + 1)
    }
    return maxLen;
}

let str = 'abrraciiciciccacac', k = 2;
let count2 = findMaxSubStringCountWithKChar(str, k);
console.log("count2: ", count2);