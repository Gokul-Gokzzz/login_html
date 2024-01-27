// function myfunction(){
//     var x =document.getElementById("pass");
    
//     if(x.type ==="password"){
//         x.type ="text";
//     }else{
//         x.type = "password";
//     }
// }

function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("pass").value;

    if (username.length > 0 && password.length >= 8) {
        alert("Login successful");
        return true; 
    } else {
        alert("Login failed. Please provide a valid username and password.");
        return false; 
    }
}