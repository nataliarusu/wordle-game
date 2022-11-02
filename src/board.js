
/**
 * 
 * @param {Number} rows //attempts
 * @param {Number} columns //word length
 * @returns div table with divs of rows and columns
 */

const buildBoard=(rows, columns)=>{
    const boardEls=document.createElement('div');
    boardEls.classList.add('board-items');//will add grid class with 5 columns
    for(let i=0; i<rows; i++){
        const boardRowEl=document.createElement('div');//row
        boardRowEl.classList.add('board-row');
        for(let k=0; k<columns; k++){
            const rowItemEl=document.createElement('div');
            rowItemEl.classList.add('board-item');
            boardRowEl.append(rowItemEl);
        }
        boardEls.append(boardRowEl);
    }
    return boardEls;
}
