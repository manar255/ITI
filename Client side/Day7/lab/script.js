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
        pbtn.innerText='hide password';

    }
    else {
        value = 'password';
        pbtn.innerText='show password';
    }
    console.log(value)
    ipassword.setAttribute('type', value)
})