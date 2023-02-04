// Global Variables

// various variables for ids from HTML 
//let square = document.querySelector('.squares')
//let newGame = document.querySelector('#newBtn')
let board = [
  [0, 0, 0, 1],
  [0, 1, 1, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 1]
]


//Functions
 //<<<got this idea from Kirstina to id each square to help with game state https://stackoverflow.com/questions/9422974/createelement-with-id

 // function init () {
//   for (let row = 0; row < board.length; row++) {
//     for (let col = 0; col < [row].length; col++) {
//       let square = document.createElement('div')
//       square.setAttribute('id', 'square-${row}-${col}')
//       document.getElementById('board').appendChild(square)
//       console.log(square)
//     }
//   }
// }













// function addTile () {
//   let blankSquare = []
//   for (let row = 0; row < board.length; row++) {
//       for (let col = 0; col < [row].length; col++) {
//         if (board[row][col] === 0)
//         blankSquare.push([row, col]) //<<<<<https://www.freecodecamp.org/news/javascript-2d-arrays/
//         console.log(board[row][col]) //<<<<<<<not working
//     }
//   }
//else if for adding 2 random squares if all tiles open or stopping if no tiles open or adding only 1 tile

//   if (blankSquare.length === 0) {
//       return
//   } else if(blankSquare.length === 16) {
//       let randomArr = Math.floor(Math.random() * blankSquare.length)
//       let randomSquare = blankSquare[randomArr]
//       let row = randomSquare[0]                                
//       let col = randomSquare[1]
//       grid[row][col] = 2
//       grid[row][col] = 2
//     } else {
//       let randomArr = Math.floor(Math.random() * blankSquare.length)
//       let randomSquare = blankSquare[randomArr]
//       let row = randomSquare[0]
//       let col = randomSquare[1]
//       grid[row][col] = 2
//     }
//   }   

//potenially using switch statements for keyupsaddevent listener 
//https://www.freecodecamp.org/news/javascript-switch-case-js-switch-statement-example/


//Thanks not instrutor Jeremy
document.addEventListener("keyup", function(event) {
  switch (event.move) {
    case "keyLeft":
      moveLeft();
      break;
    case "keyRight":
      moveRight();
      break;
    case "keyUp":
      moveUp();
      break;
    case "keyDown":
      moveDown()
      break;
  }
});
//https://stackoverflow.com/questions/34950243/how-to-loop-through-an-array-and-get-how-many-zeros-there-are
// function moveLeft ()
// //skips over zeros
//   for (let rowsquare = 0; row < 4; rowsquare++) {
//     if (rowsquare === 0)
//     goes to next empty square
//   }
//   //merge logic
//   for (let square = 0; square < board.length; square++) {
//     if (board[row] === board[row-1] 
//       board[row] *= 2
//       board[row or col? - 1] = 0
//   }
  //logic here for collasping remaining tiles <<<https://byjusexamprep.com/difference-between-for-loop-and-while-loop-i
  //because we dont know the value maybe a while loop
  











//Functions
// Init √
// addtile function which i can use as callback for init function and call once after √
// directional move function that checks the rows squares with logic, squares will square 
//event listener for keyup arrows
// game over function
// restart function














