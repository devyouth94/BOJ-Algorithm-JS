# [Bronze II] OX퀴즈 - 8958 

[문제 링크](https://www.acmicpc.net/problem/8958) 

### 성능 요약

메모리: 9580 KB, 시간: 140 ms

### 분류

구현(implementation), 문자열(string)

### 문제 설명

<p>"OOXXOXXOOO"와 같은 OX퀴즈의 결과가 있다. O는 문제를 맞은 것이고, X는 문제를 틀린 것이다. 문제를 맞은 경우 그 문제의 점수는 그 문제까지 연속된 O의 개수가 된다. 예를 들어, 10번 문제의 점수는 3이 된다.</p>

<p>"OOXXOXXOOO"의 점수는 1+2+0+0+1+0+0+1+2+3 = 10점이다.</p>

<p>OX퀴즈의 결과가 주어졌을 때, 점수를 구하는 프로그램을 작성하시오.</p>

### 입력 

 <p>첫째 줄에 테스트 케이스의 개수가 주어진다. 각 테스트 케이스는 한 줄로 이루어져 있고, 길이가 0보다 크고 80보다 작은 문자열이 주어진다. 문자열은 O와 X만으로 이루어져 있다.</p>

### 출력 

 <p>각 테스트 케이스마다 점수를 출력한다.</p>

### Memo

연속으로 맞췄을때 보너스 점수 넣는 방식을 생각해 내는게 너무 어려웠다. 숫자가 1씩 늘어나는 값을 써야할 때는 `++`증가 연산자 를 일단 떠올려야겠다.

```javascript
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let caseNum = Number(input[0]); // 테스트 케이스 갯수

for ( let i = 1; i <= caseNum; i++ ) { // 테스트 케이스 숫자 만큼 반복문 실행
	let score = 0;
	let sum = 0;
	
	for ( let j = 0; j < input[i].length; j++ ) { // 배열의 길이 만큼 반복문 실행
		if ( input[i][j] === 'O' ) { // 요소가 'O'면 점수를 1점 올리고, 아니면 0점 처리한다.
			score++;
		} else {
			score = 0;
		}
		sum += score;
	}
	
	console.log( sum );
}
```
