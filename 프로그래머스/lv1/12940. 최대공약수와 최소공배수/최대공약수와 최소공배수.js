function solution(n, m) {
    // 최대공약수 greatest common divisor
    // 최소공배수 largest common multiple

    // 최대공약수 구하기
    let nGcd = [];
    let mGcd = [];

    for (let i = 1; i <= n; i++) {
      if (n % i == 0) {nGcd.push(i)};
    }

    for (let i = 1; i <= m; i++) {
      if (m % i == 0) {mGcd.push(i)};
    }

    let gcd = nGcd.filter(i => mGcd.includes(i)).slice(-1).join(); 

    // 최소공배수 구하기
    let nLCM = [];
    let mLCM = [];

    let i = 1;

    while (true) {
      nLCM.push(n*i);
      mLCM.push(m*i);
      if (n*i >= n*m && m*i >= n*m) break;
      i++;
    }

    let lcm = nLCM.filter(i => mLCM.includes(i))[0];
    
    return [+gcd, lcm];
}