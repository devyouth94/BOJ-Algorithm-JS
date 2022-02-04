const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString();

let num = Number(input);

for ( let i = 0; i < input; i++) {
	
	let result = '';
	
	for ( let j = num - 1; j >= 0; j-- ) {
		result += ( j <= i ? "*" : " " );
	}
	
	console.log ( result );
}