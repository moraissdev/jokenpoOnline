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
const PlaceOfUserChoice = document.getElementById("userchoice")
const PlaceOfComputerChoice = document.getElementById("computerchoice")
//////////////////////////////////////////////////
const GAME_OPTIONS = { //ENUM
    STONE: 'stone',
    PAPER: 'paper',
    SCISSORS: 'scissors',
}
//////////////////////////////////////////////////
function playHuman(humanChoice) {
    const computerChoice = playComputer()
    gameChoices(humanChoice, computerChoice)
    showTheChoices(humanChoice, computerChoice)
}
//////////////////////////////////////////////////
function playComputer() {
    const choices = [GAME_OPTIONS.STONE, GAME_OPTIONS.PAPER, GAME_OPTIONS.SCISSORS]
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
        human == GAME_OPTIONS.STONE && computer == GAME_OPTIONS.SCISSORS 
        || human == GAME_OPTIONS.PAPER && computer == GAME_OPTIONS.STONE 
        || human == GAME_OPTIONS.SCISSORS && computer == GAME_OPTIONS.PAPER) {
            humanScore += 1
            UserScorePlace.innerHTML = humanScore
            messageAfterDraw.innerHTML = "Você venceu!"
    } else if (
        computer == GAME_OPTIONS.STONE && human == GAME_OPTIONS.SCISSORS 
        || computer == GAME_OPTIONS.PAPER && human == GAME_OPTIONS.STONE
        || computer == GAME_OPTIONS.SCISSORS && human == GAME_OPTIONS.PAPER
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
    PlaceOfComputerChoice.innerHTML = ''
    PlaceOfUserChoice.innerHTML = ''
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
//////////////////////////////////////////////////
function showTheChoices(human, computer) {

    const emojis = ['👊', '🖐️', '✌️']

    if (human == GAME_OPTIONS.STONE && computer == GAME_OPTIONS.STONE) {
        PlaceOfUserChoice.innerHTML = emojis[0]
        PlaceOfComputerChoice.innerHTML = emojis[0]
    } else if (human == GAME_OPTIONS.STONE && computer == GAME_OPTIONS.PAPER) {
        PlaceOfUserChoice.innerHTML = emojis[0]
        PlaceOfComputerChoice.innerHTML = emojis[1]
    } else if (human == GAME_OPTIONS.STONE && computer == GAME_OPTIONS.SCISSORS) {
        PlaceOfUserChoice.innerHTML = emojis[0]
        PlaceOfComputerChoice.innerHTML = emojis[2]
    } else if (human == GAME_OPTIONS.PAPER && computer == GAME_OPTIONS.STONE) {
        PlaceOfUserChoice.innerHTML = emojis[1]
        PlaceOfComputerChoice.innerHTML = emojis[0]
    } else if (human == GAME_OPTIONS.PAPER && computer == GAME_OPTIONS.PAPER) {
        PlaceOfUserChoice.innerHTML = emojis[1]
        PlaceOfComputerChoice.innerHTML = emojis[1]
    } else if (human == GAME_OPTIONS.PAPER && computer == GAME_OPTIONS.SCISSORS) {
        PlaceOfUserChoice.innerHTML = emojis[1]
        PlaceOfComputerChoice.innerHTML = emojis[2]
    } else if (human == GAME_OPTIONS.SCISSORS && computer == GAME_OPTIONS.STONE) {
        PlaceOfUserChoice.innerHTML = emojis[2]
        PlaceOfComputerChoice.innerHTML = emojis[0]
    } else if (human == GAME_OPTIONS.SCISSORS && computer == GAME_OPTIONS.PAPER) {
        PlaceOfUserChoice.innerHTML = emojis[2]
        PlaceOfComputerChoice.innerHTML = emojis[1]
    } else if (human == GAME_OPTIONS.SCISSORS && computer == GAME_OPTIONS.SCISSORS) {
        PlaceOfUserChoice.innerHTML = emojis[2]
        PlaceOfComputerChoice.innerHTML = emojis[2]
    }
}