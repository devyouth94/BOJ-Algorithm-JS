function solution(n, arr1, arr2) {
    // 각 배열의 항목을 2진법으로 변환
    let binaryArr1 = arr1.map(i => i.toString(2));
    let binaryArr2 = arr2.map(i => i.toString(2));
    // [ '1001', '10100', '11100', '10010', '1011' ] [ '11110', '1', '10101', '10001', '11100' ]

    // 결과값을 넣을 빈배열 생성
    let answer = [];

    // 한변의 크기 n 만큼 for문을 돌린다.
    for(let i = 0; i < n; i++) {
      if(binaryArr1[i].length < n) {
        binaryArr1[i] = binaryArr1[i].padStart(n, "0");
      }

      if(binaryArr2[i].length < n) {
        binaryArr2[i] = binaryArr2[i].padStart(n, "0");
      }
      // [ '01001', '10100', '11100', '10010', '01011' ] [ '11110', '00001', '10101', '10001', '11100' ]

      let result = "";

      for(let j = 0; j < n; j++) {
        if(binaryArr1[i][j] == 1 || binaryArr2[i][j] == 1) {
          result += "#";
        } else {
          result += " ";
        }
      }

      answer.push(result);
    }
    
    return answer;
}