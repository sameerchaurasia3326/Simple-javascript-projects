const apiKey = '195740a5f12d099d3a4e964cffba2dc9';  // Replace with your OpenWeatherMap API key

// Function to fetch and display the weather data
function getWeather() {
    const city = document.getElementById('city').value;
    if (city === '') {
        alert('Please enter a city name');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            if (data.cod !== 200) {
                alert('City not found!');
                return;
            }

            const weatherInfo = `
                <h2>${data.name}, ${data.sys.country}</h2>
                <p><strong>Weather:</strong> ${data.weather[0].description}</p>
                <p><strong>Temperature:</strong> ${data.main.temp}°C</p>
                <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
                <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
            `;

            document.getElementById('weather-info').innerHTML = weatherInfo;
        })
        .catch(error => {
            console.error('Error fetching data: ', error);
            alert('An error occurred while fetching weather data');
        });
}
