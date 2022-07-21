function solution(s){
    let p = s.toLowerCase().split("").filter(i => i === "p").length;
    let y = s.toLowerCase().split("").filter(i => i === "y").length;
    
    return (p===y) ? true : false;
}