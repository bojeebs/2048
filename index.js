// let btn = document.getElementById("newBtn")


// window.onload = function() {
//   init();
//   };

// let board = [
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0],
//   [0, 0, 0, 0]
// ]
// function init () {
//   let boardEl = document.getElementById("board");
//   if (!boardEl) return;
//   for (let r = 0; r < board.length; r++) {
//     for (let c = 0; c < board[r].length; c++) {
//       let square = document.createElement("div")
//       square.setAttribute('id', `square-${r}-${c}`)
//       square.textContent = board[r][c]
//       setSquareClass(square, r, c)
//       boardEl.append(square)
//     }
//   }
// addSquare()
// addSquare()
// //know when to walk away and just be lazy

// }
// function setSquareClass(square, r, c) {
//   square.className = '';
//   square.classList.remove(...square.classList);
//   square.classList.add('square');
//   if (board[r][c] > 0) {
//     square.textContent = board[r][c];
//    } else {
//     square.textContent = ""
//   }
// }
// function addSquare() {
//   let blankSquare = [];
//     for (let r = 0; r < board.length; r++) {
//       for (let c = 0; c < board[r].length; c++) {
//         if (board[r][c] === 0) {
//           blankSquare.push([r, c]);
//         }
//       }           
//     }
//     if (blankSquare.length > 0) {
//       let randomNum = Math.floor(Math.random() * blankSquare.length);
//       let randomSquare = blankSquare[randomNum];
//       let r = randomSquare[0];
//       let c = randomSquare[1];
//       board[r][c] = 2;
//       let square = document.getElementById(`square-${r}-${c}`)
//       square.textContent = board[r][c];
      
//     }
//   }
//   document.onkeydown = function(event) {
//     switch (event.keyCode) {
//        case 37:
//           moveLeft()
//           addSquare()
//        break;
//        case 38:
//           moveUp()
//           addSquare()
//        break;
//        case 39:
//           moveRight()
//           addSquare()
//        break;
//        case 40:
//           moveDown()
//           addSquare()
//        break;
  
//     }
//   }
//   function moveLeft () {
//     for (let r = 0; r < board.length; r++) {
//       let newBoard = []
//       for (let c = 0; c < board[r].length; c++) {
//         let square = board[r][c];    
//         if (square !== 0) {
//           newBoard.push(square);
          
        
//       } if (board[r][c] === board[r][c-1] && board[r][c] !== 0)  {
//         newBoard[c] *= 2
//         // const mergedSquare = newBoard[c] *= 2;
//         // while (newBoard[c-1] === 0) {
//         //   newBoard[c-1] = mergedSquare
//         // }
//         newBoard[c-1] = 0;
//         }
//     }
//       while (newBoard.length < 4) {
//         newBoard.push(0);
//       }
//       board[r] = newBoard;
//       for (let c = 0; c < newBoard.length; c++) {
//         let square = document.getElementById(`square-${r}-${c}`)
//         if (newBoard[c] === 0) {
//           square.textContent = ""
//       } else {
//         square.classList.remove('hidden')
//         square.textContent = newBoard[c]
//       }
//      }
//     } 
//    }