let endDate = "25 December 2023 00:00 AM"

document.getElementById("end_date").innerHTML = endDate;

function clock() {
    let end = new Date(endDate);
    let now = new Date();
    let diff = (end - now) / 1000;

    if (diff < 0) {
        return
    }

    document.getElementsByClassName("inputtag")[0].value = (Math.trunc(diff / 3600 / 24));
   
    document.getElementsByClassName("inputtag")[1].value = (Math.trunc(diff / 3600) % 24);
   
    document.getElementsByClassName("inputtag")[2].value = (Math.trunc(diff / 60) % 60);
   
    document.getElementsByClassName("inputtag")[3].value = (Math.trunc(diff) % 60);
}

setInterval(clock, 1000)