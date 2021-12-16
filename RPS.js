//Setup
let valueCPU;

let signPlayer;
let signCPU;

let resultat;

let scorePlayer = 0;
let scoreCPU = 0;



//Config
function getCpu() { // getCpu return a random value for signCPU.
  valueCPU = Math.floor(Math.random() * 3 + 1);
  if (valueCPU == 1) {
    signCPU = "pierre";
    return signCPU;
  } else if (valueCPU == 2) {
    signCPU = "papier";
    return signCPU;
  } else {
    signCPU = "ciseau";
    return signCPU;
  }
}

function compare() { // Compare the player's input and the cpu's input, and return a resultat, then increase the score of the winner.
  if (
    (signPlayer == "pierre" && signCPU == "ciseau") ||
    (signPlayer == "papier" && signCPU == "pierre") ||
    (signPlayer == "ciseau" && signCPU == "papier")
  ) {
    resultat = "Vous avez gagné. Bravo !";
    scorePlayer++;
  } else if (signPlayer == signCPU) {
    resultat = "Egalité";
  } else {
    resultat = "Vous avez perdu. Looser !";
    scoreCPU++;
  }
}

function displayScore() { 
  document.getElementById("resultat").innerHTML = resultat;
  document.getElementById("score").innerHTML =
    "Votre score: " + scorePlayer + " | Score du CPU: " + scoreCPU;
}

function reset() { // when the score of one of the players reaches 2, display the restart button and prevent clicking on actions.
 if(scorePlayer == 2 || scoreCPU == 2){
    document.getElementById("reset").style.display = "inline";
     
    document.querySelectorAll('.container div').forEach(div =>
      {
        div.removeAttribute("onclick");
      })
    
 } 
}

function restart() { // this function reset the scores, remove the resultat and the restart button.
    scorePlayer = 0;
    scoreCPU = 0;
    document.getElementById("reset").style.display = "none";
    displayScore();
    document.getElementById("resultat").style.display = "none";
    document.querySelectorAll('.container div').forEach(div =>
      {
        div.setAttribute("onclick", "restart()");
      })

}

//Play
let pierre = function () {
  getCpu();
  signPlayer = "pierre";
  compare();

  document.getElementById(
    "yourChoice"
  ).innerHTML = `Vous avez choisi pierre et votre adversaire à choisit ${signCPU}`;
  displayScore();
  reset();
};

let papier = function () {
  getCpu();
  signPlayer = "papier";
  compare();
  document.getElementById(
    "yourChoice"
  ).innerHTML = `Vous avez choisi papier et votre adversaire à choisit ${signCPU}`;
  displayScore();
  reset();
};

let ciseau = function () {
  getCpu();
  signPlayer = "ciseau";
  compare();
  document.getElementById(
    "yourChoice"
  ).innerHTML = `Vous avez choisi ciseau et votre adversaire à choisit ${signCPU}`;
  displayScore();
  reset();
  
};
