function solution(numbers) {
    var answer = [];
    
    let supoja1 = '12345'.repeat(Math.ceil(numbers.length / 5)).split("");
    let supoja2 = '21232425'.repeat(Math.ceil(numbers.length / 8)).split("");
    let supoja3 = '3311224455'.repeat(Math.ceil(numbers.length / 10)).split("");

    let result = [0, 0, 0];

    for(let i = 0; i < numbers.length; i++){
      if (supoja1[i] == numbers[i]) {result[0]++};
      if (supoja2[i] == numbers[i]) {result[1]++};
      if (supoja3[i] == numbers[i]) {result[2]++};
    }

    if (result[0] >= result[1] && result[0] >= result[2]) {answer.push(1)};
    if (result[1] >= result[2] && result[1] >= result[0]) {answer.push(2)};
    if (result[2] >= result[0] && result[2] >= result[1]) {answer.push(3)};
    
    return answer;
}