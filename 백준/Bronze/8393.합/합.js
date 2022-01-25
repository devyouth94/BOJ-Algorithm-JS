const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split();

let numbers = 0;

for ( let i = 1; i <= input[0]; i++) {
	numbers += i;
}

console.log(numbers);