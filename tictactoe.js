var currentPlayer = "X";
var nextPlayer = "O";

var playerXSelections = new Array();
var playerOSelections = new Array();
const winningCombinations = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
    [1, 4, 7],
    [2, 5, 8],
    [3, 6, 9],
    [1, 5, 9],
    [3, 5, 7]
  ]
  handleClick = function(event) {
    var cell = event.target;
  
    cell.innerHTML = currentPlayer;
  
    if(currentPlayer === "X" ) {
      playerSelections = playerXSelections;
      nextPlayer = "O";
    } else {
      playerSelections = playerOSelections;
      nextPlayer = "X";
    }
  
    playerSelections.push(parseInt(cell.id));

    if(checkWinner(playerSelections)) {
      alert("Player " + currentPlayer + " wins!")
      resetGame();
    }
  
    if(checkDraw()) {
      alert("Draw!");
      resetGame();
    }
    // Swap players
    currentPlayer = nextPlayer;
  }
  
  
  var cells = document.querySelectorAll("td");
  
  for(var i = 0; i < cells.length; i++) {
  cells[i].addEventListener('click', handleClick)
  }
  function checkWinner() {
    for(var i = 0; i < winningCombinations.length; i++) {
      var matches = 0
      console.log(winningCombinations[i] + " array: "+ i ) 
      for(var j = 0; j < winningCombinations[i].length; j++){
        console.log(winningCombinations[i][j] + " array item: "+ i + " Array item: " + j )
        if (playerSelections.includes(winningCombinations[i][j])){
          matches++

        }
       // go to the next combination
    if (matches == 3) {
      return true

    }
      }
    }
    // Check if player has all values of each combination
    // then there were no matches and player did not win
    return false
  }
  function resetGame() {
    playerXSelections = new Array();
    playerOSelections = new Array();
    for(var i = 0; i < cells.length; i++) {
      cells[i].innerHTML = ""
    }
  }
  function checkDraw() {
    return playerOSelections.length + playerXSelections.length >= cells.length
  } 
