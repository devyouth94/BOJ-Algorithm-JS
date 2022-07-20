function solution(numbers, hand) {
    //거리 구하는 함수
    function distance (now, target) {
      const keyPad = {
        1: [0, 0], 2: [0, 1], 3: [0, 2],
        4: [1, 0], 5: [1, 1], 6: [1, 2],
        7: [2, 0], 8: [2, 1], 9: [2, 2],
        "*": [3, 0], 0: [3, 1], "#": [3, 2],
      };

      let nowPosition = keyPad[now];
      let targetPosition = keyPad[target];

      return Math.abs(nowPosition[0] - targetPosition[0]) + Math.abs(nowPosition[1] - targetPosition[1])
    }

    //시작점 할당 및 정답 변수 생성
    let left = "*";
    let right = "#";
    let answer = "";

    //for문
    for(let i=0; i<numbers.length;i++) {
      if(numbers[i] % 3 === 1) {
        left = numbers[i];
        answer += "L";
      } 
      else if(numbers[i] % 3 === 0 && numbers[i] !== 0) {
        right = numbers[i];
        answer += "R";
      }
      else {
        let leftDistance = distance(left, numbers[i]);
        let rightDistance = distance(right, numbers[i]);

        if(leftDistance == rightDistance) {
          if(hand === "right") {
            right = numbers[i];
            answer += "R";
          } else {
            left = numbers[i];
            answer += "L";
          }
        } else if (leftDistance < rightDistance) {
          left = numbers[i];
          answer += "L";
        } else {
          right = numbers[i];
          answer += "R";
        }
      }
    }
    
    return answer;
}