var randomNumber1 = Math.floor(Math.random())*6 +1;//it will generate random number till 6

var randomDiceImage = "dice" + randomNumber1 +".png";

var randomIMageSource = "image/" + randomDiceImage;

var image1 = document.querySelector("img")[0];

image1.setAttribute("src" , randomIMageSource);

var randomNumber2 = Math.floor(Math.random())*6+1;
var randomImageSource2 = "image/dice" + randomNumber2 +".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);

//if player wins 

if(randomNumber1>randomNumber2){
    document.querySelector("h1").textContent = "Player 1 wins!"

}
else if(randomNumber2>randomNumber1){
    document.querySelector("h1").textContent = "Player 2 wins!"
}
else{
    document.querySelector("h1").textContent = "It's a draw"
}