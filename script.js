'use strict';
const messageElement = document.querySelector('.message');
const scoreElement = document.querySelector('.score');
const secretNumber = Math.trunc(Math.random() * 20) + 1;
let stateScore = 20;
document.querySelector('.number').textContent = secretNumber;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  if (!guess) {
    messageElement.textContent = '⛔ No Number Was Given!';
  } else if (guess === secretNumber) {
    messageElement.textContent = '🎉 Correct Number!';
  } else if (guess > secretNumber) {
    if (stateScore > 1) {
      messageElement.textContent = '📈 Too High!';
      stateScore--;
      scoreElement.textContent = stateScore;
    } else {
      messageElement.textContent = '💥 You Lost the Game!';
      scoreElement.textContent = 0;
    }
  } else if (guess < secretNumber) {
    if (stateScore > 1) {
      messageElement.textContent = '📉 Too Low!';
      stateScore--;
      scoreElement.textContent = stateScore;
    } else {
      messageElement.textContent = '💥 You Lost the Game!';
      scoreElement.textContent = 0;
    }
  }
});
