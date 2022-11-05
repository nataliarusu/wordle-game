import { getDictionary } from '../UI/dictionaryData.js';

let currentDictionary;
let wordOfgame;

export const getCurrentDictionary=(wordLength)=>{
    currentDictionary=getDictionary(wordLength);
    console.log(currentDictionary)
    wordOfgame=currentDictionary[2];//hardcoded here, should give random
    console.log(wordOfgame)
}

//if word in dictionary check if match
export const inDictionary=(word)=>{
    return currentDictionary.includes(word.join(''));
}

//if match return true, if not return word with letters matched
    //1. iterate through current word that computer chose
export const match=(word)=>{
    let wordObj ={};//"a":{match:false, position:false} 
    for(const char of word){
        wordObj[char]={match:false, position:false} ;
    }
    //1. iterate through current word that computer chose
    console.log(wordObj);
}

//const allMatched=()=>{}