function d(n) {
	let result = n + String(n).split('').map(Number).reduce((sum, cur) => sum + cur,0);
	
	return result;
}

const range = 10000;
let selfNumbers = new Array(range).fill(true);

for ( let i = 0; i <= range; i++ ) {
	selfNumbers[d(i)] = false;
}

for ( let i = 0; i <= range; i++) {
	if(selfNumbers[i]) {
		console.log(i);
	}
}