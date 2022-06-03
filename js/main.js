


/*----- constants -----*/

const PLAYERS = {
  "1" : "X",
  "-1" : "O",
};




/*----- app's state (variables) -----*/

let boardVals, user, lastStarter;

/*----- cached element references -----*/


const gameBoardEl = document.getElementById("game-board")

const playerBoardEl = document.getElementById('player-board')

const gridsEl = document.querySelectorAll("td")

const restartEl = document.getElementById("restart")

/*----- event listeners -----*/

gameBoardEl.addEventListener("click", takeTurn)

restartEl.addEventListener("click", restartGame)

/*----- functions -----*/

function initGame() {

  boardVals = ["", "", "", "", "", "", "", "", ""];

  user = 1;

  lastStarter = user

  render();

}

function render() {
  gridsEl.forEach(function ( grid, idx) {

    if(boardVals[idx]) {
        grid.innerText = PLAYERS[boardVals[idx]];

    } else {
        grid.innerText = ''

    }
    playerCount();
  });
}

function takeTurn(evt) {
  if (boardVals[evt.target.id] ===  "") {

    boardVals[evt.target.id] = user;

    user *= -1;

    render()
  } 
}


function playerCount() {
  if(user === 1) {
    playerBoardEl.innerHTML = 'PLAYER ONE "X" GO'
  }

  else {
    playerBoardEl.innerHTML = 'PLAYER TWO "O" GO'
  }
}




function restartGame() {

  boardVals = ["", "", "", "", "", "", "", "", ""];

  lastStarter = lastStarter * -1
  
  user = lastStarter

  render();

}



initGame();





