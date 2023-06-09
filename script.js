// Constantes del juego
const tamañoTablero = 3;
const tamañoCelda = 100;
const símboloJugador = 'X';
const símboloComputadora = 'O';

// Variables del juego
let board = createEmptyBoard(boardSize);
let currentPlayer = playerSymbol;
let gameOver = false;

// Inicializar el lienzo y los eventos de clic
const canvas = document.getElementById('boardCanvas');
const context = canvas.getContext('2d');
canvas.width = cellSize * boardSize;
canvas.height = cellSize * boardSize;
canvas.addEventListener('click', handleBoardClick);

// Crear una matriz vacía para el tablero
function createEmptyBoard(size) {
  const board = [];
  for (let i = 0; i < size; i++) {
    board.push(Array(size).fill(''));
  }
  return board;
}

// Dibujar el tablero
function drawBoard() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      const cellX = j * cellSize;
      const cellY = i * cellSize;
      
      context.strokeStyle = 'black';
      context.lineWidth = 2;
      context.strokeRect(cellX, cellY, cellSize, cellSize);
      
      const symbol = board[i][j];
      if (symbol !== '') {
        context.font = '48px Arial';
        context.textAlign = 'center';
        context.textBaseline = 'middle';
        context.fillText(symbol, cellX + cellSize / 2, cellY + cellSize / 2);
      }
    }
  }
}

// Manejar el clic en el tablero
function handleBoardClick(event) {
  if (gameOver) {
    return;
  }
  
  const rect = canvas.getBoundingClientRect();
  const x = event.clientX - rect.left;
  const y = event.clientY - rect.top;
  
  const cellX = Math.floor(x / cellSize);
  const cellY = Math.floor(y / cellSize);
  
  if (board[cellY][cellX] === '') {
    board[cellY][cellX] = currentPlayer;
    drawBoard();
    
    if (checkWinner(currentPlayer)) {
      gameOver = true;
      alert('¡Ganaste!');
      return;
    }
    
    if (isBoardFull()) {
      gameOver = true;
      alert('¡Empate!');
      return;
    }
    
    currentPlayer = computerSymbol;
    setTimeout(playComputerTurn, 500);
  }
}

// Verificar si hay un ganador
function checkWinner(player) {
  // Implementa la lógica para verificar si hay un ganador
  // Retorna true si hay un ganador, false de lo contrario
}

// Verificar si el tablero está lleno
function isBoardFull() {
  // Implementa la lógica para verificar si el tablero está lleno
  // Retorna true si el tablero está lleno, false de lo contrario
}

// Jugada de la computadora
function playComputerTurn() {
  if (gameOver) {
    return;
  }
  
  // Implementa la lógica para que la computadora juegue
  // Puedes utilizar TensorFlow.js para entrenar un modelo y tomar decisiones más inteligentes
  // Aquí se presenta una jugada aleatoria como ejemplo
  const availableCells = [];
  
  for (let i = 0; i < boardSize; i++) {
    for (let j = 0; j < boardSize; j++) {
      if (board[i][j] === '') {
        availableCells.push({ x: j, y: i });
      }
    }
  }
  
  const randomCell = availableCells[Math.floor(Math.random() * availableCells.length)];
  board[randomCell.y][randomCell.x] = currentPlayer;
  
function checkWinner(symbol) {
  // Verificar filas
  for (let i = 0; i < boardSize; i++) {
    if (
      board[i][0] === symbol &&
      board[i][1] === symbol &&
      board[i][2] === symbol
    ) {
      return true;
    }
  }

  // Verificar columnas
  for (let j = 0; j < boardSize; j++) {
    if (
      board[0][j] === symbol &&
      board[1][j] === symbol &&
      board[2][j] === symbol
    ) {
      return true;
    }
  }

  // Verificar diagonales
  if (
    (board[0][0] === symbol && board[1][1] === symbol && board[2][2] === symbol) ||
    (board[0][2] === symbol && board[1][1] === symbol && board[2][0] === symbol)
  ) {
    return true;
  }

  return false;
}


  if (checkWinner(currentPlayer)) {
    gameOver = true;
    alert('¡Perdiste!');
    return;
  }
  
  currentPlayer = playerSymbol;
  drawBoard();
}

// Dibujar el tablero inicial
drawBoard();
