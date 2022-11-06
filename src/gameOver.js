export const gameOver=(state, attempts, keyboardHandler)=>{
    if(state ==='won'){
        console.log('you won in attepmts ', attempts)
       
    } else if(state==='lost'){
        console.log('sorry you used all your ', attempts, ' attepmts')
    }
    document.removeEventListener('keyup', keyboardHandler);
    document.querySelector('.keyboard-layout').removeEventListener('click', keyboardHandler);

//display attempts
}