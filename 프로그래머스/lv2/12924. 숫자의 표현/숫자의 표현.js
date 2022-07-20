function solution(n) {
    let answer = 1;
    let result = 0;

    for (let i=1; i <= n/2; i++) {
      for (let j=i; j <= n; j++) {
        result += j;
        if (result === n) {
          answer++;
          result = 0;
          break;
        } else if (result > n) {
          result = 0;
          break;
        }
      }
    }
    
    return answer;
}