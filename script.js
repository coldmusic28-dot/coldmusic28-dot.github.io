const boardElement = document.getElementById('board');
const cellElements = document.querySelectorAll('.cell');
const turnIndicator = document.getElementById('turn-indicator');
const restartBtn = document.getElementById('restart-btn');
const resetScoreboardBtn = document.getElementById('reset-scoreboard-btn');

const scoreXElement = document.getElementById('score-x');
const scoreOElement = document.getElementById('score-o');
const scoreDrawElement = document.getElementById('score-draw');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

let scores = {
    X: 0,
    O: 0,
    draws: 0
};

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function handleCellClick(clickedCellEvent) {
    const clickedCell = clickedCellEvent.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) {
        return;
    }

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleCellPlayed(clickedCell, clickedCellIndex) {
    gameState[clickedCellIndex] = currentPlayer;
    clickedCell.innerText = currentPlayer;
    clickedCell.classList.add('taken');
}

function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i <= 7; i++) {
        const winCondition = winningConditions[i];
        let a = gameState[winCondition[0]];
        let b = gameState[winCondition[1]];
        let c = gameState[winCondition[2]];
        if (a === '' || b === '' || c === '') {
            continue;
        }
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        handleWin();
        return;
    }

    let roundDraw = !gameState.includes("");
    if (roundDraw) {
        handleDraw();
        return;
    }

    handlePlayerChange();
}

function handleWin() {
    turnIndicator.innerText = `Player ${currentPlayer} Wins!`;
    scores[currentPlayer]++;
    updateScoreboard();
    gameActive = false;
}

function handleDraw() {
    turnIndicator.innerText = "Draw!";
    scores.draws++;
    updateScoreboard();
    gameActive = false;
}

function handlePlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    turnIndicator.innerText = `Player ${currentPlayer}'s Turn`;
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    turnIndicator.innerText = `Player X's Turn`;
    cellElements.forEach(cell => {
        cell.innerText = "";
        cell.classList.remove('taken');
    });
}

function updateScoreboard() {
    scoreXElement.innerText = scores.X;
    scoreOElement.innerText = scores.O;
    scoreDrawElement.innerText = scores.draws;
}

function handleResetScoreboard() {
    scores.X = 0;
    scores.O = 0;
    scores.draws = 0;
    updateScoreboard();
    handleRestartGame();
}

cellElements.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', handleRestartGame);
resetScoreboardBtn.addEventListener('click', handleResetScoreboard);
