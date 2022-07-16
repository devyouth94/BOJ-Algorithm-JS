function solution(n) {
    
    let text = "수박";

    let answer = text.repeat(Math.ceil(n/2)).slice(0, n);
    
    return answer;
}