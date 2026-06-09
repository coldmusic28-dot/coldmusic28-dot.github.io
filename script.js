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

const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Horizontals
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Verticals
    [0, 4, 8], [2, 4, 6]             // Diagonals
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
        const [a, b, c] = winningConditions[i];
        if (gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
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
