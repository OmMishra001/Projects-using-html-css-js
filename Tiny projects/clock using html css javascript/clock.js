function showtime() {
    let time = new Date();
    let hour = time.getHours();
    let min = time.getMinutes();
    let sec = time.getSeconds();
    session = "PM";

    if (hour > 12) {
        hour -= 12;
        session = "PM";
    }

    if (hour == 0) {
        hour = 12;
        session = "AM"
    }

    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;

    let currenttime = " " + hour + ":" + min + ":" + sec + " " + session;
    document.getElementById("clock").innerHTML = currenttime;
}
setInterval(showtime, 1000);
showtime();