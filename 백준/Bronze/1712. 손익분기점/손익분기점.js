const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(' ').map(Number);

let A = input[0],
	B = input[1],
	C = input[2];


let x = Math.floor(A / (C - B)) + 1;



console.log(B >= C ? -1 : x);