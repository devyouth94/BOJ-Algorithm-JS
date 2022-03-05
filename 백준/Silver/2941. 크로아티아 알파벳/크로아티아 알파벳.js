const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim();

let croAl = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="];

function solution(input) {
	for (let alphabet of croAl) {
		input = input.split(alphabet).join("Q");
	}
	
	return input.length;
}

console.log(solution(input));