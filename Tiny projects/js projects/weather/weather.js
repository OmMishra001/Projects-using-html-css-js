let api = '168949eea6007dbadcc0fe0ced53bc1e';
let temp1 = document.getElementById('temp1');
let searchbtn = document.getElementById('searchbtn');
let clear1 = document.getElementById('clear1');
let location_city = document.getElementById('location_city');
let desc = document.getElementById('desc1');
let city = document.querySelector('input');
let find_city;

searchbtn.addEventListener('click', () => {
    find_city = city.value;
    console.log(find_city);
    
    fetchWeather();
})

async function fetchWeather() {
    const Weatherurl = `https://api.openweathermap.org/data/2.5/weather?q=${find_city}&appid=${api}&units=metric`;
    const response = await fetch(Weatherurl)
    console.log(response);
    const weather1 = await response.json();
    console.log(weather1);
    temp1.textContent = weather1.main.temp + '°C';
    clear1.textContent = weather1.weather[0].main;

    desc.textContent = weather1.weather[0].description + '🌤️';
    location_city.textContent = weather1.name + '🤍';

    if (clear1.textContent == 'Clear') {
        clear1.textContent = weather1.weather[0].main + '☁️';

    }
    else if (clear1.textContent == 'Cloud') {
        clear1.textContent = weather1.weather[0].main + '🌨️';

    }


}


