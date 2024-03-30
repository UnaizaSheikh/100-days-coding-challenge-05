//to calculate average of all scores
//first add all numbers of scores
function averageScore() {
    var scores = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        scores[_i] = arguments[_i];
    }
    var total = scores.reduce(function (sum, score) { return sum + score; }, 0);
    //divide all number score to score length
    return total / scores.length;
}
console.log(averageScore(20, 40, 80, 100));
