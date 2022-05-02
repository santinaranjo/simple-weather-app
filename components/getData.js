const baseUrlAPI = "https://api.openweathermap.org/";
const apiKEY = "e24af0c56b139eaf9284353c8813905c";

async function getData(city) {
    const response = await fetch(`${baseUrlAPI}data/2.5/weather?q=${city.value}&appid=${apiKEY}&lang=sp&units=metric`);

    if (response.status === 200) {
        return response;
    } else {
        return false;
    };
};

export default getData;