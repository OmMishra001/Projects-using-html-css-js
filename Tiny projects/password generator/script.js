let inputbox = document.getElementById("inputbox");
let numbers = document.getElementById("numbers");
let Symbols = document.getElementById("Symbols");
let up = document.getElementById("up");
let low = document.getElementById("low");
let num = document.getElementById("num");
let sym = document.getElementById("symbol");
let password = document.getElementById("password");

let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
let lowercase = "abcdefghijklmnopqrstuvwxyz"
let number = "1234567890"
let symbol = "!@#$%^&*()"


function random(data) {

    return data[Math.floor(Math.random() * data.length)]

}

function datagenerate(p = "") {
    if (up.checked) {
        p = p + random(uppercase);
    }
    if (low.checked) {
        p = p + random(lowercase);
    }
    if (num.checked) {
        p = p + random(number);
    }
    if (sym.checked) {
        p = p + random(symbol);
    }
    
    console.log(p)

    inputbox.value = p;

    if (p.length < password.value) {
        datagenerate(p);
        console.log(password.value)
    }
}


function PasswordGenerate() {
    datagenerate();
}