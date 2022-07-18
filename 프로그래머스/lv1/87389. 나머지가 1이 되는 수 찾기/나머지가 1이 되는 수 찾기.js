function solution(n) {
    let answer = [];

    for (let i = 2; i <= n; i++) {
      if ((n-1) % i == 0) {
        answer.push(i);
      }
    }
    
    return answer[0];
}