/**
 *
 * @param {Array} word //Array of objects [{value:'a', match:'correct'}];
 * @param {DOM element} rowEl //Dom el current row
 */
export const updateBoardColours = (word, rowEl) => {
  const rowItems = rowEl.querySelectorAll('.board-item');
  for (let i = 0; i < word.length; i++) {
    //[{…}]
    rowItems[i].setAttribute('data-state', word[i].match);
    updateKeyBoardColour(word[i].value, word[i].match);
  }
};

const updateKeyBoardColour = (letter, match) => {
  //find key and set colour
  const keyboardItems = Array.from(document.querySelectorAll('.keyboard-item'));
  const lkey = keyboardItems.find((el) => el.dataset.key === letter);
  lkey.setAttribute('data-state', match);
};
