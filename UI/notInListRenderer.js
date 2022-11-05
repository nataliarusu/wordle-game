const message = 'Not in word list';
let userBoard;
export const notInList = (board) => {
  userBoard = board;
  renderMessage(message);
};

const removeMessage = () => {
  setTimeout(() => {
    userBoard.removeChild(userBoard.querySelector('.message-container'));
  }, 3000);
};

const renderMessage = (message) => {
  const messageContainer = document.createElement('div');
  messageContainer.classList.add('message-container');
  const messageEl = document.createElement('p');
  messageEl.classList.add('message');
  messageEl.innerHTML = message;
  messageContainer.append(messageEl);
  userBoard.append(messageContainer);
  removeMessage();
};
