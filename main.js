
const startButton = document.getElementById('start-button');
const myCircle = document.querySelectorAll('.gameBoard div');
const playerTurn = document.getElementById('player-turn')

let myText = document.getElementById("myText");
let myMessage = document.getElementById("message");
// marking the circle choice
// let turn = true
let playerRun = 1;
let computerturn = 0;
playerTurn.innerHTML = myText.value
// console.log(myCircle);
//  working on the board

for (let i = 0; i < myCircle.length; i++) {
    myCircle[i].onclick = function () {
        console.log("hi")
        if (myCircle[i + 7].className.includes('boardX')) {
            if (playerRun == 1) {
                myCircle[i].classList.add('boardX')
                myCircle[i].classList.add('first-player')
                playerRun = 2
                playerTurn.innerHTML = myText.value + " turn " + " !";
console.log(myCircle[i])
console.log(myCircle[i+1])
                if (myCircle[i].classList.contains('first-player')&& myCircle[i - 1].classList.contains('first-player') && myCircle[i - 2].classList.contains('first-player') && myCircle[i - 3].classList.contains('first-player')){
                    console.log('player one wins')
                }
            











            }
            else {
                myCircle[i].classList.add('boardX')
                myCircle[i].classList.add('second-player')
                playerRun = 1
                playerTurn.innerHTML = "second player turn";
            }
        }
    }
}


function buttonStart() {

}
// event listener
// myCircle.addEventListener('click', pickCircle);

startButton.addEventListener('click', buttonStart);
// create form button

function myButton() {
    myMessage.innerHTML = "Hey " + myText.value
}