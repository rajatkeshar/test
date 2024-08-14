function pair(arr, k) {
    let left = 0;
    let right = arr.length - 1;
    while(left <= right) {
        let mid = Math.floor((left + right)/2);

        if(arr[mid] <= k) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    console.log(arr[left], arr[right]);
}

pair([10, 20, 30, 40, 50], 25);