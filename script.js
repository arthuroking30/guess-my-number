'use strict';
let numberGen = Math.trunc(Math.random() * 20) + 1;
let message = document.querySelector('.message').textContent;

console.log(numberGen);

const loss = function () {};

const reset = function () {
  numberGen = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

const check = function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = 'no number';
  } else if (guess === numberGen) {
    document.querySelector('.message').textContent = 'You win!';
    document.querySelector('.number').textContent = numberGen;
    document.querySelector('body').style.backgroundColor = '#00ff00';
    document.querySelector('.number').style.width = '30rem';
    if (
      Number(document.querySelector('.highscore').textContent) <
      Number(document.querySelector('.score').textContent)
    )
      document.querySelector('.highscore').textContent =
        document.querySelector('.score').textContent;
    //   } else if (guess > numberGen) {
    //     if (Number(document.querySelector('.score').textContent > 1)) {
    //       document.querySelector('.message').textContent = 'number too high!';
    //       document.querySelector('.score').textContent--;
    //     } else {
    //       document.querySelector('.message').textContent = 'you loose!';
    //       document.querySelector('.score').textContent = '0';
    //     }
    //   } else if (guess < numberGen) {
    //     if (Number(document.querySelector('.score').textContent > 1)) {
    //       document.querySelector('.message').textContent = 'number too low!';
    //       document.querySelector('.score').textContent--;
    //     } else {
    //       document.querySelector('.message').textContent = 'you loose!';
    //       document.querySelector('.score').textContent = '0';
    //     }
    //   }
  } else if (guess !== numberGen) {
    if (Number(document.querySelector('.score').textContent > 1)) {
      document.querySelector('.message').textContent = `number too ${
        guess > numberGen ? 'high' : 'low'
      }!`;
      document.querySelector('.score').textContent--;
    } else {
      document.querySelector('.message').textContent = 'you loose!';
      document.querySelector('.score').textContent = '0';
    }
  }
};

document.querySelector('.check').addEventListener('click', check);
document.querySelector('.again').addEventListener('click', reset);
