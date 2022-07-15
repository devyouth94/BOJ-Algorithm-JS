function solution(sizes) {
    var answer = 0;
    
    let left = [];
    let right = [];

    for (let i = 0; i < sizes.length; i++) {

      let width = sizes[i][0];
      let height = sizes[i][1];

      if ( width >= height ){
        left.push(width);
        right.push(height);
      } else {
        left.push(height);
        right.push(width);
      }

    }

    left.sort( (a, b) => b - a );
    right.sort( (a, b) => b - a );

    answer = (left.shift() * right.shift());
    
    return answer;
}