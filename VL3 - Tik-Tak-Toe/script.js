let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let gameOver = false;

function makeMove(index) {
  if (!gameOver && board[index] === '') {
    board[index] = currentPlayer;
    document.getElementsByClassName('cell')[index].innerText = currentPlayer;
    
    if (checkWin()) {
      document.getElementById('board').classList.add('game-over');
      document.getElementById('board').classList.add(currentPlayer.toLowerCase() + '-win');
      gameOver = true;
    } else if (checkDraw()) {
      document.getElementById('board').classList.add('game-over');
      document.getElementById('board').classList.add('draw');
      gameOver = true;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }
  }
}

function checkWin() {
    const winningCombinations = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];
  
    for (let combination of winningCombinations) {
      const [a, b, c] = combination;
      if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
        showWinnerPopup(board[a]);
        return true;
      }
    }
    function showWinnerPopup(winner) {
        alert('Spieler ' + winner + ' hat gewonnen!');
      }  
    return false;
  }
  
function checkDraw() {
  return board.every(cell => cell !== '');
}

function resetGame() {
  board = ['', '', '', '', '', '', '', '', ''];
  currentPlayer = 'X';
  gameOver = false;
  
  document.getElementById('board').classList.remove('game-over');
  document.getElementById('board').classList.remove('X-win');
  document.getElementById('board').classList.remove('O-win');
  document.getElementById('board').classList.remove('draw');
  
  const cells = document.getElementsByClassName('cell');
  for (let i = 0; i < cells.length; i++) {
    cells[i].innerText = '';
  }
}