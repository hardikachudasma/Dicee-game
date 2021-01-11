
var nameOfPlayer1 = "Player 1";
var nameOfPlayer2 = "Player 2";

function enterYourName(){
 nameOfPlayer1 = prompt("Name of player1");
  nameOfPlayer2 = prompt("Name of player2");

  document.querySelectorAll("p")[0].innerHTML = nameOfPlayer1;
  document.querySelectorAll("p")[1].innerHTML = nameOfPlayer2;

}

function rollTheDice() {

  // first dice

  var randomNumber1 = Math.floor(Math.random() * 6) + 1;

  var diceImage1 = "images/dice" + randomNumber1 + ".png";

  document.querySelectorAll("img")[0].setAttribute("src", diceImage1);

  // second dice

  var randomNumber2 = Math.floor(Math.random() * 6) + 1;
  var diceImage2 = "images/dice" + randomNumber2 + ".png";
  document.querySelectorAll("img")[1].setAttribute("src", diceImage2);

  if (diceImage1 > diceImage2) {
    document.querySelector("h1").innerHTML = "🚩" + nameOfPlayer1 + " wins!";
  } else if (diceImage2 > diceImage1) {
    document.querySelector("h1").innerHTML = nameOfPlayer2 + " wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw";
  }

}


// ******************************************************************************************************************

//  second Method


/*var images = ["images/dice1.png", "images/dice2.png", "images/dice3.png", "images/dice4.png", "images/dice5.png", "images/dice6.png"];

// first dice

var randomNumber1 = Math.floor(Math.random() * images.length);

var firstImage = images[randomNumber1];

document.querySelector(".img1").setAttribute("src", firstImage);

// second dice

var randomNumber2 = Math.floor(Math.random() * 6);

var secondImage = images[randomNumber2];

document.querySelector(".img2").setAttribute("src" , secondImage);


if(firstImage > secondImage){
 document.querySelector("h1").textContent = "Player1 wins!";
}else if(secondImage > firstImage){
 document.querySelector("h1").textContent = "Player2 wins!";
}else{
 document.querySelector("h1").textContent = "Draw";
}*/
