var updateClickCount = (function () {
    var counter = 0;
    return function () {
        counter++;
        document.getElementById('spnCount').innerHTML = counter;
    }
})();
// let x=updateClickCount();.


class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    CalcCircumference() {
        return 2 * (this.width + this.height);
    }
    static WhoAmI() {
        return "I am a rectangle";
    }

}
class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }
    CalcCircumference() {
        return 4 * this.width;
    }
    static WhoAmI() {
        return "I am a square";
    }
}

let r = new Rectangle(5, 9);
console.log(r.CalcCircumference());
console.log(Rectangle.WhoAmI())

let s = new Square(5);
console.log(s.CalcCircumference());
console.log(Square.WhoAmI())

/***************Custom event***************/
let btunI = document.getElementById('btnI')
let img = document.getElementById('img')

let e = new CustomEvent('addImage', {
    detail: {
        url: "https://img.freepik.com/free-photo/cute-ai-generated-cartoon-bunny_23-2150288870.jpg"
    }
})
img.addEventListener('addImage', function (ev) {
    img.src = e.detail.url;
})

btunI.addEventListener('click', function () {
    img.dispatchEvent(e);
}
)
/********object Create & assign ***********/
let person = {
    name: 'John',
    age: 30
}
let p1 = Object.create(person)
p1.name = 'Manar'
p1.age = 22
console.log(p1)

let editedPerson = Object.assign(person, { age: 1, city: 'Qena' })
console.log(editedPerson)

/************* define propeties ***********/
let car = {};
Object.defineProperty(car, 'model', {
    value: 'Toyota',
    writable: true,
    enumerable: true,
    configurable: true

})
Object.defineProperties(car, {
    'id': {
        value: '1',
        writable: false,
        enumerable: false,
        configurable: true
    },
    'color': {
        value: 'Red',
        writable: true,
        enumerable: true,
        configurable: true
    }
})

console.log(car);











