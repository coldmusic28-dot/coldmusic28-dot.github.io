const cellElements = document.querySelectorAll('.cell');
const turnIndicator = document.getElementById('turn-indicator');
const restartBtn = document.getElementById('restart-btn');
const resetScoreboardBtn = document.getElementById('reset-scoreboard-btn');

const scoreXVal = document.querySelector('#score-x .val');
const scoreOVal = document.querySelector('#score-o .val');
const scoreDrawVal = document.querySelector('#score-draw .val');

let currentPlayer = 'X';
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];
let scores = { X: 0, O: 0, draws: 0 };

// Using safe text coordinates to prevent code from stripping
const winningConditions = [
    "0,1,2", "3,4,5", "6,7,8",
    "0,3,6", "1,4,7", "2,5,8",
    "0,4,8", "2,4,6"
];

function handleCellClick(e) {
    const clickedCell = e.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (gameState[clickedCellIndex] !== "" || !gameActive) return;

    handleCellPlayed(clickedCell, clickedCellIndex);
    handleResultValidation();
}

function handleCellPlayed(cell, index) {
    gameState[index] = currentPlayer;
    cell.innerText = currentPlayer;
    cell.classList.add('taken', currentPlayer === 'X' ? 'p-x' : 'p-o');
}

function handleResultValidation() {
    let roundWon = false;

    for (let i = 0; i < winningConditions.length; i++) {
        const conditionParts = winningConditions[i].split(",");
        let a = gameState[parseInt(conditionParts[0])];
        let b = gameState[parseInt(conditionParts[1])];
        let c = gameState[parseInt(conditionParts[2])];
        
        if (a === '' || b === '' || c === '') continue;
        if (a === b && b === c) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        turnIndicator.innerHTML = `Player <span style="color: var(--color-${currentPlayer.toLowerCase()})">${currentPlayer}</span> Wins!`;
        scores[currentPlayer]++;
        updateScoreboard();
        gameActive = false;
        return;
    }

    if (!gameState.includes("")) {
        turnIndicator.innerHTML = `<span style="color: var(--color-draw)">It's a Draw!</span>`;
        scores.draws++;
        updateScoreboard();
        gameActive = false;
        return;
    }

    currentPlayer = currentPlayer === "X" ? "O" : "X";
    turnIndicator.innerHTML = `Player <span style="color: var(--color-${currentPlayer.toLowerCase()})">${currentPlayer}</span>'s Turn`;
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    turnIndicator.innerHTML = `Player <span style="color: var(--color-x)">X</span>'s Turn`;
    cellElements.forEach(cell => {
        cell.innerText = "";
        cell.className = "cell";
    });
}

function updateScoreboard() {
    scoreXVal.innerText = scores.X;
    scoreOVal.innerText = scores.O;
    scoreDrawVal.innerText = scores.draws;
}

function handleResetScoreboard() {
    scores = { X: 0, O: 0, draws: 0 };
    updateScoreboard();
    handleRestartGame();
}

cellElements.forEach(cell => cell.addEventListener('click', handleCellClick));
restartBtn.addEventListener('click', handleRestartGame);
resetScoreboardBtn.addEventListener('click', handleResetScoreboard);
