function solution(arr, divisor) {
    let newArr = arr.filter(item => item%divisor == 0).sort( (a, b) => a - b );
    
    return (newArr.length == 0) ? [-1] : newArr;
}