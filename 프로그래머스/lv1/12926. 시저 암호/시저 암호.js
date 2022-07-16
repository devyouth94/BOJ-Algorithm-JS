function solution(s, n) {
    let answer = "";

    let change = s.split("").map(item => item.charCodeAt());

    for(let i = 0; i < change.length; i++) {
      let num = change[i];

      if ( 65 <= num && num <= 90) {
        num += n;
        if ( num > 90) {
          num -= 26;
        }
      }

      if ( 97 <= num && num <= 122) {
        num += n;
        if ( num > 122) {
          num -= 26;
        }
      }


      answer += String.fromCharCode(num);
    }
    
    return answer;
}