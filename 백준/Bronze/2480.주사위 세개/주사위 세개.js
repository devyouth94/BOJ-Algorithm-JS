const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(' ').map(Number);

let [a, b, c] = [input[0], input[1], input[2]];

if ( a == b && b == c && a == c ){
	console.log(10000 + a * 1000);
}

if ( a != b || a != c || b != c) {
	if ( a == b || a == c) {
		console.log(1000 + a * 100);
	} else if ( b == c) {
		console.log(1000 + b * 100);
	}
}

if ( a != b && b != c && a != c) {
	if ( a > b && a > c ) {
		console.log( a * 100 );
	} else if ( b > a && b > c ) {
		console.log( b * 100 );
	} else if ( c > a && c > b ) {
		console.log( c * 100 );
	}	
}