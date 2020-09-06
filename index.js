function diceGame() {

  var randomNumber1 = Math.floor((Math.random() * 6) + 1);
  var randomNumber2 = Math.floor((Math.random() * 6) + 1);

  document.querySelectorAll("img")[0].setAttribute("src", "images/dice" + randomNumber1 + ".png");
  document.querySelectorAll("img")[1].setAttribute("src", "images/dice" + randomNumber2 + ".png");

  if (randomNumber1 > randomNumber2)
    document.querySelector("h1").textContent = name1+" Wins";
  else if (randomNumber1 < randomNumber2)
    document.querySelector("h1").textContent = name2+" Wins";
  else
    document.querySelector("h1").textContent = "Draw";

} // ends diceGame()

var name1=prompt("Enter player one name");
var name2=prompt("Enter player two name");

document.querySelectorAll("p")[0].textContent=name1;
document.querySelectorAll("p")[1].textContent=name2;

diceGame();
