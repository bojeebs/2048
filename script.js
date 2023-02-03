// Global Variables

// various variables for ids from HTML 
//If i use a 2d array I think i need to set a row and col variable
//let square = document.querySelector('.squares')
//let newGame = document.querySelector('#newBtn')


let board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0]
]

//Functions

function init () {
  board = [
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0]
  ]
  //addTile() invoking function twice here to add 2 tiles at start to game
  //addTile()
}
//Do i need to declare row and col variables outside of this scope
//In the for loops i looked up when going through a matrix there were declaring variables other than i. Why?
function addTile () {
  let blankSquare = []
  for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < board.length; col++) {
        if (board[row][col] === 0)
        blankSquare.push([row, col]) //<<<<<https://www.freecodecamp.org/news/javascript-2d-arrays/
        console.log(board[row][col]) //<<<<<<<not working
    }
  }
}
//Code for blank squares here>



//Math.random function or just include it here in this function







//Functions
// Init 
// addtile function which i can use as callback for init function and call once after 
// createBoard maybe create html element and push it to Array or set variable to array
// directional move function that checks the rows squares with logic, squares will square 
//event listener for keyup arrows
// game over function
// restart function




//potenially using switch statements for keyupsaddevent listener 
//https://www.freecodecamp.org/news/javascript-switch-case-js-switch-statement-example/

// document.addEventListener("keyup", function(event) {
//   switch (?????) {
//     case "ArrowLeft":
//       move("left");
//       break;
//     case "ArrowRight":
//       move("right");
//       break;
//     case "ArrowUp":
//       move("up");
//       break;
//     case "ArrowDown":
//       move("down");
//       break;
//   }
// });







