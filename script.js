'use strict';
// ===== Elements =================================================
const elementBody = document.querySelector('body');
const elementMessage = document.querySelector('.message');
const elementScore = document.querySelector('.score');
const elementCheck = document.querySelector('.check');
const elementAgain = document.querySelector('.again');
const elementNumber = document.querySelector('.number');
const elementGuess = document.querySelector('.guess');
const elementHighscore = document.querySelector('.highscore');

// ===== Environment ==============================================
const numberOfTries = 20;
let numberSecret = Math.trunc(Math.random() * numberOfTries) + 1;
let stateScore = numberOfTries;
let stateHighscore = 0; //

// ===== Logic ====================================================
// ===== Again
elementAgain.addEventListener('click', function () {
  numberSecret = Math.trunc(Math.random() * numberOfTries) + 1; //
  elementMessage.textContent = 'Start guessing...'; //
  elementBody.style.backgroundColor = '#222'; //
  elementNumber.style.width = '15rem'; //
  elementNumber.textContent = '?'; //
  stateScore = numberOfTries; //
  elementScore.textContent = stateScore; //
  elementGuess.value = ''; //
});

// ===== Check
elementCheck.addEventListener('click', function () {
  const numberGuess = Number(elementGuess.value);
  if (!numberGuess) {
    elementMessage.textContent = '⛔ No Number Was Given!';
  } else if (numberGuess === numberSecret) {
    // numberGuess is Correct
    elementMessage.textContent = '🎉 Correct Number!';
    elementBody.style.backgroundColor = '#69b347';
    elementNumber.style.width = '30rem';
    elementNumber.textContent = numberSecret;

    if (stateScore > stateHighscore) {
      stateHighscore = stateScore;
      elementHighscore.textContent = stateHighscore;
    }
    // numberGuess too High
  } else if (numberGuess > numberSecret) {
    if (stateScore > 1) {
      elementMessage.textContent = '📈 Too High!';
      stateScore--;
      elementScore.textContent = stateScore;
    } else {
      elementMessage.textContent = '💥 You Lost the Game!';
      elementScore.textContent = 0;
    }
    // numberGuess too Low
  } else if (numberGuess < numberSecret) {
    if (stateScore > 1) {
      elementMessage.textContent = '📉 Too Low!';
      stateScore--;
      elementScore.textContent = stateScore;
    } else {
      elementMessage.textContent = '💥 You Lost the Game!';
      elementScore.textContent = 0;
    }
  }
});
// ================================================================
