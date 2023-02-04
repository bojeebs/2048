// Global Variables

// various variables for ids from HTML 
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
  addTile() 
  //addTile()
}


function addTile () {
  let blankSquare = []
  for (let row = 0; row < board.length; row++) {
      for (let col = 0; col < [row].length; col++) {
        if (board[row][col] === 0)
        blankSquare.push([row, col]) //<<<<<https://www.freecodecamp.org/news/javascript-2d-arrays/
        console.log(board[row][col]) //<<<<<<<not working
    }
  }
  if (blankSquare.length === 0) {
      return
  } else if(blankSquare.length === 16) {
      let randomArr = Math.floor(Math.random() * blankSquare.length)
      let randomSquare = blankSquare[randomArr]
      let row = randomSquare[0]
      let col = randomSquare[1]
      grid[row][col] = 2
      grid[row][col] = 2
    } else {
      let randomArr = Math.floor(Math.random() * blankSquare.length)
      let randomSquare = blankSquare[randomArr]
      let row = randomSquare[0]
      let col = randomSquare[1]
      grid[row][col] = 2
    }
  }   

   

//if statement = if board is empty add 2 random values else add one on player move DRY
//Code for blank squares here>
//



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
//     case "keyLeft":
//       move("left");
//       break;
//     case "keyRight":
//       move("right");
//       break;
//     case "keyUp":
//       move("up");
//       break;
//     case "keyDown":
//       move("down");
//       break;
//   }
// });







