const board = document.getElementById('board');
const resetModalButton = document.getElementById('reset-modal');
const modal = document.getElementById('modal');
const modalMessage = document.getElementById('modal-message');
const modalMessage1 = document.getElementById('modal-message1');
const clickSound = 'click.mp3';
const winSound = 'win.mp3';

let boardState = [];
let currentPlayer = 'X';
let isGameActive = true;
let boardSize = 3; // Ukuran Awal
const winConditionLength = 3; // Garis kemenangan agar tetap 3

function createCells(size) {
    board.innerHTML = ''; // Clear sel
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    boardState = Array(size * size).fill(''); // Reset papan

    for (let i = 0; i < size * size; i++) {
        const cell = document.createElement('div');
        cell.classList.add('cell');
        cell.setAttribute('data-index', i);
        cell.style.width = `${300 / size}px`;
        cell.style.height = `${300 / size}px`;
        cell.style.fontSize = `${48 / size * 3}px`;
        cell.addEventListener('click', handleCellClick);
        board.appendChild(cell);
    }
}

function handleCellClick(event) {
    const clickedCell = event.target;
    const clickedCellIndex = parseInt(clickedCell.getAttribute('data-index'));

    if (boardState[clickedCellIndex] !== '' || !isGameActive) {
        return;
    }

    boardState[clickedCellIndex] = currentPlayer;
    clickedCell.textContent = currentPlayer;
    clickedCell.classList.add(currentPlayer);

    clicks();

    checkResult();
}

function clicks() {
    const audio = new Audio(clickSound);
    audio.play();
}

function wins() {
    const audio = new Audio(winSound);
    audio.play();
}

function highlightWinningCells(cells) {
    cells.forEach(index => {
        const cell = document.querySelector(`[data-index='${index}']`);
        cell.classList.add('win');
    });
}

function checkResult() {
    let roundWon = false;
    let winningCombination = [];

    // Cek untuk setiap baris, kolom, dan diagonal
    for (let i = 0; i < boardSize; i++) {
        for (let j = 0; j <= boardSize - winConditionLength; j++) {
            // Baris
            if (boardState[i * boardSize + j] === currentPlayer &&
                boardState[i * boardSize + j + 1] === currentPlayer &&
                boardState[i * boardSize + j + 2] === currentPlayer) {
                roundWon = true;
                winningCombination = [i * boardSize + j, i * boardSize + j + 1, i * boardSize + j + 2];
            }
            // Kolom
            if (boardState[j * boardSize + i] === currentPlayer &&
                boardState[(j + 1) * boardSize + i] === currentPlayer &&
                boardState[(j + 2) * boardSize + i] === currentPlayer) {
                roundWon = true;
                winningCombination = [j * boardSize + i, (j + 1) * boardSize + i, (j + 2) * boardSize + i];
            }
        }
    }

    // Diagonal utama
    for (let i = 0; i <= boardSize - winConditionLength; i++) {
        for (let j = 0; j <= boardSize - winConditionLength; j++) {
            if (boardState[i * boardSize + j] === currentPlayer &&
                boardState[(i + 1) * boardSize + (j + 1)] === currentPlayer &&
                boardState[(i + 2) * boardSize + (j + 2)] === currentPlayer) {
                roundWon = true;
                winningCombination = [i * boardSize + j, (i + 1) * boardSize + (j + 1), (i + 2) * boardSize + (j + 2)];
            }
        }
    }

    // Diagonal sekunder
    for (let i = 0; i <= boardSize - winConditionLength; i++) {
        for (let j = winConditionLength - 1; j < boardSize; j++) {
            if (boardState[i * boardSize + j] === currentPlayer &&
                boardState[(i + 1) * boardSize + (j - 1)] === currentPlayer &&
                boardState[(i + 2) * boardSize + (j - 2)] === currentPlayer) {
                roundWon = true;
                winningCombination = [i * boardSize + j, (i + 1) * boardSize + (j - 1), (i + 2) * boardSize + (j - 2)];
            }
        }
    }

    if (roundWon) {
        highlightWinningCells(winningCombination);
        isGameActive = false;
        wins();
        modalMessage.textContent = `Pemain ${currentPlayer} menang!🥳`;
        modalMessage1.style.display = "block";
        modalMessage1.textContent = "Follow ig: yuukode"
        modal.style.display = 'block';
        resetModalButton.style.display = 'inline-block';
        return;
    }

    if (!boardState.includes('')) {
        modalMessage.textContent = 'Permainan seri 🤝';
        modalMessage1.style.display = 'none';
        modal.style.display = 'block';
        resetModalButton.style.display= 'none';
        setTimeout(() => {
            modal.style.display = 'none';
            boardSize++;
            createCells(boardSize);
            isGameActive = true;
            currentPlayer = 'X';
        }, 1500);

        return;
    }

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function resetGame() {
    modal.style.display = 'none';
    boardSize = 3;
    createCells(boardSize);
    isGameActive = true;
    currentPlayer = 'X';
}

createCells(boardSize);
resetModalButton.addEventListener('click', resetGame);

