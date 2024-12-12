let name = prompt('enter your name', 'Manar')
let namep = /^[A-Z]{1}[a-z]*$/
console.log(!namep.test(name));

while (!namep.test(name)) {
     name = prompt('enter your name', 'Manar')
}
let email = prompt('enter your email', 'manarkhaled2510@gmail.com')

let emailp = /^[a-z0-9]*@[a-z]*(.com)$/

while (!emailp.test(email)) {
    email = prompt('enter your email', 'manarkhaled2510@gmail.com')
}
let phone = Number(prompt('enter your phone', '0963345593'))
let phonep = /^[0-9]{8}$/

while (!phonep.test(phone)) {
    phone = Number(prompt('enter your phone', '0963345593'))
}
let mobile = prompt('enter your mobile', '01112850863')
let mobilep = /^(01)(0|1|2|5)[0-9]{8}/

while (!mobilep.test(mobile)) {
    mobile = prompt('enter your mobile', '01112850863')
}

var target = document.getElementById("welcome");


target.innerHTML = `welcome ${name} in our website <br> your email is => ${email} <br> your phone is ${phone} <br>your mobile  is ${mobile}`;




























