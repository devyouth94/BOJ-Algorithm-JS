function solution(arr) {
    
    var answer = [];

    for(let i = 0; i < arr.length; i++) {

        if ( arr.indexOf(arr[i], i+1) === -1 || arr[i] !== arr[i+1] ) {
            answer.push(arr[i]);
        }

    }
    
    return answer;
}