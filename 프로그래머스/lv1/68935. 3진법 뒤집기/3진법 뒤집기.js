function solution(n) {
    var answer = 0;
    
    num = n.toString(3).split("").reverse().join("");

    answer = Number.parseInt(num, 3);
    
    return answer;
}