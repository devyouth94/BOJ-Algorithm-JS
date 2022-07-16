function solution(lottos, win_nums) {
    let ranking = [6, 6, 5, 4, 3, 2, 1];

    let getRight = lottos.filter(x => win_nums.includes(x));

    let zero = lottos.filter(x => x == 0); 

    let answer = [ranking[getRight.length + zero.length], ranking[getRight.length]];
    
    return answer;
}