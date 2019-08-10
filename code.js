//Create board of boxes 16 x 16 (256 boxes)
const board = document.querySelector('#board');
for (i = 0; i < 256; i++) {
  let div = document.createElement('div');
  div.classList.add('boardCell');
  //add style to each box
  div.setAttribute('style', 'background-color: #c1dacb;; border:1px solid #505050');
  board.appendChild(div);};


//Get random color 
function getRandomColor() {
  //r, g, b are strings with random number between 0 and 255
  let r = (Math.floor(Math.random() * 256)).toString();
  let g = (Math.floor(Math.random() * 256)).toString();
  let b = (Math.floor(Math.random() * 256)).toString();
  //return rgb(0-255, 0-255, 0-255)
  return ('rgb(' + r + ', ' + g + ', ' + b + ')');
 }

 //sets event color to #1cbd5b;
function colorFunc() {
  
  this.style.opacity = 1;
  this.style.backgroundColor = '#1cbd5b';
};
 //sets event color to a random one;
function randomColor () {
  
    this.style.opacity = 1;
    this.style.backgroundColor = getRandomColor();
}


//Change boxes color to green on mouseover
let cellsArray = document.getElementsByClassName('boardCell');
Array.from(cellsArray).forEach((cell) => {
  cell.addEventListener('mouseover', colorFunc);
  
});

//Create reset button
const resetButton = document.getElementById('resetButton');
//make every box default color again to reset 
resetButton.addEventListener("click", resetFunc) ; 

function resetFunc() {
  let x = document.querySelectorAll('.boardCell');
  for (let i = 0; i < x.length; i++) {
    x[i].style.cssText = 'background-color: #c1dacb;; border:1px solid #505050';
  };
};


//create a button which changes boxes color to a random color
const color = document.getElementById('color');

color.addEventListener("click", function(){
  //boxes
  cellsArray = document.getElementsByClassName('boardCell');
  //array form boxes. Each box
  resetFunc();
  Array.from(cellsArray).forEach((cell) => {
    cell.style.border = "1px solid #505050";
    cell.removeEventListener('mouseover', opacityFunc);
    cell.addEventListener('mouseover', randomColor);
  });
});

//create a button which changes box color to a one color
const oneColor = document.getElementById('oneColor');

oneColor.addEventListener("click", function(){
  //boxes
  cellsArray = document.getElementsByClassName('boardCell');
  resetFunc();
  //array form boxes. Each box
  Array.from(cellsArray).forEach((cell) => {
    
    cell.removeEventListener('mouseover', randomColor);
    cell.removeEventListener('mouseover', opacityFunc);
    cell.addEventListener('mouseover', colorFunc);
  });
});

//create function which asks user to create his board of cells
function uBoard() {
    
    //Ask user for input a board size
    let userChoice = window.prompt("Enter desireable board size please: (a number less than or equal to 100) ");
    //make more rows and columns
    if (userChoice === null) return;
    if (userChoice > 100) return alert('Pick a number less than or equal to 100 please.'), uBoard();
    if (isNaN(userChoice)) return alert('Board size is measured in numbers, sweetheart. Please, type one next time.'), uBoard();

    while (board.firstChild) {
      board.removeChild(board.firstChild);
    };
    board.style = 'grid-template-columns: repeat(' + Math.floor(userChoice) + ', minmax(1px, 1000px)); grid-template-rows: repeat(' + Math.floor(userChoice) + ', minmax(1px, 1000px));';

    //make a board
    for (i = 0; i < (Math.floor(userChoice**2)) ; i++) {
      let div = document.createElement('div');
      div.classList.add('boardCell');
      div.setAttribute('style', 'background-color: #c1dacb;; border:1px solid #505050');
      board.appendChild(div);};
    //color board with mouseover
    cellsArray = document.getElementsByClassName('boardCell');
    Array.from(cellsArray).forEach((cell) => {
      cell.addEventListener('mouseover', colorFunc);
    });
};

//make button create a user board 
const userBoard = document.getElementById('userBoard');
userBoard.addEventListener("click", uBoard);

//make target box with opacity +10% colorization
function opacityFunc() {
  this.style.backgroundColor = '#1cbd5b';
  let opa = this.style.opacity;
  if (opa < 1) {
      opa = parseFloat(opa) + 0.1;
      this.style.opacity = opa;
    }
  };


//make button create a opacity color boxes
const opacityColor = document.getElementById('opacityColor');

opacityColor.addEventListener("click", function(){
  //boxes
  cellsArray = document.getElementsByClassName('boardCell');
  //array form boxes. Each box
  Array.from(cellsArray).forEach((cell) => {

    cell.style.opacity = 0;
    cell.removeEventListener('mouseover', randomColor)
    cell.removeEventListener('mouseover', colorFunc)
    cell.addEventListener('mouseover', opacityFunc);
  });
});

