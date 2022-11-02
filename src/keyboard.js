const keyboard_container=document.querySelector('.keyboard-layout');
const keyboard_letters = [
  ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
  ['s', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
  ['Del', 'z', 'x', 'c', 'v', 'b', 'n', 'm', 'Enter']
];

for(const row of keyboard_letters){
  const rowEl=document.createElement('div');
  rowEl.classList.add('keybord-row')
  for(let letter of row){
    const btn=document.createElement('button');
    btn.classList.add='keyboard-item';
    btn.innerHTML=letter;
    rowEl.append(btn);
  }
  keyboard_container.append(rowEl);
}

