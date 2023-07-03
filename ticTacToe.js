var currentPlayer = "X";
var board = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];

function makeMove(row, col) {

    let a = 5
    if (board[row][col] === "") {
        board[row][col] = currentPlayer;
        document.querySelector(".board").rows[row].cells[col].textContent = currentPlayer;
        if (checkWin()) {
            document.querySelector('.message').textContent = currentPlayer + "  wins ";
            disableBoard();
        }
        else if (checkDraw()) {
            document.querySelector('.message').textContent = " It's a Draw";
            disableBoard();
        }
        else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X'
        }
    }
    function checkWin() {
        for (var i = 0; i < 3; i++) {
            if (board[i][0] !== "" && board[i][0] === board[i][1] && board[i][0] === board[i][2]) {
                return true;
            }
            if (board[0][i] !== "" && board[0][i] === board[1][i] && board[0][i] === board[2][i]) {
                return true;
            }
        }
        if (board[0][0] !== "" && board[0][0] === board[1][1] && board[0][0] === board[2][2]) {
            return true;
        }
        if (board[0][2] !== "" && board[0][2] === board[1][1] && board[0][2] === board[2][0]) {
            return true;
        }
        return false;
    }
    function checkDraw() {
        for (var i = 0; i < 3; i++) {
            for (var j = 0; j < 3; j++) {
                if (board[i][j] === "") {
                    return false;
                }
            }
        }
        return true;
    }

    function disableBoard() {
        let cells;
        cells = document.querySelector('table');
        cells.classList.remove("board")
    }
    
}

function reset() {
   window.location.reload()

}
