const currentWord = [];

/**
 * 
 * @param {String} letter //string char from user input
 * @param {DOM element} el //div to render letter on the page
 * @param {Number} wlength //max word's length
 */

export const addLetter = (letter, el, wlength) => {
  if (currentWord.length < wlength) {
    currentWord.push(letter);
    el.setAttribute('data-value', letter);
    el.innerHTML = letter.toUpperCase();
  }
  if (currentWord.length === wlength) {
    currentWordCompleted = true;//global variable
  }
  //console.log('add letter ', currentWord);
};

/**
 * 
 * @returns array of letters of currentWord
 */

export const getCurrentWord = () => {
  const word =[...currentWord];
  return word;
};

/**
 * empty array for new word
 * mark global variable currentWordCompleted to false
 */

export const clearCurrentWord = () => {
  currentWord.length = 0; //empty array
  currentWordCompleted=false;
};

/**
 * 
 * @param {DOM element} el //div that rendered letter on the page
 * @returns undefined if currentWord.length is 0
 */

export const removeLetter = (el) => {
  if (currentWord.length > 0) {
    currentWord.pop();
    el.removeAttribute('data-value');
    console.log(el);
    el.innerHTML = 'xxx';
  }
  if (currentWord.length <5) {
    currentWordCompleted = false;//global variable
  }
  if (currentWord.length ===0) {
    currentWordCompleted = false;//global variable
    console.log('removed and length is 0')
    return;
  }

  console.log(currentWord);
};
