let userScore = 0;
let compScore = 0;
let compScorePara = document.querySelector("#comp-score");
let userScorePara = document.querySelector("#user-score");
const msg = document.querySelector("#msg");

const choices = document.querySelectorAll(".choice");

const genCompChoice = () => {
    const options = ["rock" , "paper" , "scissors"];
    const randIndx = Math.floor(Math.random() *3);
    return options[randIndx];
}

const showWinner = (userWin, choiceId, compChoice) => {
    if(userWin) {
        userScore++;
        userScorePara.innerText = userScore;
        msg.innerText = `You won your ${choiceId} beats ${compChoice}`;
        msg.style.backgroundColor = "green";
    }else {
        compScore++;
        compScorePara.innerText = compScore;
        msg.innerText = `You lost. ${compChoice} beats your ${choiceId}`;
        msg.style.backgroundColor = "red";
    }
}

const gameDraw = () => {
    console.log("game was drawn!");
    msg.innerText = "game was drawn! pls try again.";
    msg.style.backgroundColor = "#081b31";
}

const playGame = (choiceId) => {
    console.log("your choice is =",choiceId);
    const compChoice = genCompChoice();
    console.log("computers choice is =",compChoice);
    if(choiceId === compChoice) {
        gameDraw();
    }else {
        let userWin = true;
        if(choiceId == "rock") {
            userWin = compChoice == "paper" ? false : true;
        }else if(choiceId == "paper") {
            userWin = compChoice == "scissors"? false : true;
        }else {
            userWin = compChoice == "rock"? false : true;
        }
        showWinner(userWin, choiceId, compChoice);
    }
}

choices.forEach((choice) => {
    const choiceId = choice.getAttribute("id");
    choice.addEventListener("click", () => {
        console.log(choiceId);
        playGame(choiceId);
    })
})