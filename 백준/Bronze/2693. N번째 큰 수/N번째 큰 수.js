const fs = require("fs");
const input = fs.readFileSync("dev/stdin").toString().split("\n");

for (let i = 1; i <= input[0]; i++) {
  let nums = input[i]
    .split(" ")
    .map(Number)
    .sort((a, b) => a - b)
    .splice(-3, 1)
    .join();

  console.log(nums);
}