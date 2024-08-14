let req = require('request-promise');

var response = [];
async function products(limit, skip) {
    let options = {
        method: 'GET',
        uri: `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
        'content-type': ['application/json'],
        json: true
    }

    async function fetchP(limit, skip) {
        let product = await req(options);
        if(product.products.length) {
            response.push(product.products)
            products(limit, skip + 10);
        } else {
            //console.log("response: ", response);
            return response;
        }
    }
    
    await fetchP(limit, skip);
    return response;
}

products(10, 0).then((data) => {
    console.log(data);
})

// console.log("res: ", res);
// res.then((data) => {
//     console.log(data);    
// })

//console.log();