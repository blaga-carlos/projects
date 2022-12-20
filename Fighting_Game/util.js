function rectangularCollision({rectangle1, rectangle2}) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.width >= rectangle2.position.x && 
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width && 
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y && 
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height
        
    )
}

function determineWinner({player, enemy, timerId}){
    clearTimeout(timerId);
    document.querySelector("#Tie").style.display = "flex";
    if (player.health == enemy.health) {
        document.querySelector("#Tie").innerHTML = "Tie";
    } else if (player.health > enemy.health) {
        document.querySelector("#Tie").innerHTML = "Player 1 Wins";
    } else if (player.health < enemy.health) {
        document.querySelector("#Tie").innerHTML = "Player 2 Wins";
    }
}

let timer = 60;
let timerId;
function decreaseTimer() {
    if (timer > 0) {
        timer--;
        document.querySelector("#timer").innerHTML = timer;
        timerId = setTimeout(decreaseTimer, 1000);
    }
    
    if (timer == 0){  
        determineWinner({player, enemy, timerId});
    }

}