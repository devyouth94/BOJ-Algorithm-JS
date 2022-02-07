const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split("\n");

let i = 0;

while (true) {
	number=input[i].split(" ");
	
	if ( +number[0] + +number[1] == 0)
		break;
	
	console.log( +number[0] + +number[1] );
	i++;
	
}