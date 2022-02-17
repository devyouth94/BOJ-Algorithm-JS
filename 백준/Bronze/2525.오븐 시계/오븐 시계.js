const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let time = input[0].split(' ').map(Number);
let hour = time[0];
let minutes = time[1];
let timer = Number(input[1]);

if ( minutes + timer >= 60 ) {
	hour += Math.floor((minutes + timer) / 60);
	minutes = (minutes + timer) % 60;
} else {
	minutes += timer;
}

if ( hour === 24 ){
	hour = 0;
} else if ( hour > 24){
	hour = hour % 24;
}

if (  minutes % 60 === 0 ){
	minutes = 0
}

console.log(`${hour} ${minutes}`);
