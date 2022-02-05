const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split("\n");

let NX = input[0].split(" ");
let A = input[1].split(" ");
let result = '';

for (let i = 0; i < NX[0]; i++ ) {
	
	let numberA = A[0 + i];
	
	if ( +numberA < NX[1] ) {
		result += +numberA + " ";
	}

}

console.log( result.trim() );
