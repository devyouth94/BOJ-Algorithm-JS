const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim();

let stars = '';
let result = '';

for ( let i = 1; i <= input; i++ ) {
	stars += "*";
	result += stars + "\n";
}

console.log(result.trim());