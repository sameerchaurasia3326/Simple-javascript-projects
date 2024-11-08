// Initialize the game state
let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let isGameActive = true;
const winningConditions = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
];

// Function to handle a player's move
function makeMove(index) {
    if (board[index] === "" && isGameActive) {
        board[index] = currentPlayer;
        document.querySelectorAll(".cell")[index].textContent = currentPlayer;
        checkResult();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
    }
}

// Function to check if there is a winner or a draw
function checkResult() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
        const [a, b, c] = winningConditions[i];
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            roundWon = true;
            break;
        }
    }

    if (roundWon) {
        document.getElementById("message").textContent = `Player ${currentPlayer} Wins!`;
        isGameActive = false;
        return;
    }

    if (!board.includes("")) {
        document.getElementById("message").textContent = "It's a Draw!";
        isGameActive = false;
    }
}

// Function to reset the game
function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    isGameActive = true;
    currentPlayer = "X";
    document.getElementById("message").textContent = "";
    document.querySelectorAll(".cell").forEach(cell => cell.textContent = "");
}
