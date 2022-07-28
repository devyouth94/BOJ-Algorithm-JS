const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split("\n");

const T = input.splice(0, 1);

let binary = [];
let answer = [];

for (let i=0; i<input.length; i++) {
  binary = Number(input[i]).toString(2).split("").reverse();
  answer = binary.map((v, idx) => idx).filter((v, idx) => binary[idx] !== "0");

  console.log(answer.join(" "));
} 