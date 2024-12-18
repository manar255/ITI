// 1-http request
// 2- method , open
// 3- state ,status ,response
// 4-send request


// 1-request object
var xhr=new XMLHttpRequest();


// 2-open method
// get method
// fake data
// true => async , false => sync
// xhr.open("GET","https://jsonplaceholder.typicode.com/users",true);
xhr.open("GET","./Data.json",true);

// 3-event => state , status , response
xhr.onreadystatechange=function(){

    if(xhr.readyState==4&&xhr.status==200){
     
        // response
        var data=xhr.response;
        // console.log(data);//string
        var dataAfterParse=JSON.parse(data);
        console.log(dataAfterParse);
        // console.log(dataAfterParse[0].name);
        
        
    }
}


// 4-send
xhr.send()