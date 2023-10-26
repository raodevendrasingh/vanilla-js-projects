
const API_KEY = "29dffdaee2dd9f3907b59dfc647e3d63";

const weatherData = document.getElementById('weather-data')

const inputCity = document.getElementById('cityname') 

const formElement = document.querySelector('form')

formElement.addEventListener('submit', function (e){
    e.preventDefault();
    const cityValue = inputCity.value; 
    // console.log(cityValue)
    getWeatherData(cityValue)
})

async function getWeatherData(cityValue){
    try{
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${API_KEY}&units=metric`)

        if (!response.ok){
            throw new Error('Network response not OK!')
        }
        const data = await response.json()

        const temperature = Math.round(data.main.temp);
        const description = data.weather[0].description
        const icon = data.weather[0].icon

        const details = [
            `Feels Like: ${Math.round(data.main.feels_like)}°C`,
            `Humidity: ${data.main.humidity}%`,
            `Wind Speed: ${data.wind.speed} m/s`
        ]

        weatherData.querySelector('.icon').innerHTML = `<img src="https://openweathermap.org/img/wn/${icon}.png" alt="weather-icon">`;
        weatherData.querySelector('.temperature').textContent = `${temperature}°C`
        weatherData.querySelector('.description').textContent = `${description}`

        weatherData.querySelector('.details').innerHTML = details.map(
            (detail) => `<div class="flex-1 p-5 m-2 bg-gray-900 rounded-lg">${detail}</div>`
        ).join('')
        
    }
    catch(error){
        weatherData.querySelector('.icon').innerHTML = '';
        weatherData.querySelector('.temperature').textContent = ''
        weatherData.querySelector('.description').textContent = 'Please Enter a Valid City!'

        weatherData.querySelector('.details').innerHTML = ''
    }
}