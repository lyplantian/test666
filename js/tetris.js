const canvas = document.getElementById('tetris');
const context = canvas.getContext('2d');
const nextCanvas = document.getElementById('next');
const nextContext = nextCanvas.getContext('2d');

const grid = 30;
context.scale(grid, grid);
nextContext.scale(grid, grid);

const colors = [
  null,
  '#38bdf8',
  '#f97316',
  '#22c55e',
  '#f43f5e',
  '#a855f7',
  '#facc15',
  '#14b8a6',
];

const arena = createMatrix(10, 20);

const player = {
  pos: { x: 0, y: 0 },
  matrix: null,
  score: 0,
  lines: 0,
  level: 1,
  next: null,
};

let dropCounter = 0;
let dropInterval = 1000;
let lastTime = 0;
let isPaused = false;
let isRunning = false;

function createMatrix(width, height) {
  const matrix = [];
  while (height--) {
    matrix.push(new Array(width).fill(0));
  }
  return matrix;
}

function createPiece(type) {
  if (type === 'T') {
    return [
      [0, 0, 0],
      [1, 1, 1],
      [0, 1, 0],
    ];
  }
  if (type === 'O') {
    return [
      [2, 2],
      [2, 2],
    ];
  }
  if (type === 'L') {
    return [
      [0, 3, 0],
      [0, 3, 0],
      [0, 3, 3],
    ];
  }
  if (type === 'J') {
    return [
      [0, 4, 0],
      [0, 4, 0],
      [4, 4, 0],
    ];
  }
  if (type === 'I') {
    return [
      [0, 5, 0, 0],
      [0, 5, 0, 0],
      [0, 5, 0, 0],
      [0, 5, 0, 0],
    ];
  }
  if (type === 'S') {
    return [
      [0, 6, 6],
      [6, 6, 0],
      [0, 0, 0],
    ];
  }
  if (type === 'Z') {
    return [
      [7, 7, 0],
      [0, 7, 7],
      [0, 0, 0],
    ];
  }
  return [[0]];
}

function drawMatrix(matrix, offset, ctx = context) {
  matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        ctx.fillStyle = colors[value];
        ctx.fillRect(x + offset.x, y + offset.y, 1, 1);
        ctx.strokeStyle = 'rgba(15, 23, 42, 0.65)';
        ctx.strokeRect(x + offset.x, y + offset.y, 1, 1);
      }
    });
  });
}

function draw() {
  context.fillStyle = '#0b1220';
  context.fillRect(0, 0, canvas.width, canvas.height);
  drawMatrix(arena, { x: 0, y: 0 });
  drawMatrix(player.matrix, player.pos);
}

function drawNext() {
  nextContext.fillStyle = '#0b1220';
  nextContext.fillRect(0, 0, nextCanvas.width, nextCanvas.height);
  if (player.next) {
    drawMatrix(player.next, { x: 1, y: 1 }, nextContext);
  }
}

function merge(arenaMatrix, playerData) {
  playerData.matrix.forEach((row, y) => {
    row.forEach((value, x) => {
      if (value !== 0) {
        arenaMatrix[y + playerData.pos.y][x + playerData.pos.x] = value;
      }
    });
  });
}

function collide(arenaMatrix, playerData) {
  const { matrix, pos } = playerData;
  for (let y = 0; y < matrix.length; y += 1) {
    for (let x = 0; x < matrix[y].length; x += 1) {
      if (matrix[y][x] !== 0 && (arenaMatrix[y + pos.y] && arenaMatrix[y + pos.y][x + pos.x]) !== 0) {
        return true;
      }
    }
  }
  return false;
}

function rotate(matrix, dir) {
  for (let y = 0; y < matrix.length; y += 1) {
    for (let x = 0; x < y; x += 1) {
      [matrix[x][y], matrix[y][x]] = [matrix[y][x], matrix[x][y]];
    }
  }
  if (dir > 0) {
    matrix.forEach((row) => row.reverse());
  } else {
    matrix.reverse();
  }
}

