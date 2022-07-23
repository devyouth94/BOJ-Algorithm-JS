function solution(absolutes, signs) {
    let arr = signs.map(v => (v) ? 1 : -1);
    let answer = 0;

    for(let i=0; i<absolutes.length; i++) {
      answer += absolutes[i] * arr[i];
    }
    return answer;
}