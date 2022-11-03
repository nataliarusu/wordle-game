import { renderKeyboard } from './keyboard.js';
import { buildBoard } from './board.js';
import { handleEnteredLetter, updateParentElement } from './onInput.js';
import { getCurrentWord } from './addORremoveLetter.js';

const MAX_ATTEMPTS = 9;
const MAX_W_LETTERS = 8;
const guessWords = []; //we will store arrays(user guess words) in array, so here will be 6 arrays
let gameOver = false;
globalThis.currentWordCompleted = false; //global available
let currentParentEl; //current parent will be added later
let idx; //helps to change currentParentEl depending on MAX_ATTEMPTS

const boardLayout = document.querySelector('.board-layout');
const keyboard_container = document.querySelector('.keyboard-layout');

//build board depending on max values
const board = buildBoard(MAX_ATTEMPTS, MAX_W_LETTERS);
boardLayout.append(board);

//only after board rendered we can get elements
const rowEls = document.querySelectorAll('.board-row');

const addWord = (word) => {
  guessWords.push(word);
  console.log(guessWords);
};

const keyboardHandler = (ev) => {
  let key;
  if (ev instanceof KeyboardEvent) {
    key = ev.key;
  } else {
    //Pointer event
    console.log('pointer');
    key = ev.target.dataset.key;
  }

  if (currentWordCompleted && key === 'Enter') {
    addWord(getCurrentWord());
    //handle and check if match to today word
    //check if game is over, riched all attempts
    isGameOver();
    //if not matched, if not over
    idx++;
    currentParentEl = rowEls[idx];
    updateParentElement(currentParentEl); //to onInput

    console.log(idx, currentParentEl, 'after row finished');

    //if game is not over
  } else {
    console.log('handle here ' + currentWordCompleted);
    handleEnteredLetter(key);
  }
};

const isGameOver = () => {
  //check local storage
  //if(gameOver) if 6 words in guessWords completed
  /*if (guessWords.length > MAX_ATTEMPTS) {
    console.log('game is over');
    //handle the game result here
    //gameOver = true;
  
  }*/
};

const startGame = () => {
  idx = 0;
  currentParentEl = rowEls[idx];
  updateParentElement(currentParentEl); //to onInput
  console.log(currentParentEl);
  currentParentEl.classList.add('current');
  isGameOver();
  renderKeyboard(keyboard_container);
};

startGame();

document.addEventListener('keyup', keyboardHandler);
keyboard_container.addEventListener('click', keyboardHandler);
