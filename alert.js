let playerName = prompt("what is your name?", "")
function welcome(playerName = "guest") {
    if (playerName ==="" || playerName===null){
        alert("welcome guest to the quiz")
    }
    else {
        alert("Welcome " + playerName + " to the Quiz Game")
    }
}
welcome(playerName)

function showInstructions() {
    alert("Answer all the questions to get your final score")
}
showInstructions()

let answers =[];

function quiz(question, correctAnswer) {
    let answer = prompt(question, "")
    answers.push(answer);
    if (answer === correctAnswer) {
        console.log("correct")
        return true;
    }

    else {
        console.log("wrong")
        return false;
    }
}



quiz("what is the capital of france?", "paris")

quiz("How many planets are in the solar system?","8")

function quizAnd(){
    let quiz1 = prompt("Which number is greater than 10 and less than 20?","")
    answers.push(quiz1)
if ( quiz1 > 10 && quiz1 < 20 ){
console.log("correct")
}
else{
    console.log("wrong")
}
}

quizAnd()

function quizOr(){
    let quiz2= prompt("Which of these animals can fly: eagle, lion, parrot?","")
    answers.push(quiz2)
if (quiz2 === "eagle" || quiz2 === "parrot"){
    console.log("correct")
}
else{
    console.log("wrong")
}
}
quizOr()

function quizNot(){
    let quiz3= prompt("Which of these numbers is NOT even : 12, 7, 8","")
    answers.push(quiz3)
if(!(quiz3 % 2 == 0)){
console.log("correct")
}
else{
    console.log("wrong")
}
}
quizNot()

console.log(answers)