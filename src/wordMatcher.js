import { getDictionary } from './dictionaryData.js';

let currentDictionary;

export const getCurrentDictionary=(wordLength)=>{
    currentDictionary=getDictionary(wordLength);
    console.log(currentDictionary)
}

//if word in dictionary check if match
const inDictionary=(word)=>{
    return true;
}

//if match return true, if not return word with letters matched
export const match=(word)=>{
    let wordObj ={};//"a":{match:false, position:false} 
    for(const char in word){
        wordObj[char]={match:false, position:false} ;
    }
    console.log(wordObj);
}
