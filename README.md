# **2048**

### Description 
Math based game with moving blocks. Blocks that are the same when moved around 
the board will square with each other and merge. 1 tile will randomly appear after each move and players have the urgency to complete and merge numbers before the board is filled and the player loses. Game Link>>https://2048.ninja/



### How to Get Started
1. Design in Figma to nail down exact themes or colors. 
2. HTML structure is 4 flex rows with 16 squares roughly 100px's
3. Javascript over functions would look something like this:
  a. Init function for initalization of game.
  b. Squares will be put in Array and future functions will access and edit array
  c. Function for 2 tiles at random at game start
  d. Place one tile at random after every move. Can probably just create callback function ex. addtile()
  e. Hardest function or most complex will be move function that shifts html elements, merges squares and **, checks squares next to them to see if they meet the condtions to merge, once html elements are merged they change color.
  f. Functions to check game state. Not sure if I have to hard code game state into 
  functions above or create a callback function
  g. Restart game button
  h. Game over logic that check game state and number of tiles. 
  

