import { renderKeyboard } from './keyboard.js';
import { buildBoard } from './board.js';
import { addLetter, removeLetter } from './addLetter.js';
const ATTEMPTS = 6;
const MAX_W_LETTERS = 5;
let currentId = 1;
const boardLayout = document.querySelector('.board-layout');
const keyboard_container = document.querySelector('.keyboard-layout');

let gameOver = false;
const board = buildBoard(ATTEMPTS, MAX_W_LETTERS);
console.log(board);
boardLayout.append(board);

const isLetter = (value) => {
  return /^[a-z]|[A-Z]$/.test(value);
};

const customKeyboardHandler = (ev) => {
   console.log(ev.target)
  let key = ev.target.dataset.key;
  let currentBoardEl = document.getElementById(currentId);
  if (isLetter(key)) {
    currentId ++;
    addLetter(ev.target.textContent, currentBoardEl, MAX_W_LETTERS);
  } else if (key === 'Del') {
    currentId--;
    currentBoardEl = document.getElementById(currentId);
    removeLetter(currentBoardEl);
  }
};
const compKeyboardHandler = (ev) => {
    console.dir(ev);
  if (isLetter(ev.key)) {
    console.log(ev.key);
  }
};

const guessWords = [[]]; //we will store arrays(user guess words) in array, so here will be 6 arrays

const isGameOver = () => {
  //check local storage
  //if(gameOver)
  if (guessWords.length < MAX_W_LETTERS) {
    document.addEventListener('keyup', compKeyboardHandler);
    keyboard_container.addEventListener('click', customKeyboardHandler);
  } else {
    document.removeEventListener('keyup');
    keyboard_container.removeEventListener('click');
    gameOver = true;
  }
};

const startGame = () => {
  isGameOver();
  renderKeyboard(keyboard_container);
};

startGame();
