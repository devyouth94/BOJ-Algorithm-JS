const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let N = Number(input[0]);

let sum = input[1].toString().split('').map(Number).reduce((sum, cur) => sum + cur, 0);

console.log(sum);