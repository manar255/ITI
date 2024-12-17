// named func
// function sum(n1,n2){
//     console.log(n1+n2);

// }

// sum(5,6)

// arrow func
// var sum=(num1,num2)=>console.log(num1+num2);

// sum(4,8)



// var sumfunc = (n1, n2) => {
//     var sum = 0;
//     sum = n1 + n2;
//     return sum;
// }

// console.log(sumfunc(7, 9));


// var sayHello=()=>{
//     console.log("hello");

// }
// sayHello()

// self invok => IIFE
// (
//     function(){
//         console.log("hello");

//     }
// )()



// (
//     function(num1,num2){
//         // console.log("hello");
//         console.log(num1+num2);

//     }
// )(7,2)

// 
// var sayMess = function () {
//     console.log("hello dev");

// }

// sayMess()



// function sayHello(){ 
//     alert("hello")
// }
// setInterval(sayHello,1000)

// /


// class   {
// member properties


// member methods
// }

// s=new class()

// constructor funct
// function Person(name,age){


//     // member properties

//     this.personName=name;
//     this.personAge=age;
// }

// // object
// var person1=new Person("ali",20);
// console.log(person1);

// person1.personAge=88;
// console.log(person1);


// #######################

// callback func
// function func1(stdName,printField){

//     console.log("Student Name: ",stdName);

//     printField();

// } 

// function printField(){}



// function print1(){
//     console.log("full stack");
    
// }

// var print1=()=>{
//     console.log("full stack");
// }
// func1("sayed",print1)


// Recursive func
// function fact(num){
//     if(num==0){
//         return 1;
//     }
//     else{
//         return  num*fact(num-1);//5*4*3*2*1
//     }
// }

// console.log(fact(5));



// higher order
// function applyOperations(num1,num2,operation){
//     return operation(num1,num2);
// }


// function sumNum(n1,n2){
//     return n1+n2;

// }
// function mulNum(n1,n2){
//     return n1*n2;
// }



// console.log(applyOperations(7,8,sumNum));


// console.log(applyOperations(7,8,mulNum));


