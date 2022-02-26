const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split(" ");

let result = "";

for (let i = 0; i <= 1; i++) {
	let num = input[i].split("").reverse();
	let newNum = num[0] + num[1] + num[2];
	result += newNum + " ";
}


let arr = result.trim().split(" ").map(Number);

console.log(arr[0] > arr[1] ? arr[0] : arr[1]);
