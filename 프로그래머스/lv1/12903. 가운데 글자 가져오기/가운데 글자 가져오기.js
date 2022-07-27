function solution(s) {
    let arr = s.split("");
    
    if(arr.length % 2 === 0) {
        return arr.splice(Math.floor(arr.length/2)-1, 2).join("");
    } else {
        return arr.splice(arr.length/2, 1).join();
    }
}