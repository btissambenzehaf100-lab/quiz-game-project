let playerName = prompt("what is your name?", "")
function welcome(playerName) {
    alert("Welcome " + playerName + " to the Quiz Game")
}
welcome(playerName)

function showInstructions() {
    alert("Answer all the questions to get your final score")
}
showInstructions()


function quiz(question, correctAnswer) {
    let answer = prompt(question, "")
    if (answer === correctAnswer) {
        console.log("correct")
    }

    else {
        console.log("wrong")
    }
}


quiz("what is the capital of france?", "paris")

quiz("How many planets are in the solar system?","8")

quiz("Which number is greater than 10 and less than 20?", answer > 10 && answer < 20)

quiz("Which of these animals can fly: eagle, lion, parrot?", answer === "eagle" || answer === "parrot")

quiz("Which of these numbers is NOT even : 12, 7, 8?",!(answer % 2 == 0))
