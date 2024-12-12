function sum(x, y) {
    return x + y;
}


function track(fac) {
    switch (fac) {
        case 'FCI':
            console.log('You’re eligible to Programing tracks')
            break;
        case 'Engineering':
            console.log('You’re eligible to Network and Embedded tracks')
            break;
        case 'Commerce':
            console.log("You’re eligible to ERP and Social media tracks")
            break;
        default:
            console.log("You’re eligible to SW fundamentals track")
    }
}
track('FCI')




function lessThan100(x,y){
return(x+y<100)?'true':'false';
}
console.log(lessThan100(5,100))




function stringInt (str){
    return Number(str);

}
console.log(stringInt(55))