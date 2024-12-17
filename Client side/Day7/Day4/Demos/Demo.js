
// document.getElementById("outer").addEventListener("click",function(){
//     console.log("Outer div");//capture
    
// });

// document.getElementById("inner").addEventListener("click",function(event){
//     console.log("inner div");//capture
//     // event.stopPropagation();
    
// });

// document.getElementById("btn").addEventListener("click",function(event){
//     console.log("button clicked");//bubble
//     // event.stopPropagation();

    
// });




// dom nav

// var child=document.getElementById("child");
// console.log(child.parentNode.id);



// var list1=document.getElementById("list");
// // var childnodes=list1.childNodes;
// // console.log(childnodes.length);


// var child=list1.children;
// console.log(child.length);



// var div1=document.getElementById("div1");
// var firstCh=div1.firstChild;
// // console.log(firstCh.innerHTML);
// console.log(firstCh.textContent);
// console.log(firstCh);

// var lastCh=div1.lastChild;
// console.log(lastCh.textContent);

// var para2=document.getElementById("p2");
// console.log(para2.previousElementSibling);
// console.log(para2.previousSibling);
// console.log(para2.nextSibling);
// console.log(para2.nextElementSibling);

// ###########################################



// create element
// var head1=document.createElement("h1");
// head1.innerHTML="hello new head1"
// // head1.innerHTML="<span> hello new head1</span>"
// // head1.textContent="hello new head1"
// // head1.innerText="hello new head1"
// var div1=document.getElementById("div1");

// div1.appendChild(head1)
// var para3=document.getElementById("p3");

// // div1.insertBefore(head1,para3)
// div1.replaceChild(head1,para3);






// gallery
// var div1=document.getElementById("divImages");
// var imgs=['./1.jpg','./2.jpg','./3.jpg','./4.jpg'];

// imgs.forEach(function(ele){
//     // var img=document.createElement("img");
//     var img=document.createElement("img");
//     // img.setAttribute()
//     img.src=ele;
//     img.width=200;
//     img.height=200;
//     // console.log(ele);
//     div1.appendChild(img);
// })




