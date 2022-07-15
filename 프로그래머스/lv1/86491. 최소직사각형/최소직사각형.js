function solution(sizes) {
    var answer = 0;
    
    let long = [];
    let short = [];

    for (let i = 0; i < sizes.length; i++) {

      let width = sizes[i][0];
      let height = sizes[i][1];

      if ( width >= height ){
        long.push(width);
        short.push(height);
      } else {
        long.push(height);
        short.push(width);
      }

    }

    long.sort( (a, b) => b - a );
    short.sort( (a, b) => b - a );

    answer = (long.shift() * short.shift());
    
    return answer;
}