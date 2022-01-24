const fs = require('fs');
const input = fs.readFileSync(0, "utf8").toString().split(' ');

let hour = parseInt(input[0]);
let minute = parseInt(input[1]);

minute -= 45;

if ( minute < 0 ) {
    if ( hour == 0 ) {
        hour = 23;
    } else {
        hour -= 1;
    };
    
    minute += 60;
}

console.log ( hour + " " + minute );