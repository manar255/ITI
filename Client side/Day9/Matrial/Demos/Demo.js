// function getArg(){
//     for(var i=0;i<arguments.length;i++){
//         console.log(arguments[i]);

//     }
// }

// // getArg(2,"uu",88,"ii",true);
// getArg(2,"uu");


// function get1(x){}
// function get1(x,y){}
// function get1(x,y,z){}

// error
// var arg=()=>{
//     for(var i=0;i<arguments.length;i++){
//         console.log(arguments[i]);

//     }
// }

// arg(5,"tt",true)

// function getArg(){
//     var arg=()=>{
//         for(var i=0;i<arguments.length;i++){
//             console.log(arguments[i]);

//         }
//     }

//     arg();
// }

// getArg(4,5,"yy",false)


// apply , call ,bind

// apply
// function sum(n1,n2,n3){
//     return n1 + n2 + n3;
// }

// var nums=[5,9,8];

// // console.log(sum(nums));

// console.log(sum.apply(null,nums));



// function getcoords(x,y,z) {
//     this.x+=x;
//     this.y+=y;
//     this.z+=z;
// }

// var coords={x:2,y:7,z:6}

// // console.log(getcoords.apply(coords,[3,2,1]));
// getcoords.apply(coords,[3,2,1]);
// console.log(coords);


// call

// function getcoords(x, y, z) {
//     this.x += x;
//     this.y += y;
//     this.z += z;
// }

// var obj={x:4,y:6,z:1};


// // getcoords.apply(obj,[])
// getcoords.call(obj,5,3,9)
// console.log(obj);


// 
// var personObj={

//     printData:function(){
//         return "First name: "+this.firstName+" ,Person Age: "+this.age;
//     }
// };

// var person1={
//     firstName:"Sara",
//     age:22
// }
// console.log(personObj.printData.call(person1));



// var personObj={

//     printData:function(){
//         return "First name: "+this.firstName+" ,Person Age: "+this.age;
//     }
// };

// var person1={
//     firstName:"Sara",
//     age:22
// }
// console.log(personObj.printData.apply(person1));



// bind
// var trackCourses={

//     course:"JS",
//     getCourse:function(){
//         return  "Course name : "+ this.course;
//     }

// }



// var trackcour2={
//     course:"Angular"
// }


// var result=trackCourses.getCourse.bind(trackcour2);
// console.log(result());

// ##################################################

// Errors object
// var err=new Error("error mess");
// // console.log(err);
// console.log(err.message);



// try ... catch


// try{
//     eval("alert('hello)");
// }
// catch(e){
//     var err=new Error("error syntax");
// // console.log(e);
// console.log(err.message);

// }


// ref
// try {
//     // console.log(x);
//     console.log(x());
    
// }
// catch(err){
// console.log(err);

// }

// type 
// try{
//     // const x=9;
//     // console.log(x);
//     // x=44;
//     // console.log(x);

//     var num=8;
//     console.log(num());
    
    
// }

// catch(e){
//     console.log(e);
    
// }

// range err
// try{
//     new Array(-1)
// }
// catch(e){
//     console.log(e);
    
// }


//create object


// var parentObj={

//     age:20,
//     printData:function(){
//         console.log("Name: "+this.stdName);
        
//     }

// }

// var obj=Object.create(parentObj);
// // console.log(obj);
// console.log(obj.age);

// obj.stdName="ali";
// obj.printData()

// obj.x="item";
// console.log(obj.x);

// prototype
// function person(name,salary){
//     this.personName=name;
//     this.personSalary=salary;
// }

// person.prototype.id=2;

// person.prototype.printData=function(){
//     console.log("Name: "+this.personName+" ,Salary: "+this.personSalary+",Id:"+this.id);
    
// }

// var person1=new person("sara",100);
// person1.printData();



// ###################
//constructor rectangle 
// function Rectangle(w,h) {
//     this.width=w;
//     this.height=h;


// }
// add in prototype area method
// Rectangle.prototype.area=function(){
//     return this.width*this.height;
// }

// constructor function square
// function Square(size){

//     // constructor(){}
//     // console.log(this);//square

//     // this.z=z
//     // use constr rectangle with call function

//     Rectangle.call(this,size,size)
// }

// function Square(size){
//     this.size=size;
// }

// // inherit 
// Square.prototype=Object.create(Rectangle.prototype);

// // Square.prototype.constructor=Square;
// Square.prototype.area=function area(){
//     return this.width*4;
// }


// var rec=new Rectangle(5,4);
// console.log(rec);

// console.log(rec.area());


// var sqr=new Square(6,55);
// console.log(sqr);
// console.log(sqr.area());
