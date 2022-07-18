function solution(d, budget) {
    let dSum = d.reduce((s, c) => s + c, 0);

    let dLength = d.length;

    for(let i = 0; i < dLength; i++) {
      if (dSum <= budget) break;

      if (dSum > budget) {
        dSum -= d.splice(d.indexOf(Math.max(...d)), 1);
      }
    }
    
    return d.length;
}