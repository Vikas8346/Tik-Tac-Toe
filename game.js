let gameNum =10;
let userNum = prompt("Guess the game number:");

while (userNum != gameNum){
    userNum =prompt("you entered wrong number.Guess again:");
}
console.log("Congratulation,you entered the right number");




let boxes =document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;//playerX, playterO

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3 ,4, 5],
    [6, 7, 8],
];

const resetGame = () => {
    turnO =true;
    enableBoxes();
    msgContainer.classList.add("hide");
};

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box was click");
        if(turnO) { //playerO
        box.innerText ="O"; 
        turnO = false;
        } else { //playerX
         box.innerText = "X";
         turnO = true;
        }
        box.disabled = true;
        checkWinnr();
    });
});

const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
};

const enableBoxes =() =>{
    for (let box of boxes){
        box.disable = false;
        box.innerText ="";
    }
};
 const showWinner =(winner) =>{
    msg.innerText =`congratulations,winner is ${winner}`;
    msgContainer.classList.remove("hide");
 };
const checkWinnr =() => {
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        
        if (pos1Val !="" && pos2Val !=""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                console.log("winner",pos1Val);
                showWinner(pos1Val);
            }
        }
    }
};

newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);