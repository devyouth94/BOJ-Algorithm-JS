function solution(n) {
    
    //소수 구하는 함수
    function isPrime(num) {
      if(!num || num === 1) return false;
      for (let i = 2; i <= Math.sqrt(num) ; i++) {
          if (num % i === 0) return false;
      }

      return true;
    }
    //

    let answer = 0;

    for(let j = 2; j <= n; j++) {
      if (isPrime(j) === true) {
        answer++;
      }
    }
    
    return answer;
}