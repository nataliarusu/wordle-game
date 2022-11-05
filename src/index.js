import { renderKeyboard } from './keyboard.js';
import { buildBoard } from './board.js';
import { handleEnteredLetter, updateParentElement } from './onInput.js';
import { getCurrentWord } from './addORremoveLetter.js';

const form = document.querySelector('form');
let MAX_ATTEMPTS = 6;
let MAX_W_LETTERS = 5;
const guessWords = []; //we will store arrays(user guess words) in array, so here will be 6 arrays
let gameOver = false;
globalThis.currentWordCompleted = false; //global available
let currentParentEl; //current parent will be added later
let idx; //helps to change currentParentEl depending on MAX_ATTEMPTS

const boardLayout = document.querySelector('.board-layout');
const keyboard_container = document.querySelector('.keyboard-layout');



//only after board rendered we can get elements
let rowEls;

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
    currentParentEl.classList.remove('current');
    //handle and check if match to today word
    //check if game is over, riched all attempts
    isGameOver();
    //if not matched and if game not over
    idx++;
    currentParentEl = rowEls[idx];
    currentParentEl.classList.add('current');

    console.log(currentParentEl)
    updateParentElement(currentParentEl); //to onInput

    //if game is not over
  } else {
    handleEnteredLetter(key); //letter or delete
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

const startGame=(maxWl, mattempts)=>{
  MAX_W_LETTERS=maxWl;
  MAX_ATTEMPTS=mattempts;
  idx = 0;
  const board = buildBoard(MAX_ATTEMPTS, MAX_W_LETTERS);
  boardLayout.append(board);
  renderKeyboard(keyboard_container);
  rowEls= document.querySelectorAll('.board-row');
  currentParentEl = rowEls[idx];
  updateParentElement(currentParentEl); //to onInput
  currentParentEl.classList.add('current');
}

const startGameHandler = (ev) => {
  ev.preventDefault();
  startGame(ev.target[0].value, ev.target[1].value);
  
};
startGame(5,6);


form.addEventListener('submit', startGameHandler);
document.addEventListener('keyup', keyboardHandler);
keyboard_container.addEventListener('click', keyboardHandler);
