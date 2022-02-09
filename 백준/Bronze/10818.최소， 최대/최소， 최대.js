const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let numbers = input[1].split(' ').map(Number);

let min = Math.min(...numbers);
let max = Math.max(...numbers);

console.log(`${min} ${max}`);