function solution(array, commands) {
    let answer = [];

    for(let i = 0; i < commands.length; i++) {

      let nums = commands[i];

      answer.push(
        array.slice((nums[0])-1, nums[1])
        .sort((a,b)=>a-b)
        .splice((nums[2])-1, 1));

    }

    
    return answer.flat();
}