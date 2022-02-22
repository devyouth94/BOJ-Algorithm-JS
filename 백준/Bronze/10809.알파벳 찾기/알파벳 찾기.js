const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString();

let alphabet = "abcdefghijklmnopqrstuvwxyz";
let result = "";

for (let i = 0;i < alphabet.length; i++) {
	result += input.indexOf(alphabet[i]) + " ";
}

console.log(result.trim());