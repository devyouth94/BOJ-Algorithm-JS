const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let result = '';

for ( let i = 1; i <= input[0]; i++ ) {
	let numbers = input[i].split(" ");
	let sum = +(numbers[0]) + +(numbers[1])
	
	result += `Case #${i}: ${sum}` + '\n';
}

console.log( result );
