export { };
    
const apiJokes: string = 'https://icanhazdadjoke.com/';
const apiNorris: string = 'https://api.chucknorris.io/jokes/random';
const apiWeather: string = 'api.openweathermap.org/data/2.5/weather?lat=413&lon=21&appid=d21cf593dc1a1c4dd916088038d78729'; 
const init: object = {
    headers: {
        Accept: 'application/json'
    }
}

const showJoke = document.getElementById("joke") as HTMLElement;
const buttonJoke = document.querySelector<HTMLElement>(".btn");


buttonJoke?.addEventListener('click', getJoke);

function getJoke(): void {
    let jokeType = Math.floor(Math.random() * 2 + 1);
    switch (jokeType) {
        case 1: (() => {
            fetch(apiNorris, init)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.joke);
                    showJoke.innerHTML = `${data.value}`
                })
        })();
            break;
        case 2: (() => {
            fetch(apiJokes, init)
                .then((res) => res.json())
                .then((data) => {
                    console.log(data.joke);
                    showJoke.innerHTML = `${data.joke}`
                });
        
        })();
            break;
    }
}

(() => {
    
    fetch(apiWeather)
        .then((res) => res.json())
        .then((data) => {
            console.log('weather')
            console.log(data);
            // showJoke.innerHTML = `${data.joke}`
        })
})();


