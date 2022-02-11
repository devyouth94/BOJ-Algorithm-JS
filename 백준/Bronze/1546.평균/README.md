# [Bronze I] 평균 - 1546 

[문제 링크](https://www.acmicpc.net/problem/1546) 

### 성능 요약

메모리: 9652 KB, 시간: 124 ms

### 분류

사칙연산(arithmetic), 수학(math)

### 문제 설명

<p>세준이는 기말고사를 망쳤다. 세준이는 점수를 조작해서 집에 가져가기로 했다. 일단 세준이는 자기 점수 중에 최댓값을 골랐다. 이 값을 M이라고 한다. 그리고 나서 모든 점수를 점수/M*100으로 고쳤다.</p>

<p>예를 들어, 세준이의 최고점이 70이고, 수학점수가 50이었으면 수학점수는 50/70*100이 되어 71.43점이 된다.</p>

<p>세준이의 성적을 위의 방법대로 새로 계산했을 때, 새로운 평균을 구하는 프로그램을 작성하시오.</p>

### 입력 

 <p>첫째 줄에 시험 본 과목의 개수 N이 주어진다. 이 값은 1000보다 작거나 같다. 둘째 줄에 세준이의 현재 성적이 주어진다. 이 값은 100보다 작거나 같은 음이 아닌 정수이고, 적어도 하나의 값은 0보다 크다.</p>

### 출력 

 <p>첫째 줄에 새로운 평균을 출력한다. 실제 정답과 출력값의 절대오차 또는 상대오차가 10<sup>-2</sup> 이하이면 정답이다.</p>

---

##Memo

```javascript
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let N = Number(input[0]); // 과목의 갯수 N개
let score = input[1].split(' ').map(Number); //점수를 공백을 기준으로 나누고 요소들을 숫자형으로 변환

let newScore = score.map(el => el/Math.max(...score)*100); //map()메서드와 화살표 함수를 이용해 모든 요소들을 최댓값으로 나누고 100을 곱한 요소들로 변경

let result = '';

for ( let i = 0; i < N; i++ ) { // 모든 요소들을 더한 값을 result에 반환한다. reduce() 메서드를 사용해도 될것같다.
	result = +result + +newScore[i]
}

console.log(result/N); //새로운 점수의 합을 과목의 갯수 N으로 나눠서 평균을 
```
