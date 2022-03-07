const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let N = Number(input.shift());
let count = N;

for (let i = 0; i < N; i++) {
	let word = input[i].split('');
	let arr = [];
	
	for (let j = 0; j < word.length; j++) {
		if (word.indexOf(word[j], j+1) === -1 || word[j] === word[j+1]) {
			arr.push(word[j]);
		}
	}
	
	if (word.length !== arr.length) {
		count--;
	}
}

console.log(count);