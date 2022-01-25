const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split();

const number = parseInt(input[0]);

for (let y = 1 ; y < 10 ; y++) {
  console.log(number + " * " + y + " = " + ( number * y ));
}