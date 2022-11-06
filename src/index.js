import { renderKeyboard } from '../UI/keyboardCreator.js';
import { buildBoard } from '../UI/boardCreator.js';
import { handleEnteredLetter, updateParentElement } from './onLetterInput.js';
import { clearCurrentWord, getCurrentWord } from './currentWordHandler.js';
import { notInList } from '../UI/notInListRenderer.js';
import * as wordMatcher from './wordMatcher.js';
import { updateBoardColours } from './updateBgColours.js';
import { gameOver } from './gameOver.js';
import { customizeHandler } from './onCustomizeGame.js';

const showCustomFormBtn = document.querySelector('#show-customize-form');
const form = document.querySelector('form');
let MAX_ATTEMPTS;
let MAX_W_LETTERS;
const guessWords = []; //we will store arrays(user guess words) in array, so here will be 6 arrays
globalThis.currentWordCompleted = false; //global available
let currentParentEl; //current parent will be added later
let idx; //helps to change currentParentEl depending on MAX_ATTEMPTS

const boardLayout = document.querySelector('.board-layout');
const keyboard_container = document.querySelector('.keyboard-layout');

//only after board rendered we can get elements
let rowEls;

const addWord = (word) => {
  guessWords.push(word);
};

const keyboardHandler = (ev) => {
  let key;
  if (ev instanceof KeyboardEvent) {
    key = ev.key;
  } else {
    //Pointer event
    key = ev.target.dataset.key;
  }

  if (currentWordCompleted && key === 'Enter'&&key!==undefined) {
    let matchedLetters; //will receive object with word received
    const word = getCurrentWord();
    if (wordMatcher.inDictionary(word)) {
      matchedLetters = wordMatcher.match(word);
      updateBoardColours(matchedLetters, currentParentEl);
      addWord(word);
      clearCurrentWord();
      currentParentEl.classList.remove('current');
      if (wordMatcher.allCorrect(word)) {
        gameOver('won', guessWords.length);
        console.log(guessWords)
      } else if (guessWords.length===MAX_ATTEMPTS) {
        gameOver('lost', MAX_ATTEMPTS);
      } else {
        idx++;
        currentParentEl = rowEls[idx];
        currentParentEl.classList.add('current');
        updateParentElement(currentParentEl);
      }
    } else {
      notInList(boardLayout); //render alert above the board
    }
  } else if (key!==undefined) {
    handleEnteredLetter(key); //letter or delete
  }
};

const startGame = (maxWl, maxAttempts) => {
  MAX_W_LETTERS = maxWl;
  MAX_ATTEMPTS = maxAttempts;
  idx = 0;
  const board = buildBoard(MAX_ATTEMPTS, MAX_W_LETTERS);
  boardLayout.append(board);
  renderKeyboard(keyboard_container);
  rowEls = document.querySelectorAll('.board-row');
  currentParentEl = rowEls[idx];
  updateParentElement(currentParentEl); //to onInput
  currentParentEl.classList.add('current');
  wordMatcher.getCurrentDictionary(MAX_W_LETTERS);
};

const startGameHandler = (ev) => {
  ev.preventDefault();
  boardLayout.innerHTML='';
  keyboard_container.innerHTML='';
  startGame(ev.target[0].value, ev.target[1].value);
  document.querySelector('#custom-form').classList.remove('visible');
};
startGame(5, 6);

form.addEventListener('submit', startGameHandler);
document.addEventListener('keyup', keyboardHandler);
keyboard_container.addEventListener('click', keyboardHandler);
showCustomFormBtn.addEventListener('click', customizeHandler);
