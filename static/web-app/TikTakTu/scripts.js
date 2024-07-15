document.addEventListener('DOMContentLoaded', () => {
    const loading = document.getElementById('loading');
    const container = document.querySelector('.container');
    const clickSound = new Audio('click.wav');
    const winSound = new Audio('win.wav');

    function loadAudio(audio) {
        return new Promise((resolve) => {
            audio.oncanplaythrough = resolve;
            audio.load();
        });
    }

    window.addEventListener('load', async () => {
        await Promise.all([
            loadAudio(clickSound),
            loadAudio(winSound),
        ]);
        loading.classList.add('hidden');
        container.classList.remove('hidden');

        initializeGame(clickSound, winSound);
    });
});

function initializeGame(clickSound, winSound){
    const board = document.getElementById('board');
    const resetModalButton = document.getElementById('reset-modal');
    const modal = document.getElementById('modal');
    const modalMessage = document.getElementById('modal-message');
    const modalMessage1 = document.getElementById('modal-message1');

    let boardState = [];
    let currentPlayer = 'X';
    let isGameActive = true;
    let boardSize = 3; // Ukuran Awal
    const winConditionLength = 3; // Garis kemenangan tetap 3

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

        playSound(clickSound);

        checkResult();
    }

    function playSound(sound) {
        sound.currentTime = 0; // Reset suara ke awal
        sound.play();
    }

    function wins() {
        playSound(winSound);
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
                if (boardState.slice(i * boardSize + j, i * boardSize + j + winConditionLength).every(cell => cell === currentPlayer)) {
                    roundWon = true;
                    winningCombination = Array.from({length: winConditionLength}, (_, k) => i * boardSize + j + k);
                }
                // Kolom
                if (Array.from({length: winConditionLength}, (_, k) => boardState[(j + k) * boardSize + i]).every(cell => cell === currentPlayer)) {
                    roundWon = true;
                    winningCombination = Array.from({length: winConditionLength}, (_, k) => (j + k) * boardSize + i);
                }
            }
        }

        // Diagonal utama
        for (let i = 0; i <= boardSize - winConditionLength; i++) {
            for (let j = 0; j <= boardSize - winConditionLength; j++) {
                if (Array.from({length: winConditionLength}, (_, k) => boardState[(i + k) * boardSize + (j + k)]).every(cell => cell === currentPlayer)) {
                    roundWon = true;
                    winningCombination = Array.from({length: winConditionLength}, (_, k) => (i + k) * boardSize + (j + k));
                }
            }
        }

        // Diagonal sekunder
        for (let i = 0; i <= boardSize - winConditionLength; i++) {
            for (let j = winConditionLength - 1; j < boardSize; j++) {
                if (Array.from({length: winConditionLength}, (_, k) => boardState[(i + k) * boardSize + (j - k)]).every(cell => cell === currentPlayer)) {
                    roundWon = true;
                    winningCombination = Array.from({length: winConditionLength}, (_, k) => (i + k) * boardSize + (j - k));
                }
            }
        }

        if (roundWon) {
            highlightWinningCells(winningCombination);
            isGameActive = false;
            wins();
            modalMessage.textContent = `Pemain ${currentPlayer} menang!🥳`;
            modalMessage1.style.display = "block";
            modalMessage1.textContent = "Follow ig: yuukode";
            modal.style.display = 'block';
            resetModalButton.style.display = 'inline-block';
            return;
        }

        if (!boardState.includes('')) {
            modalMessage.textContent = 'Permainan seri 🤝';
            modalMessage1.style.display = 'none';
            modal.style.display = 'block';
            resetModalButton.style.display = 'none';
            setTimeout(() => {
                modal.style.display = 'none';
                boardSize = boardSize + 2; // Tambah ukuran papan menjadi ganjil berikutnya
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
        boardSize = 3; // Reset ukuran papan kembali ke 3x3
        createCells(boardSize);
        isGameActive = true;
        currentPlayer = 'X';
    }

    createCells(boardSize);
    resetModalButton.addEventListener('click', resetGame);
}