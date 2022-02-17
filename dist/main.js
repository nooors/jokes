"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class UserClass {
    constructor(joke, score) {
        this.joke = joke;
        this.score = score;
        this.date = (new Date()).toISOString();
    }
}
let userArray = [];
const apiJokes = 'https://icanhazdadjoke.com/';
const apiNorris = 'https://api.chucknorris.io/jokes/random';
const apiWeather = 'https://api.openweathermap.org/data/2.5/weather?lat=41.3879&lon=2.16992&units=metric&appid=d21cf593dc1a1c4dd916088038d78729';
const init = {
    headers: {
        Accept: 'application/json'
    }
};
const showJoke = document.getElementById("joke");
const buttonJoke = document.querySelector(".next");
const badJoke = document.getElementById("bad");
const notBad = document.getElementById("not-bad");
const niceJoke = document.getElementById("nice");
badJoke === null || badJoke === void 0 ? void 0 : badJoke.addEventListener('click', () => {
    console.log(typeof showJoke.innerHTML);
    if (showJoke.textContent) {
        let opinion = new UserClass(showJoke.textContent, 1);
        userArray.push(opinion);
        console.log(userArray);
        getJoke();
    }
});
notBad === null || notBad === void 0 ? void 0 : notBad.addEventListener('click', () => {
    if (showJoke.textContent) {
        let opinion = new UserClass(showJoke.textContent, 2);
        userArray.push(opinion);
        console.log(userArray);
        getJoke();
    }
});
niceJoke === null || niceJoke === void 0 ? void 0 : niceJoke.addEventListener('click', () => {
    if (showJoke.textContent) {
        let opinion = new UserClass(showJoke.textContent, 3);
        userArray.push(opinion);
        console.log(userArray);
        getJoke();
    }
});
buttonJoke === null || buttonJoke === void 0 ? void 0 : buttonJoke.addEventListener('click', getJoke);
function getJoke() {
    let jokeType = Math.floor(Math.random() * 2 + 1);
    switch (jokeType) {
        case 1:
            (() => {
                fetch(apiNorris, init)
                    .then((res) => res.json())
                    .then((data) => {
                    console.log(data.value);
                    showJoke.innerHTML = `${data.value}`;
                });
            })();
            break;
        case 2:
            (() => {
                fetch(apiJokes, init)
                    .then((res) => res.json())
                    .then((data) => {
                    showJoke.innerHTML = `${data.joke}`;
                });
            })();
            break;
    }
}
(() => {
    fetch(apiWeather)
        .then((res) => res.json())
        .then((data) => {
        let result = data;
        //The div where will append the dynamic image
        let weatherImg = document.getElementById('weather');
        if (weatherImg) {
            console.log(weatherImg);
        }
        let weatherIcon = new Image();
        weatherIcon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
        weatherImg.appendChild(weatherIcon);
        let weatherTemp = document.getElementById('temp');
        // if guard prevent @weatherTemp is null
        if (weatherTemp) {
            weatherTemp.innerHTML = `${result.main.temp.toFixed(1).toString()}\u00B0C   |`;
        }
    })
        .catch((e) => {
        console.log(e);
    });
})();
