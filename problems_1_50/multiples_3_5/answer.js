function findModValues(a, b, size) {
    var answers = [];
    for (var i = 0; i < size; ++i) {
        if (i % a === 0 || i % b === 0) {
            answers.push(i);
        }
    }
    return answers;
}
var a = 3;
var b = 5;
var size = 1000;
var values = findModValues(a, b, size);
var answer = values
    .reduce(function (a, b) { return a + b; }, 0);
console.log("Sum of multiples of " + a + " and " + b + " less than " + size + " is " + answer);
