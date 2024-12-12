let arr = ['tip1', 'tip2', 'tip3', 'tip4', 'tip5', 'tip6', 'tip7', 'tip8', 'tip9']
let index = Math.floor(Math.random() * 9)

var target = document.getElementById("todayTip");


target.innerHTML = `${arr[index]}`;


function displayDate() {
    var target = document.getElementById("datebtn");
    let date = new Date()
    target.innerHTML = `${date}}`;
}

let email = prompt('enter your email', 'test@test.com')


if (email.includes('@')) {
    if (email[0] == '@' || email[email.length - 1] == '@') {
        email = prompt('enter your email', 'test@test.com')
    }
    else {
        console.log(email);

    }
}
else {
    email = prompt('enter your email', 'test@test.com')
}

var target = document.getElementById("email");


target.innerHTML = `<p>email is ${email}</p>`;

//task 4

let arr1=[1,2,3,4,5,6,7],sum=0;
arr1.forEach((item)=>{
    sum+=item
})
var target = document.getElementById("arraySum");


target.innerHTML = `<p>array sum = ${sum}</p>`;


let tPrice=0;
 let products = [{name:'pen',price:5},{name:'iphon',price:5000},{name:'ring',price:220}]
 for(let pro of products){
    tPrice +=pro.price;
 }
 var target = document.getElementById("tPrice");


target.innerHTML = `<p>products total price is= ${tPrice}</p>`;

let grads=[60, 100,10,15,85]

grads.sort(function(a, b){return b - a});

let h = grads.find((item)=>{
    return item;
})

var target = document.getElementById("hGrade");


target.innerHTML = `<p>the hightest grade is= ${h}</p>`;

let p = grads.filter((item)=>{
    return item>60;
})

var target = document.getElementById("pGrade");


target.innerHTML = `<p>the passed grad is= ${p}</p>`;


let people =[{name:'Ahmed',age:'25'},{name:'Manar',age:'22'},{name:'Ali',age:'31'}]
function removeFirstPerson(){
    return people.shift();
}
console.log(removeFirstPerson());

function addPerson(){
    return people.unshift({name:'Awab',age:'25'});
}
addPerson()
console.log(people);

function filterPerson(){
    return people.filter(function(p){return p.name.length>3});
}

console.log(filterPerson());

function findPerson(s){
    return people.find(function(p){return p.name==s});
}

console.log(findPerson('Manar'));

function filterPersonAge(){
    return people.filter(function(p){return p.age>=30});
}

console.log(filterPersonAge());
