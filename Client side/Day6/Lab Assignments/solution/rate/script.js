let ids = ['s1', 's2', 's3', 's4', 's5']
let stars = document.getElementsByTagName('img')
let sContainar = document.getElementById('sContainar')
let isclicked = false;

for (let i = 0; i < 5; i++) {
    stars[i].addEventListener("mouseover", () => {
        if (!isclicked) {
            for (let j = 0; j <= 4; j++) {
                document.getElementById(ids[j]).src = '../../Valid & Not Valid Images/emptyStar.png';
            }
            for (let j = 0; j <= i; j++) {
                document.getElementById(ids[j]).src = '../../Valid & Not Valid Images/fillStar.png';
            }
        }
    });
    stars[i].addEventListener('click', () => {
        if (isclicked) {
            isclicked = false
        } else {
            isclicked = true;
            for (let j = 0; j <= i; j++) {
                document.getElementById(ids[j]).src = '../../Valid & Not Valid Images/fillStar.png';
            }
        }
    }) 
}


sContainar.addEventListener('mouseout', () => {
    if (!isclicked) {
        for (let j = 0; j <= 4; j++) {
            document.getElementById(ids[j]).src = '../../Valid & Not Valid Images/emptyStar.png';
        }
    }
})


