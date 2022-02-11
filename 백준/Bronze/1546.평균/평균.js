const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let N = Number(input[0]);
let score = input[1].split(' ').map(Number);

let newScore = score.map(el => el/Math.max(...score)*100);

let result = '';

for ( let i = 0; i < N; i++ ) {
	result = +result + +newScore[i]
}

console.log(result/N);