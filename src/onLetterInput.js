import { addLetter, removeLetter } from './currentWordHandler.js';

const isLetter = (value) => {
  return /^[a-z]|[A-Z]$/.test(value);
};

let rowItems; //items in row
let idx = 0; //to go to row dynamicly
let currentId; //div board-item id

export const updateParentElement = (row) => {
  idx = 0;
  rowItems = row.querySelectorAll('.board-item');
};

/**
 *
 * @param {Event key} key //user pressed key's value
 */

export const handleEnteredLetter = (key) => {
  if (isLetter(key) && !currentWordCompleted) {
    currentId = rowItems[idx].id;
    addLetter(key, document.getElementById(currentId), rowItems.length); //how many divs available in row
    idx++;
  } else if (key === 'Del' || key === 'Backspace') {
    handleDeleteLetter();
  }
};

const handleDeleteLetter = () => {
  idx > 0 ? idx-- : (idx = 0);
  currentId = rowItems[idx].id;
  const currentBoardEl = document.getElementById(currentId);
  removeLetter(currentBoardEl);
};