function playerRotate(dir) {
  const position = player.pos.x;
  let offset = 1;
  rotate(player.matrix, dir);
  while (collide(arena, player)) {
    player.pos.x += offset;
    offset = -(offset + (offset > 0 ? 1 : -1));
    if (offset > player.matrix[0].length) {
      rotate(player.matrix, -dir);
      player.pos.x = position;
      return;
    }
  }
}

function arenaSweep() {
  let rowCount = 1;
  outer: for (let y = arena.length - 1; y >= 0; y -= 1) {
    for (let x = 0; x < arena[y].length; x += 1) {
      if (arena[y][x] === 0) {
        continue outer;
      }
    }
    const row = arena.splice(y, 1)[0].fill(0);
    arena.unshift(row);
    y += 1;
    player.score += rowCount * 100;
    player.lines += 1;
    rowCount *= 2;
  }
  if (player.lines >= player.level * 10) {
    player.level += 1;
    dropInterval = Math.max(150, 1000 - player.level * 80);
  }
}

function playerDrop() {
  player.pos.y += 1;
  if (collide(arena, player)) {
    player.pos.y -= 1;
    merge(arena, player);
    playerReset();
    arenaSweep();
    updatePanel();
  }
  dropCounter = 0;
}

function playerMove(dir) {
  player.pos.x += dir;
  if (collide(arena, player)) {
    player.pos.x -= dir;
  }
}

function playerHardDrop() {
  while (!collide(arena, player)) {
    player.pos.y += 1;
  }
  player.pos.y -= 1;
  merge(arena, player);
  playerReset();
  arenaSweep();
  updatePanel();
  dropCounter = 0;
}

function updatePanel() {
  document.getElementById('score').textContent = player.score;
  document.getElementById('lines').textContent = player.lines;
  document.getElementById('level').textContent = player.level;
}

function playerReset() {
  if (!player.next) {
    player.next = createPiece(randomType());
  }
  player.matrix = player.next;
  player.next = createPiece(randomType());
  player.pos.y = 0;
  player.pos.x = Math.floor(arena[0].length / 2) - Math.floor(player.matrix[0].length / 2);
  drawNext();
  if (collide(arena, player)) {
    arena.forEach((row) => row.fill(0));
    player.score = 0;
    player.lines = 0;
    player.level = 1;
    dropInterval = 1000;
    updatePanel();
  }
}

function randomType() {
  const pieces = 'TJLOSZI';
  return pieces[Math.floor(Math.random() * pieces.length)];
}

function update(time = 0) {
  if (!isRunning) {
    return;
  }
  const deltaTime = time - lastTime;
  lastTime = time;

  if (!isPaused) {
    dropCounter += deltaTime;
    if (dropCounter > dropInterval) {
      playerDrop();
    }
    draw();
  }
  requestAnimationFrame(update);
}

function startGame() {
  if (isRunning) {
    return;
  }
  isRunning = true;
  isPaused = false;
  playerReset();
  updatePanel();
  update();
}

function pauseGame() {
  if (!isRunning) {
    return;
  }
  isPaused = !isPaused;
}

function resetGame() {
  arena.forEach((row) => row.fill(0));
  player.score = 0;
  player.lines = 0;
  player.level = 1;
  dropInterval = 1000;
  player.next = null;
  playerReset();
  updatePanel();
  draw();
}

document.addEventListener('keydown', (event) => {
  if (!isRunning) {
    return;
  }
  if (event.key === 'ArrowLeft') {
    playerMove(-1);
  } else if (event.key === 'ArrowRight') {
    playerMove(1);
  } else if (event.key === 'ArrowDown') {
    playerDrop();
  } else if (event.key === 'ArrowUp') {
    playerRotate(1);
  } else if (event.code === 'Space') {
    playerHardDrop();
  } else if (event.key.toLowerCase() === 'p') {
    pauseGame();
  }
});

document.getElementById('start').addEventListener('click', startGame);
document.getElementById('pause').addEventListener('click', pauseGame);
document.getElementById('reset').addEventListener('click', () => {
  if (!isRunning) {
    isRunning = true;
    update();
  }
  resetGame();
});

resetGame();
