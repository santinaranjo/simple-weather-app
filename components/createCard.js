import getData from "./getData.js";

const inputField = document.querySelector(".main__input--text");
const results = document.querySelector(".main__results");

async function createCard() {
    const response = await getData(inputField);

    if (response) {
        const cardCount = document.querySelectorAll(".card__container");
        const weatherData = response.json()
            .then(
                function (data) {
                    const cardContainer = document.createElement("div");
                    const cardContent = `
                        <div class="card__title">
                            <span class="card__title--city">${data.name}</span>
                            <span class="card__title--country">${data.sys.country}</span>
                        </div>
                        <span class="card__temp">${data.main.temp} ºC</span>
                        <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}.png" class="card__img">
                        <span class="card__weather">${data.weather[0].description}</span>
                    `;
                    
                    cardContainer.className = "card__container";
                    cardContainer.innerHTML = cardContent;

                    if (cardCount.length === 3) {
                        results.removeChild(cardCount[2]);
                        results.prepend(cardContainer);
                    } else {
                        results.prepend(cardContainer);
                    }
                    
                    inputField.value = "";
                    inputField.className = "main__input--text";
                    inputField.placeholder = "Escribe una ubicación";
                })
            .catch(err => console.log(err))
    } else {
        inputField.value = "";
        inputField.className = "main__input--text_error";
        inputField.placeholder = "Ha ocurrido un error";
    }
}

export default createCard;