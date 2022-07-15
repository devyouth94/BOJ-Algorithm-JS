function solution(x) {
    var answer = true;
    
    let sum = String(x).split("").map(Number).reduce((sum, current) =>sum + current, 0);

    answer = (x % sum == 0) ? true : false;
    
    return answer;
}