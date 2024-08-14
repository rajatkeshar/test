function getPartitionIndex(arr, low, high) {
    let pivot = arr[low];
    let i=low, j=high;
    while(i<j) {
        while(arr[i] < pivot && i<=high) {
            i++;
        }
        while(arr[j] > pivot && j>=low) {
            j--;
        }
        if(i<j) {
            let temp = arr[i];
            arr[i] = arr[j];
            arr[j] = temp;
        }
    }
    return i;
}

function qs(arr, low, high) {
    if(low < high) {
        let partition = getPartitionIndex(arr, low, high);
        console.log("partition: ", partition);
        qs(arr, low, partition - 1);
        qs(arr, partition + 1, high);
    }
}

function run() {
    let arr = [9,4,3,2,6,7,5,1];
    qs(arr, 0, arr.length -1);
    console.log(arr);
}

run()