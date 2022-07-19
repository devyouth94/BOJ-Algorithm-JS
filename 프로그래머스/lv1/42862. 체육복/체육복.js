function solution(n, lost, reserve) {
    
    let count = 0;

    // 여분을 가져왔고, 도난 당하지 않은 학생
    let realReserve = reserve.filter(i => lost.includes(i) == false);

    // 여분이 없고, 도난 당한 학생
    let realLost = lost.filter(i => reserve.includes(i) == false);

    // 체육복을 빌려입은 학생
    for (let i = 0;i < realReserve.length; i++){
      if (realLost.includes(realReserve[i]+1) == true || realLost.includes(realReserve[i]-1) == true) {
        count++;
      }
      if (count == realLost.length) break;
    }

    // 체육복 빌려잆은 학생 + 여분도 없고, 도난도 당하지 않은 학생 + 여분 가지고 온 학생
    count += n - (lost.length + realReserve.length) + reserve.length;
    
    return count;
}