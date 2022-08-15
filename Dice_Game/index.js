var randomNumber1 = Math.random();
randomNumber1 = randomNumber1 * 6;
randomNumber1 = Math.floor(randomNumber1) + 1;
randomNumber1;
var randomNumber2 = Math.random();
randomNumber2 = randomNumber2 * 6;
randomNumber2 = Math.floor(randomNumber2) + 1;
randomNumber2;
var winner="";
document.getElementsByClassName("img1")[0].setAttribute("src", "images/dice"+randomNumber1 +".png");
document.getElementsByClassName("img2")[0].setAttribute("src", "images/dice"+randomNumber2 +".png");
if(randomNumber1 > randomNumber2) {
  winner="Player 1 Wins";
}
else if (randomNumber2 > randomNumber1){
  winner="Player 2 Wins";
}
else{
  winner="Draw";
}

document.querySelector("h1").innerHTML =winner;
