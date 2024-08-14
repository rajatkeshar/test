
async function randomNum() {
    let a = 10;
    return new Promise((resolve, reject) => {
        console.log("a: ", a);
        setTimeout(function() {
            return resolve(Math.random() * 10);
        }, 3000)
    })
}

async function test() {
    randomNum().then((res)=> {
        console.log("rand: ", res);
    }).catch((e) => {

    }).finally(() => {
        console.log("yoyo");
    });
    
}

test();

// un sup oil

        
// 1- 3L  1L (we can add 2 L)
// 1- 5L   5L f 1L + 3L
//     flush
