const buttonOptionStone = document.getElementById("stone")
const buttonOptionPaper = document.getElementById("paper")
const buttonOptionScissors = document.getElementById("scissors")
const buttonClearGame = document.getElementById("clear")
//////////////////////////////////////////////////
const messageAfterDraw = document.getElementById("messageAfterDraw")
//////////////////////////////////////////////////
const UserScorePlace = document.getElementById("userScore")
const HouseScorePlace = document.getElementById("houseScore")
//////////////////////////////////////////////////
function playHuman(humanChoice) {
    gameChoices(humanChoice, playComputer())
}
//////////////////////////////////////////////////
function playComputer() {
    const choices = ['stone', 'paper', 'scissors']
    const randomChoice = Math.floor(Math.random() * 3)
    return choices[randomChoice]
}
//////////////////////////////////////////////////
let humanScore = 0
let computerScore = 0
function gameChoices(human, computer) {
    if (human == computer) {
        humanScore += 1
        computerScore += 1
        UserScorePlace.innerHTML = humanScore
        HouseScorePlace.innerHTML = computerScore
        messageAfterDraw.innerHTML = "A rodada empatou!"
    } else if (
        human == 'stone' && computer == 'scissors' 
        || human == 'paper' && computer == 'stone' 
        || human == 'scissors' && computer == 'paper') {
            humanScore += 1
            UserScorePlace.innerHTML = humanScore
            messageAfterDraw.innerHTML = "Voce ganhou!"
    } else if (
        computer == 'stone' && human == 'scissors' 
        || computer == 'paper' && human == 'stone' 
        || computer == 'scissors' && human == 'paper'
    ) {
        computerScore += 1
        HouseScorePlace.innerHTML = computerScore
        messageAfterDraw.innerHTML = "A casa ganhou!"
    }
}
//////////////////////////////////////////////////
function clearGame() {
    humanScore = 0
    computerScore = 0
        UserScorePlace.innerHTML = 0
        HouseScorePlace.innerHTML = 0
        messageAfterDraw.innerHTML = ''
    }
buttonClearGame.addEventListener("click", clearGame)