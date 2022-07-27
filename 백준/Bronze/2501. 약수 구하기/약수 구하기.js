const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split(" ").map(Number);

const N = input[0];
const K = input[1];

let arr = [];

for(let i=1; i<=N; i++) {
  if(N % i === 0) {
    arr.push(i);
  }
}

console.log((arr.length < K) ? 0 : arr[K-1]);