const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');

const A = parseInt(input);

if (A % 4 == 0 && A % 100 != 0) {
    console.log(1)
} else if (A % 4 == 0 && A % 400 == 0) {
    console.log(1)
} else {
    console.log(0)
};
