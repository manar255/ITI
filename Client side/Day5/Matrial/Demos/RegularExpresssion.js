// pattern
// var p=/pattern/
// var p=new RegExp()


// var pattern1=/ca*t/;
// var pattern1=/^ca*t$/;
// console.log(pattern1.test("cat"));
// console.log(pattern1.test("ct"));
// console.log(pattern1.test("wwcaaaaaaaaat"));


// var pattern1=/ca+t/;
// console.log(pattern1.test("cat"));
// console.log(pattern1.test("ct"));
// console.log(pattern1.test("caaaaat"));

// var pattern1=/ca?t/;
// console.log(pattern1.test("caaaaat"));
// console.log(pattern1.test("cat"));
// console.log(pattern1.test("ct"));


// var pattern1=/ca.t/;
// console.log(pattern1.test("ca#t"));
// console.log(pattern1.test("caraaaat"));


// var pattern1=/[0-9]/;
// // console.log(pattern1.test("011111"));
// console.log(pattern1.test("p011111q"));


// var pattern1=/^[0-9]$/;
// console.log(pattern1.test("011111"));
// console.log(pattern1.test("p011111q"));




// var pattern1=/^[a-z]*[0-9]$/;

// console.log(pattern1.test("p2"));
// console.log(pattern1.test("pt26"));

// var pattern1=/^[A-Za-z]*[0-9]$/;
// var pattern1=/^.[a-z]*[0-9]$/;

//i=> ignore
// var pattern1=/^[a-z]*[0-9]$/i;
// console.log(pattern1.test("Pt6"));


// var pattern1=/^[A-Za-z]{3}$/;
// console.log(pattern1.test("AD"));
// console.log(pattern1.test("AsD"));
// console.log(pattern1.test("AsDu"));


// var pattern1=/^[A-Za-z]{3,}$/;
// console.log(pattern1.test("AsDu"));
// console.log(pattern1.test("ADu"));
// console.log(pattern1.test("AD"));


// var pattern1=/^[A-Za-z]{3,5}$/;
// console.log(pattern1.test("AD"));
// console.log(pattern1.test("ADj"));
// console.log(pattern1.test("ADjj"));
// console.log(pattern1.test("ADjju"));
// console.log(pattern1.test("ADjjuii"));



// var pattern1=/^[0-9]{3,5}$/;
// console.log(pattern1.test("7777"));




// phone pattern => 01(0,1,5,2) 8 numbers

// var pattern1=/^(01)(0|1|2|5){1}[0-9]{8}$/;
// var pattern1=/^(01)(0|1|2|5)[0-9]{8}$/;

// console.log(pattern1.test("01012345678"));//true
// console.log(pattern1.test("0101234567"));//false
// console.log(pattern1.test("0112345678"));//true
// console.log(pattern1.test("01612345678"));//false


// 
// var p=/^[0-9]+$/;
// console.log(p.test("4777"));//false


// var pattern1=/^(01)(0|1|2|5)\d{8}$/;
// console.log(pattern1.test("0112345678"));//false

// console.log(pattern1.test("01123457678"));//false

// var pattern2=/\s/;

// console.log(pattern2.test("aa jj"));
// console.log(pattern2.test("aa jj$"));

// var p=/\A  \Z/

// pattern firstname 
// var pattern1=/^[a-z]{4}$/i;




