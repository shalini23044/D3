function getStringLength(str) {
    let length = 0;
    for (let i = 0; str[i] !== undefined; i++) {
        length++;
    }
    return length;
}

// Example usage
const exampleString = "Hello, World!";
const lengthOfString = getStringLength(exampleString);
console.log("baby shalini s", lengthOfString);