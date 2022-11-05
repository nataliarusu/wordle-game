import { addLetter, removeLetter } from './addORremoveLetter.js';

const isLetter = (value) => {
  return /^[a-z]|[A-Z]$/.test(value);
};


let rowItems; //items in row
let idx = 0; //to go to row dynamicly
let currentId; //div board-item id

export const updateParentElement = (row) => {
  console.log(row)
  idx = 0;
  rowItems = row.querySelectorAll('.board-item');
  console.log(rowItems, 'row items in updateParentElement')
};

/**
 *
 * @param {Event key} key //user pressed key's value
 */

export const handleEnteredLetter = (key) => {
  if (isLetter(key) && !currentWordCompleted) {
    //currentWordCompleted is global 
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
