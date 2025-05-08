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
        humanScore += 0
        computerScore += 0
        UserScorePlace.innerHTML = humanScore
        HouseScorePlace.innerHTML = computerScore
        messageAfterDraw.innerHTML = "A rodada empatou!"
    } else if (
        human == 'stone' && computer == 'scissors' 
        || human == 'paper' && computer == 'stone' 
        || human == 'scissors' && computer == 'paper') {
            humanScore += 1
            UserScorePlace.innerHTML = humanScore
            messageAfterDraw.innerHTML = "Você venceu!"
    } else if (
        computer == 'stone' && human == 'scissors' 
        || computer == 'paper' && human == 'stone' 
        || computer == 'scissors' && human == 'paper'
    ) {
        computerScore += 1
        HouseScorePlace.innerHTML = computerScore
        messageAfterDraw.innerHTML = "A casa venceu!"
    }
    finishGame()
    viewResetButton()
}
//////////////////////////////////////////////////
function clearGame() {
    humanScore = 0
    computerScore = 0
        UserScorePlace.innerHTML = 0
        HouseScorePlace.innerHTML = 0
        messageAfterDraw.innerHTML = ''
        viewResetButton()
    }
buttonClearGame.addEventListener("click", clearGame)
//////////////////////////////////////////////////
function finishGame() {  
    if (humanScore == 25) {
    humanScore = 0
    computerScore = 0
    messageAfterDraw.innerHTML = `Você atingiu 25 pontos e ganhou!`
    UserScorePlace.innerHTML = 0
    HouseScorePlace.innerHTML = 0
    } else if (computerScore == 25) {
    humanScore = 0
    computerScore = 0
    messageAfterDraw.innerHTML = `A casa atingiu 25 pontos e ganhou!`
    UserScorePlace.innerHTML = 0
    HouseScorePlace.innerHTML = 0
    }
}
//////////////////////////////////////////////////
function viewResetButton() {
    if (humanScore > 0 || computerScore > 0) {
        buttonClearGame.style.display = 'block'
        buttonClearGame.style.margin = 'auto'
    } else if (humanScore == 0 && computerScore == 0) {
        buttonClearGame.style.display = 'none'
    }
}