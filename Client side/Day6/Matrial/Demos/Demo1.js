// console.log(navigator.language);
// console.log(navigator.cookieEnabled);

// console.log(history.length);


// function goback(){
//     history.back();
// }
// function goFow(){
//     history.forward()
// }



// setInterval

// function printData(){
//     console.log("data");

// }


// setInterval(printData,1000)


// var interval;

// function setInter(){
//     var counter=0;
//    interval= setInterval(function(){

//         console.log(counter++);
//     },2000)
// }
// function stopInter(){
//     clearInterval(interval);
// }


// settimeout
// var time1;
// function setTime(){
//    time1= setTimeout(function(){

//         alert("hello")
//     },2000)
// }

// function stopTime(){
//     clearTimeout(time1);
// }



// console.log(screen.width);
// console.log(screen.availWidth);
// console.log(screen.height);
// console.log(screen.availHeight);



// DOM
// console.log(document.getElementById("firstPara"));

// id
// document.getElementById("firstPara").innerHTML="First paragraph";

// class

// document.getElementsByClassName("paraClass")[1].innerHTML="First paragraph";

// var para=document.getElementsByClassName("paraClass");
// for(var i=0;i<para.length;i++){
//     para[i].innerHTML="new para";
// }


// tagname
// document.getElementsByTagName("p")[0].innerHTML="paragraph"


// name
// document.getElementsByName("input1")[0].value="hello"


// query selector
// document.querySelector("#firstPara").innerHTML="hello"
// document.querySelector("#div1>#firstPara").innerHTML="hello"
// document.querySelector(".paraClass").innerHTML="hello"

// query selector all elements
// document.querySelectorAll(".paraClass")[0].innerHTML="hello"



// classlist

// var para=document.getElementById("firstPara")
// function addClass(){
//     para.classList.add("class1")
// }

// function removeClass(){
//     para.classList.remove("class1")
// }

// function toggleClass(){
//     para.classList.toggle("class1")
// }

// style
// document.getElementById("firstPara").style.color='red';
// document.getElementById("firstPara").style="background-color:lightblue;color:red"

// attribute
// document.getElementById("firstPara").setAttribute("style","background-color:lightblue;")

// document.getElementById("firstPara").setAttribute("title","hello para")

// console.log(document.getElementById("firstPara").getAttribute("id"));
// document.getElementById("firstPara").removeAttribute("id")



// events

function sayMessage() {
    alert("Hello Developers")
}

// document.getElementById("firstPara").setAttribute("onclick","sayMessage()")

// document.getElementById("firstPara").onclick=function(){
//     alert("Hello developers")
// }


// document.getElementById("firstPara").onclick=sayMessage;
// document.getElementById("firstPara").addEventListener("click",function(){
//     console.log("hello click")
// })


// document.getElementById("firstPara").addEventListener("click",sayMessage)
// document.getElementById("firstPara").addEventListener("dblclick",sayMessage)



// events
// document.getElementsByTagName("button")[0].addEventListener("dblclick",sayMessage)



// document.getElementsByTagName("button")[0].addEventListener("mouseover",function(){
//     console.log("mouse over event");

// })

// document.getElementsByTagName("button")[0].addEventListener("mouseout",function(){
//     console.log("mouse out event");

// })



// document.addEventListener("keydown",function(){
//     console.log("key down event");

// })

// document.addEventListener("keyup",function(){
//     console.log("key up event");

// })


// function submitForm(ev){
//     console.log(ev);

//     ev.preventDefault();
//     console.log("submit form");

// }




// document.getElementById("input1").addEventListener("focus",function(){
//     // console.log(this);

//     this.style.backgroundColor="blue"

// })


// document.getElementById("input1").addEventListener("blur",function(){
//     // console.log(this);

//     this.style.backgroundColor="white"

// })


// window.addEventListener("load",function(){
//     console.log("hello window");

// })

// document.getElementById("input1").addEventListener("mouseenter",function(){
//     console.log("mouse enter");

// })


// document.getElementById("input1").addEventListener("mouseleave",function(){
//     console.log("mouse leave");

// })


// document.getElementById("input1").addEventListener("change", function () {
//     // this.style.backgroundColor = "lightblue";

//     console.log(this.value);
    

// })


// document.getElementById("sel").addEventListener("change", function () {
//     // this.style.backgroundColor = "lightblue";

//     console.log(this.value);
    

// })



// document.addEventListener("keypress",function(event) {
//     console.log(event.key);
    
// })



// event property
document.getElementById("btn").addEventListener("click",function(event) {

// console.log(event.target);
// console.log(event.target.id);
// console.log(event.type);
console.log(event.key);

})