const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let caseNum = Number(input[0]);

for ( let i = 1; i <= caseNum; i++ ) {
	let score = 0;
	let sum = 0;
	
	for ( let j = 0; j < input[i].length; j++ ) {
		if ( input[i][j] === 'O' ) {
			score++;
		} else {
			score = 0;
		}
		sum += score;
	}
	
	console.log( sum );
}