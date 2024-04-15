let username = document.getElementById("username");
let password = document.getElementById("password");
let temp = 1;
function validateform() {
    if (username.value == "") {
        document.getElementById("usererror").innerHTML = "User Name is Empty"
        temp = 0;
    } 
    
    else if (username.value.length < 3) {
        document.getElementById("usererror").innerHTML = "User Name required min 3 character"
        temp = 0;
    } 
    
    else {
        document.getElementById("usererror").innerHTML = ""
        temp = 1;
    }


    if (password.value == "") {
        document.getElementById("passerror").innerHTML = "password is empty";
        temp = 0;
    }
    else {

        document.getElementById("passerror").innerHTML = "";
        temp = 1;
    }

    if (temp) {
        return true;
    }
    else {
        return false;
    }
    
}