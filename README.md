# **2048**

### Description 
Math based game with moving blocks. Blocks that are the same when moved around 
the board will square with each other and merge. 1 tile will randomly appear after each move and players have the urgency to complete and merge numbers before the board is filled and the player loses. Game Link>>https://2048.ninja/



### How to Get Started
* Design in Figma to nail down exact themes or colors. 

* HTML structure is 4 flex rows with 16 squares roughly 100px's

* Javascript over functions would look something like this:

* Init function for initalization of game.

* Squares will be put in Array and future functions will access and edit array

* Function for 2 tiles at random at game start

* Place one tile at random after every move. Can probably just create callback function ex. addtile()

* Hardest function or most complex will be move function that shifts html elements, merges squares and **, checks squares next to them to see if they meet the condtions to merge, once html elements are merged they change color.

* Functions to check game state. Not sure if I have to hard code game state into 
  functions above or create a callback function

* Restart game button

* Game over logic that check game state and number of tiles. 

### MVP Goals and Schedule

  * Tiles move all 4 directions and merge when moved into each other

  * A Tile auto generates after every move

  * New game button resets game with just 2 randomly placed tiles

  * Game directions/rules at bottom


### Post-MVP

  * Add score and high score to game after every merge

  * Add neon or Cyberpunk styling to game board

  * Add soundtrack to game/sound effects to clicks in-game

  * Tiles change color after every merge.

