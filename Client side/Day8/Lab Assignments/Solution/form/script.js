let creatCookie = (key, value) => {
    let d = new Date()

    d.setDate(d.getDate() + 4);
    console.log(d)
    return document.cookie = `${key} = ${value} ;expires=`
}
// creatCookie('userName', 'manar')
// creatCookie('userAge','manar')


let getCookie = (key) => {

    let cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim().split('=');
        // console.log(cookie);

        if (cookie[0] == key) {
            return cookie[1];
        }
    }
}
console.log(getCookie('userName'));

let deleteCookie = (cookieName) => {
    var date1 = new Date();
    date1.setDate(date1.getDate() - 1);
    document.cookie = cookieName + "=" + ";expires=" + date1;
}
// deleteCookie('userVisited');
// deleteCookie('genderimg');
// deleteCookie('color');

let getCookies = () => {

    let cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
        cookies[i] = cookies[i].trim().split('=');
        // console.log(cookies[i]);
    }
    return cookies
}
console.log(getCookies());

let hasCookie = (key) => {
    let cookies = document.cookie.split(';')
    for (let i = 0; i < cookies.length; i++) {
        let cookie = cookies[i].trim().split('=');
        // console.log(cookie);

        if (cookie[0] == key) {
            return true;
        }
    }
    return false;
}
console.log(getCookie('userName'));

let saveData = () => {
    // let isChicked = false;
    // document.getElementById('rme').addEventListener('click', () => {
    //     isChicked = true;
    // })
    if ( document.getElementById('rme').checked) {
        localStorage.setItem("userName",document.getElementById('name').value)
        document.getElementById('name').value=localStorage.getItem('userName')
    }
    else{
        localStorage.removeItem('userName')
    }
    creatCookie('userName', document.getElementById('name').value)
        creatCookie('color', document.getElementById('color').value)
        let gender = document.getElementsByName('gender');
        for (let g of gender) {
            if (g.checked) {
                creatCookie('genderimg', g.value)
            }
        }
        // localStorage.setItem("userName", document.getElementById('name').value);

}




