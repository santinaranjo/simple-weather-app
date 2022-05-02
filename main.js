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
                    const cardContainer = document.createElement("div");
                    const cardContent = `
                        <div class="card__title">
                            <span>${data.name}</span>
                            <span>${data.sys.country}</span>
                        </div>
                        <span class="card__temp">${data.main.temp}</span>
                        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png">
                        <span class="card__weather">${data.weather[0].description}</span>
                    `;
                    
                    cardContainer.className = "card__container";
                    cardContainer.innerHTML = cardContent;
                    results.append(cardContainer);
                    inputField.value = "";
                })
            .catch(err => console.log(err))
    } else {
        inputField.value = "";
        inputField.placeholder = "Ha habido un error";
    }
}



button.addEventListener("click", createCard);