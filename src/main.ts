export { };

class UserClass{
    joke: string;
    score: number;
    date: string;
    
    constructor(joke: string, score: number) {
        this.joke = joke;
        this.score = score;
        this.date = (new Date()).toISOString();
    }
}

let userArray: {
    joke: string,
    score: number,
    date: string
}[]=[];

const apiJokes: string = 'https://icanhazdadjoke.com/';
const apiNorris: string = 'https://api.chucknorris.io/jokes/random';
const apiWeather: string = 'https://api.openweathermap.org/data/2.5/weather?lat=41.3879&lon=2.16992&units=metric&appid=d21cf593dc1a1c4dd916088038d78729'; 
const init: object = {
    headers: {
        Accept: 'application/json'
    }
}

const showJoke = document.getElementById("joke") as HTMLElement;
const buttonJoke = document.querySelector<HTMLElement>(".next");

const badJoke = document.getElementById("bad") as HTMLElement;
const notBad = document.getElementById("not-bad") as HTMLElement;
const niceJoke = document.getElementById("nice") as HTMLElement;

badJoke?.addEventListener('click', () => { 
    // if guard for ensure the type of element since it can be null
    if (showJoke.textContent) {
        let opinion: UserClass = new UserClass(showJoke.textContent, 1);
        userArray.push(opinion);
        console.log(userArray);
        getJoke();
    }
});
notBad?.addEventListener('click', () => {
    if (showJoke.textContent) {
        let opinion: UserClass = new UserClass(showJoke.textContent, 2);
        userArray.push(opinion);
        console.log(userArray);
        getJoke();
    }
})
niceJoke?.addEventListener('click', () => {
    if (showJoke.textContent) {
        let opinion: UserClass = new UserClass(showJoke.textContent, 3);
        userArray.push(opinion);
        console.log(userArray);
        getJoke();
    }
})

buttonJoke?.addEventListener('click', getJoke);
// rondomly fecthing two apis 
function getJoke(): void {
    let jokeType = Math.floor(Math.random() * 2 + 1);
    switch (jokeType) {
        case 1: (() => {
            fetch(apiNorris, init)
                .then((res) => res.json())
                .then((data) => {
                    showJoke.innerHTML = `${data.value}`
                })
        })();
            break;
        case 2: (() => {
            fetch(apiJokes, init)
                .then((res) => res.json())
                .then((data) => {
                    
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
            let result = data;
            //The div from which will append the dynamic image
            let weatherImg = document.getElementById('weather-icon') as HTMLElement;
            if (weatherImg) {
                let weatherIcon = new Image();
                weatherIcon.src = `https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png`;
                weatherImg.appendChild(weatherIcon);               
            }
            let weatherTemp = document.getElementById('temp') as HTMLElement;
            // if guard prevent @weatherTemp is null
            if (weatherTemp) {
                weatherTemp.innerHTML = `${result.main.temp.toFixed(1).toString()}\u00B0C`;
            }
        })
        .catch((e) =>{
        console.log(e);
    })
})();


