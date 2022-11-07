# wordle-game

This project was created as part of the pre-apprenticeship course for Founders and Coders 'Take-Home Challenge'.<br>
This Wordle Game is a simple project developed using JavaScript, CSS and HTML.<br> 
The project allows a user to type words in an attempt to win the game. The game ends when the word entered by the user matches the "game word" or when all matching attempts have been used by the user.<br> 
User can add letters from keyboard or from custom keyboard displayed on the page, delete added letter and submit the word.<br> 
This project allows the user to customize the game by choosing the word length and number of attempts he wants to play. When the game is over the user will receive a message with the result. He also will be allowed to play again.<br> 
See in action https://nataliarusu.github.io/wordle-game/
<hr>

<b>This game allows the user</b><br> 

&#9745; Type letters from keyboard or custom keyboard displayed on the page<br> 
&#9745; Delete added letters<br> 
&#9745; Submit the word<br> 
&#9745; See the result after game is over
  - if lost, the message "YOU WON!", the number of attempts user used to win
  - if lost, the message "YOU LOST!", the number of attempts user used and 'word of the game' will be displayed
  
&#9745; Play again after game is over<br> 
&#9745; Customize the game even during the current game<br> 
<br>
<br>
<b>This game features</b><br>
<br>
&#9745; Play again
  - if the user has customized the game, the new game settings will be keeped<br> 
  - if the user hasn't customized the game, the default game settings will be used<br>
  
&#9745; Customize the game<br>
  - This feature allows users to choose the length of the word from 4 to 6 letters and to choose the number of attempts from 4 to 8.<br>
  - If the user customizes the game before the game is completed, current game data will be lost and new game will be started
<hr>
To run this project you need to use web-server. This project's js files are splited into multiple module files.
Use a local web-server, such as static-server or use the “live server” capability of your editor, such as VS Code Live Server Extension to run this project.
