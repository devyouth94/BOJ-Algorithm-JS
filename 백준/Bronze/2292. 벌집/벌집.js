const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString();

let count = 1;
let number = 1;

while (number < input) {
	number = number + count * 6;
	
	count++;
}

console.log(count);