const inputField = document.querySelector(".main__input--text");
const button = document.querySelector(".main__input--button");
const results = document.querySelector(".main__results");

const baseUrlAPI = "https://api.openweathermap.org/";
const apiKEY = "8a1bf76b5e2e0ac8758cbbe6d349db42";

async function getData() {
    const city = inputField.value;
    const response = await fetch(`${baseUrlAPI}data/2.5/weather?q=${city}&appid=${apiKEY}&lang=sp`);

    if (response.status === 200) {
        const weatherData = response.json()
            .then(
                function (data) {
                    results.innerHTML = `${data.weather[0].description}`;

                })
            .catch(err => console.log(err))
    } else {
        inputField.value = "";
        inputField.placeholder = "Ha habido un error";
    }

}

button.addEventListener("click", getData);