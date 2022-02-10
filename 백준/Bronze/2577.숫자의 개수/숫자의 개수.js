const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let origin = String(input[0] * input[1] * input[2]);
let numbers = origin.split('').map(Number);
let count;

for ( let i = 0; i < 10; i++ ) {
	
	function numbercount (value) {
		return value == i;
	}
	
	count = numbers.filter(numbercount);
	console.log( count.length );
}