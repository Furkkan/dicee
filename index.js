//İMG2

var randomNumber1 = Math.random();

randomNumber1 = Math.floor(randomNumber1*6)+1;

var randomImageNumber = "dice"+ randomNumber1 + ".png";

var randomImageDice = "images/" + randomImageNumber;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageDice);

//İMG2

var randomNumber2 = Math.random();

randomNumber2 = Math.floor(randomNumber2*6)+1;

var randomImageNumber1 = "dice"+ randomNumber2 + ".png";

var randomImageDice1 = "images/" + randomImageNumber1;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageDice1);

if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Wins!!";

} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins !!";
}
else{
  document.querySelector("h1").innerHTML = "DRAW !!!!";
}
