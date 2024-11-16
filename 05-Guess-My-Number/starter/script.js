'use strict';
/*
document.querySelector('.message').textContent = 'Correct number!';
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;  
*/
const secretNumber = Math.trunc(Math.random() * 6) + 1;
let score = 20;
let highScore = 0;
const messageDisplay = function (message) {
  document.querySelector('.message').textContent = message;
};

const scoreDisplay = function (scoreResult) {
  document.querySelector('.score').textContent = scoreResult;
};


document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  // no input
  if (!guess) {
    messageDisplay('No number');
    // When Player wins
  } else if (secretNumber === guess) {
    messageDisplay('You got it 👌');
    document.querySelector('body').style.backgroundColor = 'green';
    document.querySelector('.number').style.width = '300px';
    scoreDisplay(secretNumber);
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is different
  } else if (guess != secretNumber) {
    if (score > 1) {
      messageDisplay(
        guess < secretNumber ? 'Number is too low 📉' : 'Number is too high 📈 '
      );

      score--;
      scoreDisplay(score);
    } else if (score) {
      messageDisplay('Game is over 🔥');
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  document.querySelector('body').style.backgroundColor = '#333';
  document.querySelector('.number').style.width = '15rem';
  messageDisplay('Start guessing...');
  scoreDisplay(score)
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});
