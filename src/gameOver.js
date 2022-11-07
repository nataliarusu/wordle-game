const resultEl = document.querySelector('.result');


export const gameOver=(state, attempts, keyboardHandler, word, startGame, WLength, MAttempts)=>{
    let messageEl;

    if(state ==='won'){
        console.log('you won in attepmts ', attempts)
        messageEl = createMessage(`you ${state}`, attempts)
    } else if(state==='lost'){
        messageEl = createMessage(`you ${state}`, attempts, word)        
    }
    resultEl.append(messageEl);
    resultEl.classList.add('visible');
    messageEl.classList.add('animate-up')
    resultEl.querySelector('button').addEventListener('click',()=>{
        resultEl.innerHTML='';
        resultEl.classList.remove('visible');
        messageEl.classList.remove('animate-up')
        startGame(WLength, MAttempts);
    })
    document.removeEventListener('keyup', keyboardHandler);
    document.querySelector('.keyboard-layout').removeEventListener('click', keyboardHandler);
  
//display attempts
}

const createMessage = (state, attempts, word)=>{
    const messageContainer = document.createElement('div');
    messageContainer.classList.add('result-message');
    const displayStateEl = document.createElement('p');
    displayStateEl.innerHTML = state.toUpperCase();
    const displayAttemptsEl = document.createElement('p');
    displayAttemptsEl.innerHTML=attempts===1?`${attempts} attempt`:`${attempts} attempts`;
    messageContainer.append(displayStateEl, displayAttemptsEl);
    if(word){
        const wordEl = document.createElement('p');
        wordEl.innerHTML = 'The word of the game was ';
        const span = document.createElement('span');
        span.innerHTML= word.toUpperCase();
        wordEl.append(span);
        messageContainer.append(wordEl);
    }
    const btn = document.createElement('button');
    btn.innerHTML='Play again';
    messageContainer.append(btn);
    return messageContainer;
}