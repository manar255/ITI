function tset() {
    if (arguments.length != 2) {
        let err = new Error('accept only 2 parameters')
        throw err;
    }
    console.log(arguments.length);
}
// tset(1);
tset(2,6);

function add3number() {
    if (arguments.length != 3) {
        let err = new Error('accept only 3 parameters')
        throw err;
    }
    let res = 0;
    for (let i = 0; i < arguments.length; i++) {
        if (typeof arguments[i] != Number) {
            let err = new Error('accept number only')
            throw err;
        }
        res += arguments[i]

    }
    return res;
}

 let reverseParameter=()=> {
    console.log(arguments);
    
    return Array.from(arguments).reverse();
}
console.log(reverseParameter(1, 2, 3, 4));

function reverseParameterb() {
    let res = [];
    for (let i = arguments.length - 1; i >= 0; i--) {
        res.push(arguments[i]);
    }
    return res
}
console.log(reverseParameterb(1, 2, 3, 4));


//high order function

function sum(num1, num2) {
    return num1 + num2;
}
function sub(num1, num2) {
    return num1 - num2;
}
function mut(num1, num2) {
    return num1 * num2;
}
function dev(num1, num2) {
    return num1 / num2;
}
function myFunction(x) {    
    if (x == '+') {
        fire(sum);
        console.log(555555555);
        
    }
    else if (x == '-') {
        fire(sub);
    }
    else if (x == '*') {
        fire(mut);
    }
    else if (x == '/') {
        fire(dev);
    }
}

function fire(opration) {
    let n1 = Number(document.getElementById('n1').value);

    let n2 = Number(document.getElementById('n2').value);
    let res = opration(n1, n2);
    
    alert(`result =${res}`, );

}


function person(name, age) {
    this.name = name;
    this.age = age;
}

person.prototype.PrintPerson = function () {
    console.log(`name is ${this.name} age is ${this.age}`);

}

let p = new person('Manar', '22');
p.PrintPerson();

(function () {
    let x = 5;
    console.log(x);
})()