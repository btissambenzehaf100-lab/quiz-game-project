let quiz1 = prompt("what is the capital of france?", "")
if (quiz1 === "paris") {
    console.log("correct");
}
else { console.log("wrong"); }

let quiz2 = prompt("How many planets are in the solar system?", "")
if (quiz2 === 8) {
    console.log("correct");
}
else {
    console.log("wrong");
}

let quiz3 = prompt("Which number is greater than 10 and less than 20?", "")
if (quiz3 > 10 && quiz3 < 20) {
    console.log("correct");
}
else {
    console.log("wrong");
}

let quiz4 = prompt("Which of these animals can fly: eagle, lion, parrot?", "")
if (quiz4 === "eagle" || quiz4 === "parrot") {
    console.log("correct");
}
else {
    console.log("wrong");
}

let quiz5 = prompt("Which of these numbers is NOT even : 12, 7, 8?", "")
if (!(quiz5 % 2 == 0)) {
    console.log("correct");
}
else {
    console.log("wrong")
}
