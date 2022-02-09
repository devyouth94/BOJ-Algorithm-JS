const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let N = Number(input[0]);
let integer = input[1].split(' ').map(Number);

let min = integer[0];
let max = integer[0];

for ( let i = 0; i < N; i++ ) {
	if ( min > integer[i] ) {
		min = integer[i];
	}
	
	if ( max < integer[i] ) {
		max = integer[i];
	}
}

console.log(`${min} ${max}`);