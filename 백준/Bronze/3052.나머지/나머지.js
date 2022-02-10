const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let numbers = input.map(Number);

let arr = numbers.map(el => el%42);
let set = new Set(arr);
let arr2 = [...set];
let result = arr2.length;

console.log( result );