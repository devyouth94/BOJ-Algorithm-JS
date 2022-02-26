const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let T = Number(input[0]);


for (let i = 1; i <= T; i++) {
	let R = Number(input[i][0]);
	let S = input[i].slice(2);
	let P = "";
	
	for (let j = 0; j < S.length ;j++) {
		P += String(S[j]).repeat(R);
	}
	
	console.log(P);
}