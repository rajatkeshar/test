function reverseArray(arr, s, d) {
    let left = s;
    let right = d;
    while (left < right) {
        [arr[left], arr[right]] = [arr[right], arr[left]];
        left++;
        right--;
    }
    return arr;
}

var rotate = function(nums, k) {
    let n = nums.length;
    nums = nums.reverse();
    reverseArray(nums, 0, n-k-1);
    reverseArray(nums, n-k, n - 1);
    return nums
};

let roteted = rotate([0,1,2,3,4,5,6,7,9], 7);
//7,6,5,4,3,2,1,0
console.log(roteted)