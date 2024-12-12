let bdate=prompt('enter date in format dd-mm-yy','dd-mm-yy')
let arr;
if(bdate[2]=='-'&&bdate[5]=='-')
{
arr=bdate.split('-');
console.log(arr);

}
else{
    bdate=prompt('enter date in format dd-mm-yy','dd-mm-yy')
}
let d=new Date(`${arr[2]}-${arr[1]}-${arr[0]}`);

function displayDate() {
    var target = document.getElementById("datebtn");
    
    target.innerHTML = `${d}}`;
}