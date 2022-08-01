const fs = require("fs");
const input = Number(fs.readFileSync("dev/stdin").toString());

let arr = [0, 1];

if (input === 0 || input === 1) {
  console.log(input);
} else {
  for (let i = 0; i <= input - 2; i++) {
    let sum = arr[i] + arr[i + 1];
    arr.push(sum);
  }
  console.log(arr[arr.length - 1]);
}