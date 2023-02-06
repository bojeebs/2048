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
  [0, 0, 0, 0]
]



//Functions
 //<<<got this idea from Kirstina to id each square to help with game state https://stackoverflow.com/questions/9422974/createelement-with-id
// this function loops through the array creates a div sets the id to = the row and column from the loop and then display that via textcontent.

//Things I learned about init() and setSquareClass()...calling the callback function and textcontent before the append. console log after everystep to isolate the issue.
//big problem that took forever was that i need to actually add class from css to new squares BEFORE they are appended so the numbers are styled
//and actually show up in the html. 0's appeared on the board so at the tail end of setSquaresClass () theres an if statement to set the value of the textcontent
//to empty string if value is 0 which basically hides the zeros so only 2+ shows on the board after we invoke our addSquare().
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
addSquare()
addSquare()
//know when to walk away and just be lazy

}

// i have the function of setSquareClass that callsback and sets the class for all newly created squares and removes 0's from displaying.
//Will add color classes to this later if theres enough time 
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

//This function adds a square with value of 2 randomly. It does this by looping through the array and storing all rows and columns with a 0 value in 
//the blankSquare array so only cells with value will be considered for selection. Then a simple if statment does random math * the current length
// of the blankSquare array and stores it in a variable. the r and c values are then extracted from the selected random square and square to a value of 2. 
function addSquare() {
  let blankSquare = [];
    for (let r = 0; r < board.length; r++) {
      for (let c = 0; c < board[r].length; c++) {
        if (board[r][c] === 0) {
          blankSquare.push([r, c]);
        }
      }
    }
    if (blankSquare.length > 0) {
      let randomNum = Math.floor(Math.random() * blankSquare.length);
      let randomSquare = blankSquare[randomNum];
      let r = randomSquare[0];
      let c = randomSquare[1];
      board[r][c] = 2;
      let square = document.getElementById(`square-${r}-${c}`)
      square.textContent = board[r][c];
      console.log('test')
    }
  }
  
// else if(blankSquare.length === 0) {
//   console.log("game is over")

  //else if for adding 2 random squares if all tiles open or stopping if no tiles open or adding only 1 tile
//potenially using switch statements for keyupsaddevent listener 
//https://www.freecodecamp.org/news/javascript-switch-case-js-switch-statement-example/


//Thanks not instrutor Jeremy

document.onkeydown = function(event) {
  switch (event.keyCode) {
     case 37:
        moveLeft()
     break;
     case 38:
        alert('Up key');
     break;
     case 39:
        alert('Right key');
     break;
     case 40:
        alert('Down key');
     break;

  }
}

//https://stackoverflow.com/questions/34950243/how-to-loop-through-an-array-and-get-how-many-zeros-there-are

//run function and animate/merge 
//run check if space is empty or same numerical value either moves or merges
//based upon what ive looked up your effectively creating a new array and updating the new array to handle the filter zero issue.
//so creating several variables for handling the new array and using forEach to iterate over those. 

//basically copying whats up above on line 65. 
function moveLeft () {
  for (let r = 0; r < board.length; r++) {
    let newBoard = []
    for (let c = 0; c < board[r].length; c++) {
      let square = board[r][c];
      if (square !== 0) {
        newBoard.push(square);
    }
  }
   for (let r = 0; r < board.length; r++) {
    if (board[r] === board[c-1]) {
      newBoard[r] *= 2
      //https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice} 
      newBoard.splice(r + 1, 1)

      }
    }
   while (newBoard.length < row.length) {
      newRow.push(0);
    }
    board[i] = newBoard;
  };
}
            
   
  //logic here for collasping remaining tiles <<<https://byjusexamprep.com/difference-between-for-loop-and-while-loop-i
  //because we dont know the value maybe a while loop


    
    
  
  //merge logic
  // for (let square = 0; square < board.length; square++) {
  //   if (board[row] === board[col-1]) {
  //     board[row][col] *= 2
  //     board[row][col-1] = 0
  //   }

  // }
  
  
  //logic here for collasping remaining tiles <<<https://byjusexamprep.com/difference-between-for-loop-and-while-loop-i
  //because we dont know the value maybe a while loop
  



// document.addEventListener("keyup", function(event) {
//   switch (event.move) {
//     case "keyLeft":
//       moveLeft();
//       console.log('left')
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








