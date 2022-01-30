const fs = require('fs');
const input = Number(fs.readFileSync('dev/stdin').toString().split());

let result = '' ;

for ( let i = input; i >= 1; i-- ) {
	result += i + "\n";
}

console.log( result );