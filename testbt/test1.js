// // 0, 1, 1, 2, 3, 5, 7---- 20; 

// function fib(n) {
    
//     // if(n == 0 ) return 0;
//     // if(n == 1) return 1;
//     // return fib(n-1) + fib(n-2);
//     // //console.log(res);

//     // 0, 1, 1, 2, 3, 5, 7---- 20; 


//     let first = 0;
//     let second = 1;
//     let sum = 0;
//     console.log(first);
//     console.log(second);
//     for(let i=0; i<n; i++) {
//         sum = first + second;
//         first = second;
//         second = sum;
//         console.log(sum);
//     } 
// }
// console.time();
// let n = fib(20);
// //console.log(n);
// console.timeEnd();

// // req. 
// //     let cachedInfo = get.cache()
// //     if(!cachedInfo) {
// //         let data = get.db();
// //     }

// AdminServer
//     Topics => 
//         1. Poll (reactions) polldata, starttime, endtime, result. => ans
//         2, predictions (reactions)
//         3. AnchorTopic (reactions)
//         4. commentary (reactions)
//         5. JDDD Questons.

//         pushing data to Akamai CDN
//         /0

//         a - 40%
//         b - 60%

arr = [1, 3, -3, 6, 0, 8, 5, 7];
let k = 8;
let count = 0;
let st = new Set();
for(let i=0; i<n; i++) {
    // for(j=1; j<n; j++) {
    //     let sum = arr[i] + arr[j];
    //     if(sum == k) {
    //         count++;
    //     } 
    // }
    b = k - arr[i]
    if(st.has(b)) {
        count++;
    } else {
        st.add(arr[i]);
    }
}

return count;