// Global Variables

// various variables for ids from HTML 
//let square = document.querySelector('.squares')
//let newGame = document.querySelector('#newBtn')



window.onload = function() {
  init();
  };

let board = [
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 0, 0],
  [0, 0, 1, 0]
]



//Functions
 //<<<got this idea from Kirstina to id each square to help with game state https://stackoverflow.com/questions/9422974/createelement-with-id
// this function loops through the array creates a div sets the id to = the row and column from the loop and then display that via textcontent.


 function init () {
  let boardEl = document.getElementById("board");
  if (!boardEl) return;
  for (let r = 0; r < board.length; r++) {
    for (let c = 0; c < board[r].length; c++) {
      let square = document.createElement("div")
      square.setAttribute('id', `square-${r}-${c}`)
      square.textContent = board[r][c]
      setSquareClass(square, r, c)
      boardEl.append(square)
    }
  }
}

// i have the function of setSquareClass that callsback and sets the class for all newly created squares and removes 0's from displaying.
  function setSquareClass(square, r, c) {
    square.className = '';
    square.classList.remove(...square.classList);
    square.classList.add('square');
    if (board[r][c] > 0) {
      square.textContent = board[r][c];
    } else {
      square.textContent = ""
    }
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
}
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

// document.addEventListener("keyup", function(event) {
//   switch (event.move) {
//     case "keyLeft":
//       moveLeft();
//       break;
//     case "keyRight":
//       moveRight();
//       break;
//     case "keyUp":
//       moveUp();
//       break;
//     case "keyDown":
//       moveDown()
//       break;
//   }
// });

//https://stackoverflow.com/questions/34950243/how-to-loop-through-an-array-and-get-how-many-zeros-there-are
// function moveLeft ()
// //skips over zeros
//   for (let rowsquare = 0; row < 4; rowsquare++) {
//     if (rowsquare === 0) {

//     }
    
//   }
//   //merge logic
//   for (let square = 0; square < board.length; square++) {
//     if (board[row] === board[col-1]) {
//       board[row][col] *= 2
//       board[row][col-1] = 0
//     }

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














