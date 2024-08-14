let str = "()[]{}}";

function checkBrackets(str) {
    str = str.split("");
    let str2 = [];
    let key;

    for (let i = 0; i < str.length; i++) {

        if (str[i] === "(" || str[i] === "{" || str[i] === "[") {
            str2.push(str[i]);
            continue;
        }

        if (str2.length == 0) 
            return false;

        switch (str[i]) {
            case ")":
                key = str2.pop();
                if (key == "{" || key == "[") {
                    return false;
                }
                break;
            case "}":
                key = str2.pop();
                if (key == "(" || key == "[") {
                    return false;
                }
                break;

            case "]":
                key = str2.pop();
                if (key == "{" || key == "(") {
                    return false;
                }
                break;
        }
    }
    if (str2.length == 0) {
        return true;
    } else {
        return false
    }
}

let response = checkBrackets(str);
console.log("response: ", response);