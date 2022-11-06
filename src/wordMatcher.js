import { getDictionary } from '../UI/dictionaryData.js';

let currentDictionary;
let wordOfgame;

export const getCurrentDictionary = (wordLength) => {
  currentDictionary = getDictionary(wordLength);
  console.log(currentDictionary);
  wordOfgame = currentDictionary[Math.floor(Math.random() * currentDictionary.length)];
  console.log(wordOfgame);
};

//if word in dictionary check if match
export const inDictionary = (word) => {
  return currentDictionary.includes(word.join(''));
};

//if match return true, if not return word with letters matched
export const match = (word) => {
  let result = []; //[{ value: word[i], match: 'correct' }];

  //if not all chars matched
  for (let i = 0; i < word.length; i++) {
    if (wordOfgame.includes(word[i])) {
      if (word[i] === wordOfgame.charAt(i)) {
        result.push({ value: word[i], match: 'correct' });
      } else {
        result.push({ value: word[i], match: 'present' });
      }
    } else {
      result.push({ value: word[i], match: 'absent' });
    }
  }

  return result;
};

export const allCorrect = (word) => {
  return wordOfgame === word.join('');
};
