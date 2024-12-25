var score = document.getElementById("score");
var time1 = document.getElementById("time");
var gameArea = document.getElementById("gameArea");
var start = document.getElementById("startGame");


var timer = 30;
var score1 = 0;
var gameInterval;
var timerInterval;


function createBallon() {
    var ballon = document.createElement("div");
    ballon.classList.add("balloon");

    var position = Math.random() * (gameArea.offsetWidth - 50);
    ballon.style.left = position + "px";
    ballon.addEventListener("click", () => {
        score1++;
        score.innerHTML = score1;
        ballon.remove();
    });
    gameArea.appendChild(ballon)


    // dec score
    var animationDuration = 5000;
    setTimeout(() => {
        if (gameArea.contains(ballon)) {
            ballon.remove();
            if (timer > 0) {

                score1--;
                score.innerHTML=score1;
            }
        }
    }, animationDuration)
}

function startGame() {
    start.disabled = true;
    resetGame()
    gameInterval = setInterval(createBallon, 800)


    timerInterval = setInterval(() => {
        timer--;
        time1.innerHTML = timer;

        if (timer <= 0) {
            // end game
            endGame();
        }
    }, 1000)
}


function endGame() {
    clearInterval(gameInterval);
    clearInterval(timerInterval);
    alert(`Game over your score ${score1}`);
    start.disabled = false;

}

function resetGame() {
    timer = 30;
    score1 = 0;

    time1.innerHTML = timer;
    score.innerHTML = score1;

    while (gameArea.firstChild) {
        gameArea.removeChild(gameArea.firstChild)
    }


}


start.addEventListener('click', startGame)