function button(val) {
    document.getElementById("input").value += val;
}

function clear() {
    document.getElementById("input").value = "";
}

function solution() {
    let x = document.getElementById("input").value;
    let y = eval(x);
    document.getElementById("input").value = y;
}