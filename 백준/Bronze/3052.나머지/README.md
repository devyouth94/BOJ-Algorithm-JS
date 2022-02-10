# [Bronze II] 나머지 - 3052 

[문제 링크](https://www.acmicpc.net/problem/3052) 

### 성능 요약

메모리: 9340 KB, 시간: 124 ms

### 분류

사칙연산(arithmetic), 수학(math)

### 문제 설명

<p>두 자연수 A와 B가 있을 때, A%B는 A를 B로 나눈 나머지 이다. 예를 들어, 7, 14, 27, 38을 3으로 나눈 나머지는 1, 2, 0, 2이다. </p>

<p>수 10개를 입력받은 뒤, 이를 42로 나눈 나머지를 구한다. 그 다음 서로 다른 값이 몇 개 있는지 출력하는 프로그램을 작성하시오.</p>

### 입력 

 <p>첫째 줄부터 열번째 줄 까지 숫자가 한 줄에 하나씩 주어진다. 이 숫자는 1,000보다 작거나 같고, 음이 아닌 정수이다.</p>

### 출력 

 <p>첫째 줄에, 42로 나누었을 때, 서로 다른 나머지가 몇 개 있는지 출력한다.</p>

---

### Memo
배열은 새로운 메서드들이 쏟아져 나오다보니 직접 고민해보고 쳐보는 시간이 많아야겠다는걸 느꼈다.

```javascript
const fs = require('fs');
const input = fs.readFileSync('dev/stdin').toString().trim().split('\n'); //처음에 trim()을 안했더니 오류가 났다. 백준에서 풀때 함정같은 것....

let numbers = input.map(Number); //input 값들을 숫자형으로 변환

let arr = numbers.map(el => el%42); //map을 이용해 배열 내 요소들을 42으로 나눈 나머지값으로 새롭게 반환
let set = new Set(arr); // Set 메서드를 이용해 중복되는 값들은 없앤다.
let arr2 = [...set]; // Set 메서드는 값이 Set {a, b, c...}형식으로 나오기 때문에 값들을 복사해 새로운 변수에 넣는다.
let result = arr2.length; // arr2배열의 길이값을 출력하면 서로 다른 값이 몇개인지 알수 있다.

console.log( result );
```
