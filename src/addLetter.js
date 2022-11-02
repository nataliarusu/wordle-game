
const currentWord=[];


export const addLetter=(letter, el, wlength)=>{
    let complete=false;
    if(currentWord.length<wlength){
        currentWord.push(letter);
        el.setAttribute('data-value', letter);
        el.innerHTML=letter.toUpperCase();
   
    } 
    if(currentWord.length===5){
        complete=true;
    }

   return complete;
}

export const getWord = ()=>{
    return currentWord;
}

export const removeLetter=(el)=>{
    if(currentWord.length>0){
        currentWord.pop();
        el.removeAttribute('data-value');
        console.log(el)
        el.innerHTML='xxx';
        
    } 
   
   console.log(currentWord)
}
