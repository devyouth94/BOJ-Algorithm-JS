# [Silver V] 그룹 단어 체커 - 1316 

[문제 링크](https://www.acmicpc.net/problem/1316) 

### 성능 요약

메모리: 9404 KB, 시간: 128 ms

### 분류

구현(implementation), 문자열(string)

### Memo
```javascript
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n');

let N = Number(input.shift()); //단어의 개수N을 숫자형으로 변환 후 shift로 꺼낸다.
let count = N;

for (let i = 0; i < N; i++) { //단어의 개수만큼 for문을 반복한다.
	let word = input[i].split(''); //단어를 스펠링 단위로 나누고 배열을 생성한다.
	let arr = [];
	
	for (let j = 0; j < word.length; j++) { //스펠링 수만큼 for문을 반복한다.
		if (word.indexOf(word[j], j+1) === -1 || word[j] === word[j+1]) {
			arr.push(word[j]); 
		} // indexOf를 통해 떨어져서 나타나는 알파벳이 없거나, 다음 알파벳이 동일할 경우에 새로운 배열 arr에 push한다.
	}
	
	if (word.length !== arr.length) {  
		count--;
	} //위의 코드로 arr.length가 다르다면 그룹 단어가 아님이 도출되기 때문에 두 값의 길이가 다르다면 count 하나를 지운다.
}

console.log(count); //그룹 단어가 아닌 단어들을 제거하고 남은 count값을 출력한다.
```
