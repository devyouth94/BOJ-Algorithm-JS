function solution(N, stages) {
    let arr = [];

    for(let i = 1; i <= N; i++) {
      let failPeople = stages.filter(item => item == i).length;
      let totalPeople = stages.length - stages.filter(item => item < i).length;

      arr.push([failPeople / totalPeople, i]);
    }

    arr.sort((a, b) => {
      if (a[0] === b[0]) {
        return a[1] - b[1]
      } else {
        return b[0] - a[0]
      }
    });
    
    return arr.map(item=>item[1]);
}