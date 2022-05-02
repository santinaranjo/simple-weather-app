import getData from "./components/getData";

const inputField = document.querySelector(".main__input--text");
const button = document.querySelector(".main__input--button");
const results = document.querySelector(".main__results");

// async function getData() {
//     const city = inputField.value;
//     const response = await fetch(`${baseUrlAPI}data/2.5/weather?q=${city}&appid=${apiKEY}&lang=sp`);

//     if (response.status === 200) {
//         const weatherData = response.json()
//             .then(
//                 function (data) {
//                     results.innerHTML = `${data.weather[0].description}`;

//                 })
//             .catch(err => console.log(err))
//     } else {
//         inputField.value = "";
//         inputField.placeholder = "Ha habido un error";
//     }

// }



button.addEventListener("click", getData);