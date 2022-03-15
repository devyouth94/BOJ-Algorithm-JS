const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(Number);

let A = input[0],
	B = input[1],
	V = input[2];

console.log(Math.ceil((V-B)/(A-B)));