const leftPaddle = document.querySelector('.left-paddle');
const rightPaddle = document.querySelector('.right-paddle');
const ball = document.querySelector('.ball');
const upButton = document.getElementById('up-button');
const downButton = document.getElementById('down-button');

document.addEventListener('keydown', function(event) {
  if(event.key === 'w') {
    leftPaddle.style.top = parseInt(getComputedStyle(leftPaddle).top) - 10 + 'px';
  } else if(event.key === 's') {
    leftPaddle.style.top = parseInt(getComputedStyle(leftPaddle).top) + 10 + 'px';
  } else if(event.key === 'ArrowUp') {
    rightPaddle.style.top = parseInt(getComputedStyle(rightPaddle).top) - 10 + 'px';
  } else if(event.key === 'ArrowDown') {
    rightPaddle.style.top = parseInt(getComputedStyle(rightPaddle).top) + 10 + 'px';
  }
});

upButton.addEventListener('click', function() {
  leftPaddle.style.top = parseInt(getComputedStyle(leftPaddle).top) - 10 + 'px';
});

downButton.addEventListener('click', function() {
  leftPaddle.style.top = parseInt(getComputedStyle(leftPaddle).top) + 10 + 'px';
});

let ballX = 50; // начальная позиция мяча по горизонтали
let ballY = 50; // начальная позиция мяча по вертикали
let ballSpeedX = 3; // скорость мяча по горизонтали
let ballSpeedY = 3; // скорость мяча по вертикали

function moveBall() {
  ballX += ballSpeedX;
  ballY += ballSpeedY;

  if(ballY >= window.innerHeight || ballY <= 0) {
    ballSpeedY = -ballSpeedY; // отскок от верхней и нижней границ
  }

  if(ballX >= window.innerWidth || ballX <= 0) {
    ballSpeedX = -ballSpeedX; // отскок от левой и правой границ
  }

  ball.style.left = ballX + 'px';
  ball.style.top = ballY + 'px';

  // обработка столкновения мяча с ракетками
  if(ballX <= 30 && ballY >= parseInt(getComputedStyle(leftPaddle).top) && ballY <= parseInt(getComputedStyle(leftPaddle).top) + 50) {
    ballSpeedX = -ballSpeedX;
  }

  if(ballX >= window.innerWidth - 30 && ballY >= parseInt(getComputedStyle(rightPaddle).top) && ballY <= parseInt(getComputedStyle(rightPaddle).top) + 50) {
    ballSpeedX = -ballSpeedX;
  }
}

function gameLoop() {
  moveBall();
  requestAnimationFrame(gameLoop);
}

gameLoop();