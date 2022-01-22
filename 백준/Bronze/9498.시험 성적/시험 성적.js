const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim();

const A = parseInt(input) ;
      
if (A >= 90) {
    console.log('A');
} else if (A >= 80 && A <= 89) {
    console.log('B');
} else if (A >= 70 && A <= 79) {
    console.log('C');
} else if (A >= 60 && A <= 69) {
    console.log('D');
} else {
    console.log('F');
};