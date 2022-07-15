function solution(a, b) {
    var answer = '';
    
    let count = -1;

const monthArray = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const weeksArray = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];


for(let i = 0; i < a-1; i++) {
  count += monthArray[i];
};

count += Number(b);

let day = count % 7;
answer = weeksArray[day];
    
    return answer;
}