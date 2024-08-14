let p1 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 1");
        resolve("result from promise 1");
    }, 2000)
})

let p2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 2");
        resolve("result from promise 2");
    }, 2000)
})

let p3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("promise 3");
        resolve("result from promise 3");
    }, 2000)
})

let res = Promise.all([p1,p2,p3]).then((result) => {
    console.log('all promise got executed');
    console.log(result);
})

// p1.then((result)=> {
//     return p2(result);
// }).then((result) => {
//     return p3(result);
// }).then((finalResult) => {
//     console.log("all promises are executed");
//     console.log(finalResult);
// }).catch((e) => {
//     console.log(e);
// })