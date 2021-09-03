const API_KEY = `417001081c98194fabbd455022a18679`;
const searchTemperature = () => {
    const city = document.getElementById('city-name').value;
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`

    fetch(url)
        .then(res => res.json())
        .then(data => displayTemperature(data));

    document.getElementById('city-name').value = '';
}

const setInnerText = (id, text) => {
    document.getElementById(id).innerText = text;
}

const displayTemperature = temperature => {
    setInnerText('city', temperature.name);
    setInnerText('temp', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);

    // set weather icon

    const url = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}@2x.png`;
    const imgIcon = document.getElementById('icon');
    imgIcon.setAttribute('src', url);
}