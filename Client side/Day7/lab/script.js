let search = document.getElementById('search')
let inter;

search.addEventListener('focus', () => {
    clearInterval(inter)
    inter = setInterval(() => {
        let nWidth = search.offsetWidth + 1;
        search.style.width = `${nWidth}px`;
        console.log(nWidth)
        if (nWidth > 300) {
            clearInterval(inter);
        }
    }, 100)
})
search.addEventListener('blur', () => {
    clearInterval(inter);
    inter = setInterval(() => {
        let nWidth = search.offsetWidth - 1;
        search.style.width = `${nWidth}px`;
        console.log(nWidth)
        if (nWidth == 189) {
            clearInterval(inter);
        }
    }, 100)
})

let iName = document.getElementById('name');
let ipassword = document.getElementById('password')
let iGender = document.getElementById('gender')
let sbtn = document.getElementById('sbtn')
let pbtn = document.getElementById('pbtn')
let wel = document.getElementById('wel')

sbtn.addEventListener('click', () => {
    let welM;
    if (iGender == 'm') {
        welM = `welcome Mr.${iName.value}`
    } else {
        welM = `welcome Ms.${iName.value}`
    }
    wel.innerHTML = `<p>${welM}</p>`
})

pbtn.addEventListener('click', () => {
    let value;
    if (ipassword.getAttribute('type') == 'password') {
        value = 'text'
        pbtn.innerText = 'hide password';

    }
    else {
        value = 'password';
        pbtn.innerText = 'show password';
    }
    console.log(value)
    ipassword.setAttribute('type', value)
})

let images = ['./Images For Slide Show/1.jpg', './Images For Slide Show/2.jpg', './Images For Slide Show/3.jpg', './Images For Slide Show/4.jpg', './Images For Slide Show/5.jpg', './Images For Slide Show/6.jpg', './Images For Slide Show/7.jpg', './Images For Slide Show/8.jpg']
let index = 0;

let curImg = document.getElementsByClassName('curImg')[0];
let dots = document.getElementsByClassName('dots')[0];


for (let i = 0; i < images.length; i++) {
    let dot = document.createElement('div');
    dot.style = 'width: 10px;height: 10px;';
    dot.classList.add('rounded-circle')
    if (i == index) {
        dot.classList.add('bg-secondary')
    }
    else {
        dot.classList.add('bg-secondary-subtle')
    }
    dot.id = `dot${i}`;
    dot.addEventListener('click', () => {
        changeImage(i);
    })
    dots.appendChild(dot);

}
console.log(dots.children[0]);
;

let changeImage = (i) => {
    if (i >= images.length) { i = 0; }
    curImg.src = images[i];
    index = i;

    for (let j = 0; j < dots.children.length; j++) {
        if (j == index) {
            dots.children[j].classList.add('bg-secondary');
            dots.children[j].classList.remove('bg-secondary-subtle');

        }
        else {
            dots.children[j].classList.add('bg-secondary-subtle');

            dots.children[j].classList.remove('bg-secondary');
        }
    }
}

setInterval(() => {
    changeImage(index + 1);
}, 4000)

let getPreImage = () => {
    changeImage(index - 1)
}
let getNextImage = () => {
    changeImage(index + 1)
}


