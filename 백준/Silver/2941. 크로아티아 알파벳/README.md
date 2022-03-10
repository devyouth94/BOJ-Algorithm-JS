# [Silver V] 크로아티아 알파벳 - 2941 

[문제 링크](https://www.acmicpc.net/problem/2941) 

### 성능 요약

메모리: 9348 KB, 시간: 128 ms

### 분류

구현(implementation), 문자열(string)

### Memo
```javascript
const fs = require('fs');
let input = fs.readFileSync('dev/stdin').toString().trim();

let croAl = ["c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z="]; //크로아티아 알파벳으로 배열을 생성한다.

function solution(input) {
	for (let alphabet of croAl) { //for..of를 사용해 croAl을 순회하는 alphatbet 변수를 선언한다.
		input = input.split(alphabet).join("Q");  
	} //alphabet변수를 기준으로 split하고, (크로아티아 알파벳이 없다면 넘어간다.) split한 자리에 임의의 알파벳 Q를 넣고 join시킨다.
	
	return input.length; // 크로아티아 알파벳을 하나의 알파벳으로 바꾼후 input의 length를 return한다.
}

console.log(solution(input));
```
