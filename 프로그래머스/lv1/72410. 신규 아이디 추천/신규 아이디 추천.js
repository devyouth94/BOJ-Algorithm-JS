function solution(new_id) {
    
    let step1 = new_id.toLowerCase();

    let step2 = step1.replace(/[^a-z0-9\-_\.]/g, "");

    let step3 = step2.replace(/\.{2,}/g, "\.");

    let step4 = step3.replace(/^\.|\.$/gm, "");

    let step5 = "";

    if (step4 === "") {
      step5 = step4 + "a";
    } else {
      step5 = step4;
    }

    let step6 = step5.slice(0, 15);

    if (step6.length < 2) {
      step6 = step6[0].repeat(3);
    } else if (step6.length < 3) {
      step6 = step6[0] + step6[1].repeat(2);
    }

    let step7 = step6.replace(/^\.|\.$/gm, "");
    
    return step7;
}