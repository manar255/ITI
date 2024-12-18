function getUser(){
    var ID=document.getElementById("userid").value;
    var div1=document.getElementsByTagName("div")[0];


    // console.log(xhr.readyState);//error
    
    // 1-object
    var xhr=new XMLHttpRequest();
    // console.log(xhr.readyState);

    // 2-open
    xhr.open("GET","https://jsonplaceholder.typicode.com/users/"+ID);
    // console.log(xhr.readyState);

    // event
    xhr.onreadystatechange=function(){
    // console.log(xhr.readyState);

        if(xhr.readyState==4&&xhr.status==200){
    // console.log(xhr.readyState);

            var data=JSON.parse(xhr.response);
            // console.log(data);
            div1.innerHTML="User Name: " + data.name +"<br> User Email: " + data.email
            
        }
    }

    // 4-send
    xhr.send();
    // console.log(xhr.readyState);

}