# [Bronze I] 평균은 넘겠지 - 4344 

[문제 링크](https://www.acmicpc.net/problem/4344) 

### 성능 요약

메모리: 10748 KB, 시간: 132 ms

### 분류

사칙연산(arithmetic), 수학(math)

### 문제 설명

<p>대학생 새내기들의 90%는 자신이 반에서 평균은 넘는다고 생각한다. 당신은 그들에게 슬픈 진실을 알려줘야 한다.</p>

### 입력 

 <p>첫째 줄에는 테스트 케이스의 개수 C가 주어진다.</p>

<p>둘째 줄부터 각 테스트 케이스마다 학생의 수 N(1 ≤ N ≤ 1000, N은 정수)이 첫 수로 주어지고, 이어서 N명의 점수가 주어진다. 점수는 0보다 크거나 같고, 100보다 작거나 같은 정수이다.</p>

### 출력 

 <p>각 케이스마다 한 줄씩 평균을 넘는 학생들의 비율을 반올림하여 소수점 셋째 자리까지 출력한다.</p>

### Memo
- score변수에서 slice(1)위치를 잘못두는 바람에 계속 틀린 답이 나왔다. split(' ')앞에 둬서 N의 값이 잘못 입력된것 같다.

```javascript
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let C = Number(input[0]); // 테스트 케이스의 개수

for ( let i = 1; i <= C; i++ ) { // 테스트 케이스만큼 반복문 실행
	let N = (input[i].split(' ').map(Number))[0]; //입력되는 점수들을 공백 기준으로 나누고 인덱스0 값을 학생의 수 N으로 사용
	let score = input[i].split(' ').slice(1).map(Number); //입력값에서 학생 수를 나타내는 인덱스0 값을 slice로 제거하고 나머지 요소들 점수로 사용
	
	let sum = [...score].reduce((sum, cur) => sum + cur, 0); //reduce()를 사용해 모든 점수 합산
	let average = sum / N; // 합산한 점수를 학생의 수 N으로 나눠 평균값을 낸다
	let aboveAvr = [...score].filter(el => el > average); // filter()를 사용해 평균보다 점수가 높은 요소들만 다시 배열
	
	let result = ((aboveAvr.length) / N * 100).toFixed(3); 
 // 평균보다 높은 학생을 총 학생의 수 N으로 나누고 100을 곱해 백분율로 계산. 후에 toFixed를 사용해 소수점 셋째짜리까지 표기
	
	console.log(`${result}%`); // 백틱을 사용해 '%' 까지 출력
}
```
