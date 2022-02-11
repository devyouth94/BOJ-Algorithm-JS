const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let C = Number(input[0]);

for ( let i = 1; i <= C; i++ ) {
	let N = (input[i].split(' ').map(Number))[0];
	let score = input[i].split(' ').slice(1).map(Number);
	
	let sum = [...score].reduce((sum, cur) => sum + cur, 0);
	let average = sum / N;
	let aboveAvr = [...score].filter(el => el > average);
	
	let result = ((aboveAvr.length) / N * 100).toFixed(3);
	
	console.log(`${result}%`);
}