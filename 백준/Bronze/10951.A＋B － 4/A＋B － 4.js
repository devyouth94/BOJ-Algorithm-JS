const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split("\n");

let i = 0;
let result = '';

while ( input[i] ) {
	number=input[i].split(" ");
	
	result += +number[0] + +number[1] + "\n";
	i++;
}

console.log( result.trim() );