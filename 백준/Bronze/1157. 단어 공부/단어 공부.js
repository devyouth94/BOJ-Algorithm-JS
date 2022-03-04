const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().toLowerCase().split("");

let word = [...new Set(input)].sort();
let numbers = [];

for (let i = 0; i < word.length; i++) {
	let number = input.filter(el => el == word[i]).length;
	numbers.push(number);
}

if (numbers.filter(el => el == Math.max(...numbers)).length >= 2) {
	console.log("?");
} else {
	console.log(word[numbers.indexOf(Math.max(...numbers))].toUpperCase());
}