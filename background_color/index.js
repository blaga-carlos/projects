function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
  }

const colors = ["Green", "Red", "Blue","Yellow","Pink","White","Orange"];

document.getElementById("btn").onclick = function() {

    const randomNumber = getRandomNumber();
    document.querySelector("main").style.backgroundColor = colors[randomNumber];
    document.querySelector(".container").style.backgroundColor = colors[randomNumber];
    document.getElementById("btn").style.backgroundColor = colors[randomNumber];
    document.querySelector(".back-color").innerHTML = colors[randomNumber];
 }

