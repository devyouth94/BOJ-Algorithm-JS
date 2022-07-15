function solution(arr, divisor) {
    var answer = [];
    
    let newArr = arr.filter(item => item%divisor == 0).sort( (a, b) => a - b );

    answer = (newArr.length == 0) ? [-1] : newArr;
    
    return answer;
}