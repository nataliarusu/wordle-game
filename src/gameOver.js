export const gameOver=(state, attempts)=>{
    if(state ==='won'){
        console.log('you won in attepmts ', attempts)
    } else if(state==='lost'){
        console.log('sorry you used all your ', attempts, ' attepmts')
    }

//display attempts
}