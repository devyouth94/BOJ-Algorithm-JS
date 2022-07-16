function solution(nums) {
    let answer = [];

    function isPrime(num) {
      for(let i = 2; num > i; i++) {
      if(num % i === 0) {
        return false;
       }
      }
     return true;
    }

    for (let i = 0; i < nums.length; i++) {

      for (let j = i+1; j < nums.length; j++) {

        for (let k = j+1; k < nums.length; k++) {

          if ( isPrime(nums[i] + nums[j] + nums[k]) == true) {
            answer.push(nums[i] + nums[j] + nums[k]);
          }

        }

      }

    }
    
    
    
    return answer.length;
}