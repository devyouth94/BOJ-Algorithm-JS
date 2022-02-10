# [Bronze II] 숫자의 개수 - 2577 

[문제 링크](https://www.acmicpc.net/problem/2577) 

### 성능 요약

메모리: 9628 KB, 시간: 116 ms

### 분류

사칙연산(arithmetic), 구현(implementation), 수학(math)

### 문제 설명

<p>세 개의 자연수 A, B, C가 주어질 때 A × B × C를 계산한 결과에 0부터 9까지 각각의 숫자가 몇 번씩 쓰였는지를 구하는 프로그램을 작성하시오.</p>

<p>예를 들어 A = 150, B = 266, C = 427 이라면 A × B × C = 150 × 266 × 427 = 17037300 이 되고, 계산한 결과 17037300 에는 0이 3번, 1이 1번, 3이 2번, 7이 2번 쓰였다.</p>

### 입력 

 <p>첫째 줄에 A, 둘째 줄에 B, 셋째 줄에 C가 주어진다. A, B, C는 모두 100보다 크거나 같고, 1,000보다 작은 자연수이다.</p>

### 출력 

 <p>첫째 줄에는 A × B × C의 결과에 0 이 몇 번 쓰였는지 출력한다. 마찬가지로 둘째 줄부터 열 번째 줄까지 A × B × C의 결과에 1부터 9까지의 숫자가 각각 몇 번 쓰였는지 차례로 한 줄에 하나씩 출력한다.</p>

---

### Memo

```javascript
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().split('\n');

let origin = String(input[0] * input[1] * input[2]); // 세 자연수를 곱한 값
let numbers = origin.split('').map(Number); // 곱해서 나온 값을 자릿수로 나눠서 배열하고 숫자형으로 변환
let count;

for ( let i = 0; i < 10; i++ ) { // 0부터 9까지 몇번 쓰였는지 확인해야하므로 10번 사이클을 돌린다
	
	function numbercount (value) { // i의 값과 배열의 값이 일치하면 반환하는 함수
		return value == i;
	}
	
	count = numbers.filter(numbercount); // 함수를 통해 일치한 값들로만 새로운 배열을 만든다.
	console.log( count.length ); // 새로운 배열의 길이를 출력한다.
}
```

- `function`과 `return`은 이론을 다시 한번 봐야겠다. 풀고 나서 다시보니 계산이 어떤식으로 이루어지는지 약간 헷갈린다.
