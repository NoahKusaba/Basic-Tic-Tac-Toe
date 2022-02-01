const cellArray = document.querySelectorAll(".cell");
const grid = document.querySelector(".grid-box");
const message= document.querySelector(".end-message");
const showEnd = document.querySelector(".game-over");

let x="x"
let circle="circle"
var turn = true; 
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
//Things to do: 
// add class for circle/x when click
// change class on board after click
// determine win
// determine draw
cellArray.forEach( cell => {
    cell.addEventListener("click",clickFunction,{once:true})
})


function clickFunction(e){
    let cell = e.target; 
    let currentTurn = turn ? x : circle ;
    addMark(cell,currentTurn);
if(checkWin(currentTurn)){
    winMessage(true,currentTurn)
}
else if( checkDraw()) {
winMessage(false,currentTurn);
}

else{
    grid.classList.remove(currentTurn);
    turn=!turn;
    currentTurn = turn ? x : circle ;
    grid.classList.add(currentTurn)
}
}


function checkDraw(){
   return [...cellArray].every(index =>{
        return index.classList.contains(x) || index.classList.contains(circle)
    })
}

function checkWin(currentTurn){
return win.some( conditions => {
    return conditions.every(index => {
     return  cellArray[index].classList.contains(currentTurn) 
    }) 
})
}

function resetGame(){
    showEnd.classList.remove("show")
    cellArray.forEach(index =>{
        index.classList.remove(x);
        index.classList.remove(circle);
    })
    grid.classList.remove(x)
    grid.classList.remove(circle)
    grid.classList.add(x)
    cellArray.forEach( cell => {
        cell.addEventListener("click",clickFunction,{once:true})
    })
}

function winMessage(win,currentTurn){
    showEnd.classList.add("show")
    if(win){
        message.innerHTML=`${currentTurn} Wins!`;
    }
    else{
        message.innerHTML="Draw, Play Better";
    }
}

function addMark(cell,currentTurn){
    cell.classList.add(currentTurn);
}

