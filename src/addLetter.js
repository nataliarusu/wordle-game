
const currentWord=[];


export const addLetter=(letter, el, wlength)=>{
    if(currentWord.length<wlength){
        currentWord.push(letter);
        el.setAttribute('data-value', letter);
        el.innerHTML=letter.toUpperCase();
    } 
   
   console.log(currentWord)
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
