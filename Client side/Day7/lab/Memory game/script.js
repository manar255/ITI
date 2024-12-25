let imgs = ['./Images/polar-bear.png', './Images/polar-bear (1).png', './Images/polar-bear (2).png', './Images/polar-bear (3).png', './Images/polar-bear (4).png', './Images/polar-bear (5).png', './Images/polar-bear (6).png', './Images/polar-bear (7).png']

let dimgs = [...imgs, ...imgs]

let Images = document.getElementById('images');
let timer = document.getElementById('timer');
let gameOver = document.getElementById('gameOver')
let win = document.getElementById('win')
let tryAgine = document.getElementById('tryAgine')
let playAgine = document.getElementById('playAgine')


let showenImg = null;
let success = 0;
let m = 1, s = 0;

let shuffleArray = () => {
    for (let i = dimgs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [dimgs[i], dimgs[j]] = [dimgs[j], dimgs[i]];
    }
}
shuffleArray();

let resetGame=()=>{
    success = 0; showenImg = null; m = 1; s = 0;
    timer.innerHTML = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    shuffleArray();
    console.log();
    for (const img of Images.children) {
        img.src='./Images/request.png';
    }  
}
timer.innerHTML = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;

setInterval(() => {
    if (m == 0 && s == 0) {
        this.clearInterval();
        gameOver.classList.add('d-flex')
        gameOver.classList.add('flex-column')
        gameOver.classList.remove('d-none');

    }
    else {
        if (s == 0) s = 59, m--;
        else s--;
        timer.innerHTML = `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
    }
}, 1000)

tryAgine.addEventListener('click', () => {
    gameOver.classList.add('d-none')
    gameOver.classList.remove('d-flex');
    gameOver.classList.remove('flex-column');
   resetGame();
})
playAgine.addEventListener('click', () => {
    win.classList.add('d-none')
    win.classList.remove('d-flex');
    win.classList.remove('flex-column');
   resetGame();
})


for (let i = 0; i < dimgs.length; i++) {
    let img = document.createElement('img');
    img.src = './Images/request.png';
    img.id = `img${i}`;
    img.style = 'width:150px'

    img.addEventListener('click', () => {
        img.src = dimgs[i];
        // console.log(showenImg,success);

        if (showenImg != null) {
            if (dimgs[showenImg] == dimgs[i]) {
                success += 2;
                if(success==16){
                    win.classList.add('d-flex')
                    win.classList.add('flex-column')
                    win.classList.remove('d-none');
                }
            } else {
                let sImg = document.getElementById(`img${showenImg}`);
                let cImg = document.getElementById(`img${i}`);
                setTimeout(() => {
                    sImg.src = './Images/request.png';
                    cImg.src = './Images/request.png';
                }, 1000)
            }
            showenImg = null;
        }
        else {
            showenImg = i;
        }
        console.log(showenImg, success);

    })
    Images.appendChild(img);
}


