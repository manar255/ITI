function openWindow() {
    let screenW = screen.width;
    console.log(screenW);
    window.open('https://www.google.com/', '_blank', `width=${screenW / 2}`);
}

function closeCurWindow() {
    setTimeout(() => {
        window.close();
    }, 2000)
}

function checkEven() {
    let num = document.getElementById('num')
    let res = document.getElementById('res')
    num = num.value;
    evenP = /(0|2|4|6|8)$/
    if (evenP.test(num)) {
        res.innerHTML = 'The number is even'
    }
    else{
        res.innerHTML = 'The number is odd'
    }
}