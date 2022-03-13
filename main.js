
const startButton = document.getElementById('start-button');
const myCircle = document.querySelectorAll('#gameBoard div');
const playerTurn = document.getElementById('player-turn')
const myResult = document.getElementById("my-result")
let myText = document.getElementById("myText");
let myMessage = document.getElementById("message");
// marking the circle choice
// let turn = true
let playerRun = 1;
// let computerturn = randonMove;
let nextMove = 0;
playerTurn.innerHTML = myText.value
// myResult.innerHTML = myText.value
// console.log(myCircle[0].classList.contains('first-player'));
//  working on the board
const winningCombos = [
    [0, 1, 2, 3], [4, 5, 6, 7], [8, 9, 10, 11], [12, 13, 14, 15],
    [0, 4, 8, 12], [1, 5, 9, 13], [2, 6, 10, 14], [3, 7, 11, 15],
    [0, 5, 10, 15], [3, 6, 9, 12]
]
// console.log(winningCombos[5][3])
function checkForWin() {
    for (let i = 0; i < winningCombos.length; i++) {
        let cirOne = myCircle[winningCombos[i][0]]
        let cirTwo = myCircle[winningCombos[i][1]]
        let cirThree = myCircle[winningCombos[i][2]]
        let cirFour = myCircle[winningCombos[i][3]]
        if (
            cirOne.classList.contains('first-player') &&
            cirTwo.classList.contains('first-player') &&
            cirThree.classList.contains('first-player') &&
            cirFour.classList.contains('first-player')
        ) {
            // console.log('first-player wins')
            myResult.innerText = (myText.value + " win")
        }
        else if (cirOne.classList.contains('second-player') &&
            cirTwo.classList.contains('second-player') &&
            cirThree.classList.contains('second-player') &&
            cirFour.classList.contains('second-player')) {
            console.log('second-player wins')
        }
        else{

        }
    }
}

    for (let i = 0; i < myCircle.length; i++) {
        myCircle[i].onclick = function () {
            console.log(myCircle[i])
            if (myCircle[i + 4].className.includes('boardX') &&! myCircle[i].className.includes('boardX')) {
                if (playerRun == 1) {
                    myCircle[i].classList.add('boardX')
                    myCircle[i].classList.add('first-player')
                    playerRun = 2
                    playerTurn.innerHTML = (myText.value + " turn");
                }
                else {
                    myCircle[i].classList.add('boardX')
                    myCircle[i].classList.add('second-player')
                    playerRun = 1
                    playerTurn.innerHTML = "computer turn";
                }
            }
            checkForWin()
        }
    }
    
function myButton() {
    myMessage.innerHTML = "Hey " + myText.value
}
    // randon choice for computer
    // function randonMove(){
    //     let randomIndex = Math.floor(Math.random()*winningCombos.length);
    //     return winningCombos[randomIndex];
    // }
    
//     function computerMove() {
//         let blanks = [];
//         for (let i = 1; i <= 15; i++) {
//           let place = document.getElementById("cir"+i).innerText
//           if(place == "") blanks.push([i]);
//         }
//         if (blanks.length > 0) {
//           const r = Math.floor((Math.random() * blanks.length));
//           nextMove(document.getElementById("cir"+blanks[r]));
//         } 
//       }
// computerMove()
// function myFunction() {
//     let popup = document.getElementById("on-click");
//     popup.classList.toggle("show");
//   }
// function nextMove(square) {
// 	if (document.winner != null) {
// 		setMessage(playerTurn + " has already won.");
// 	} else if(square.innerText == '') {
// 	  square.innerText = playerTurn;
// 	  swapTurn();		
// 	} else {
// 		setMessage("No cheating, choose another square.");
// 	}
// }
// function swapTurn() {
// 	if(checkForWin(playerRun)) {
// 		setMessage(playerTurn + " has won!");
// 		document.winner = playerRun; 
	
// 	} else if(playerTurn == player){
// 		playerRun= computerMove;
// 		setMessage("Player " + playerTurn + ", it's your turn.");
// 		cpuMove();
// 	} else {
// 		playerRun = player;
// 		setMessage("Player " + playerTurn + ", it's your turn.");
// 	}
// }

// create form button
