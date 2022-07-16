function solution(s) {
    
    let words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];

    for (let i = 0; i < words.length; i++) {
      if (s.indexOf(words[i]) !== -1) {
        s = s.split(words[i]).join(words.indexOf(words[i]));
      }
    }
    
    return Number(s);
    
}