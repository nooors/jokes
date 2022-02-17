"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apiJokes = 'https://icanhazdadjoke.com/';
const apiNorris = 'https://api.chucknorris.io/jokes/random';
const apiWeather = 'api.openweathermap.org/data/2.5/weather?lat=413&lon=21&appid=d21cf593dc1a1c4dd916088038d78729';
const init = {
    headers: {
        Accept: 'application/json'
    }
};
const showJoke = document.getElementById("joke");
const buttonJoke = document.querySelector(".btn");
buttonJoke === null || buttonJoke === void 0 ? void 0 : buttonJoke.addEventListener('click', getJoke);
function getJoke() {
    let jokeType = Math.floor(Math.random() * 2 + 1);
    switch (jokeType) {
        case 1:
            (() => {
                fetch(apiNorris, init)
                    .then((res) => res.json())
                    .then((data) => {
                    console.log(data.joke);
                    showJoke.innerHTML = `${data.value}`;
                });
            })();
            break;
        case 2:
            (() => {
                fetch(apiJokes, init)
                    .then((res) => res.json())
                    .then((data) => {
                    console.log(data.joke);
                    showJoke.innerHTML = `${data.joke}`;
                });
            })();
            break;
    }
}
// (() => {
//     fetch(apiWeather)
//         .then((res) => res.json())
//         .then((data) => {
//             console.log('weather')
//             console.log(data);
//             // showJoke.innerHTML = `${data.joke}`
//         })
// })();
