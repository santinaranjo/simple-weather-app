import getData from "./components/getData.js";

const inputField = document.querySelector(".main__input--text");
const button = document.querySelector(".main__input--button");
const results = document.querySelector(".main__results");



async function createCard() {
    const response = await getData(inputField);

    if (response) {
        const weatherData = response.json()
            .then(
                function (data) {
                    const cardContent = `
                        <div class="card__title">${data.name}</div>
                        <span class="card__temp">${data.main.temp}</span>
                        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
                        <span class="card__weather">${data.weather[0].description}</span>
                    `;
                    results.innerHTML = cardContent;
                })
            .catch(err => console.log(err))
    } else {
        inputField.value = "";
        inputField.placeholder = "Ha habido un error";
    }
}




// async function getData() {
//     const city = inputField.value;
//     const response = await fetch(`${baseUrlAPI}data/2.5/weather?q=${city}&appid=${apiKEY}&lang=sp`);

//     
// }



button.addEventListener("click", createCard);