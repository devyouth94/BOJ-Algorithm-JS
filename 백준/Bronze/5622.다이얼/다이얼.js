const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split("");

let alphabet = ["ABC", "DEF", "GHI", "JKL", "MNO", "PQRS", "TUV", "WXYZ"];
let time = [3, 4, 5, 6, 7, 8, 9, 10];

let result;
let arr = [];

for (let i = 0; i < input.length; i++) {
	
	for (let j = 0; j < alphabet.length; j++){
		let find = alphabet[j].split("").indexOf(input[i]);
		
		if (find !== -1) {result = time[j]};
	}
	
	arr.push(result);
}

console.log(arr.reduce((sum, cur) => sum + cur, 0));