const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let numbers = input.map(Number);

let max = Math.max(...numbers);
let num = numbers.indexOf(max) + 1;


console.log( max );
console.log( num );