const arr = [1,2,3,1,2,3,4,5,6];
const uniqueElement = new Set(arr);

let filteredElement = arr.filter(e => {
    if(uniqueElement.has(e)) {
        uniqueElement.delete(e);
    } else {
        return e;
    }
})

console.log(filteredElement)