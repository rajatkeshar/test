function bracketBalances(str) {
    let arr = str.split('');
    let stack = [];
    let last = null;

    let obj = {'[': ']', '(': ')', '{': '}'};

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === '[' || arr[i] === '{' || arr[i] === '(') {
            stack.push(arr[i]);
        } else if(arr[i] === ']' || arr[i] === '}' || arr[i] === ')') {
            last = stack.pop();
            if(arr[i] != obj[last]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}

let response = bracketBalances("");
console.log("res: ", response);