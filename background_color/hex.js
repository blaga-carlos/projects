  function getRandomColor() {

    var letters = '0123456789ABCDEF';

    var color = '#';

    for (var i = 0; i < 6; i++) {

        color += letters[Math.floor(Math.random() * 16)];

    }

    return color;

}  

document.getElementById("btn").onclick = function() {

    const color = getRandomColor();
    document.querySelector("main").style.backgroundColor = color;
    document.querySelector(".container").style.backgroundColor = color;
    document.getElementById("btn").style.backgroundColor = color;
    document.querySelector(".back-color").innerHTML = color;
 }
