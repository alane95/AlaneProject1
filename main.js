// console.log("yellow")
const startButton = document.getElementById('start-button');
const myCircle = document.querySelectorAll('.gameboard');

// create form button
function myButton() {
    let myText = document.getElementById("myText");
    let myMessage = document.getElementById("message");
    myMessage.innerHTML = "Hey " + myText.value
}
//  working on the board
myCircle.onclick = function(){
    
}

function buttonStart(){

}
// event listener
startButton.addEventListener('click',buttonStart);
