function solution(numbers) {
    let arr = [];

    for (let i = 0; i < numbers.length; i++) {

      for (let j = 0; j < numbers.length; j++) {

        if ( numbers[i + j + 1] == numbers[numbers.length] ) continue;

        let result = numbers[i] + numbers[i + j + 1];
        arr.push(result);

      };

    };

    let answer = Array.from(new Set(arr)).sort((a, b) => a - b);
    
    return answer;
}