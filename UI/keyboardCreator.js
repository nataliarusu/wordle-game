
const keyboard_letters = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Del', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter']
];

export const renderKeyboard=(keyboard_container)=>{
  for(const row of keyboard_letters){
    const rowEl=document.createElement('div');
    rowEl.classList.add('keybord-row')
    for(let letter of row){
      const btn=document.createElement('button');
      btn.classList.add('keyboard-item');
      btn.setAttribute('data-key', letter);
      if(letter.length>1){
        btn.classList.add('action');
      }
      btn.innerHTML=letter;
      rowEl.append(btn);
    }
    keyboard_container.append(rowEl);
  }
  
}




