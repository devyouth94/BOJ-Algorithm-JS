function solution(arr) {
    var answer = [];
    
    let min = Math.min(...arr);

    arr.splice(arr.indexOf(min), 1);

    answer = (arr.length !== 0) ? arr : [-1];
    
    return answer;
}