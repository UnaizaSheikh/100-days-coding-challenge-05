//to calculate average of all scores
//first add all numbers of scores
function averageScore(...scores:number[]):number{
    let total = scores.reduce((sum,score) =>sum + score, 0);
    //divide all number score to score length
    return total / scores.length;
}
console.log(averageScore(20, 40, 80, 100));