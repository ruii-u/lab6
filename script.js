let apiURL = "https://api.open-meteo.com/v1/forecast?latitude=44.01&longitude=-79.45&current=temperature_2m,rain,snowfall";

async function getWeather() {
    try {
        const response = await fetch(apiURL);

        if (!response.ok) {
            throw new Error("Request failed");
        }

        const data = await response.json();

        let temperature = data.current.temperature_2m;
        let rain = data.current.rain;
        let snow = data.current.snowfall;

        document.querySelector("#temperature").textContent = temperature + "°C";

        if (temperature <= 0) {
            document.querySelector("#message").textContent = "It's really freezing outside in the garden!";

        } else {
            document.querySelector("#message").textContent = "It's above freezing outside in the garden.";
        }

        if (snow > 0) {
            document.querySelector("#garden-image").src = "images/garden-snowy.png";
        } 
        else if (rain > 0) {
            document.querySelector("#garden-image").src = "images/garden-rainy.png";
        } 
        else {
            document.querySelector("#garden-image").src = "images/garden-clear.png";
        }

    } catch (error) {
        console.error("Error:", error);

        document.querySelector("#temperature").textContent = "Weather could not load.";
        document.querySelector("#message").textContent = "Please try refreshing the page.";
    }
}
/*
 Image credit: Images are all generated using AI
 */
getWeather();