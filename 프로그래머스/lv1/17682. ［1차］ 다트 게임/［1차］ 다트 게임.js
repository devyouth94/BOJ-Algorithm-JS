function solution(dartResult) {
    let round = dartResult.match(/(\d+)([SDT])([*|#]?)/gi);

    let arr = [];

    for(let i=0; i < round.length; i++) {
      let sdt = 0;
      let prize = 1;

      if(round[i].includes("S")) {sdt = 1;}
      if(round[i].includes("D")) {sdt = 2;}
      if(round[i].includes("T")) {sdt = 3;}

      if(round[i].includes("*")) {
        prize = 2;
        if(round[i] !== round[0]) {
          arr[i-1] *= 2;
        }
      } else if (round[i].includes("#")) {
        prize = -1;
      }

      arr.push((round[i][1] == "0" ? 10 : round[i][0]) ** sdt * prize);
    }
    
    return arr.reduce((s, c)=> s + c, 0);
}