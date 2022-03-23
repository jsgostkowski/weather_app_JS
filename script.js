const API_KEY = "08b83c7ca6e58a78ab21a37ae7409641"
const form = document.querySelector(".form")
const list = document.querySelector(".wrapper")
const img = document.querySelector(".img")
const temp = document.querySelector(".temp")
const description = document.querySelector(".description")
const humidity = document.querySelector(".humidity")
const param_1 = document.querySelector(".param_1")
const param_2 = document.querySelector(".param_2")
const param_3 = document.querySelector(".param_3")
const param_4 = document.querySelector(".param_4")
const city_name = document.querySelector(".city_name")

const cities = []

const fetchWeather = async (city)=> {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pl&units=metric&appid=${API_KEY}`
   const res = await fetch(url)
   const data = await res.json()
   console.log(data)
   cities.push(data)
   return data
    // fetch(url, {
    //     method: "POST",
    //     headers: {
    //         "Content-Type": "application/json"
            
    //     }
    //     body: JSON.stringify({klucz: "wartosc"})
    // })
}

form.addEventListener("submit", async (event)=>{
    event.preventDefault()
    //console.log(event)
    const input = event.target[0].value
   const city = await fetchWeather(input)
   //console.log(city)
    city_name.innerHTML = city.name
    const icon = city.weather[0].icon
    img.src = `http://openweathermap.org/img/wn/${icon}@2x.png`
    description.innerHTML = city.weather[0].description
    temp.innerHTML = city.main.temp + '°C'
    param_1.innerHTML = city.main.pressure+'hPa'
    param_2.innerHTML = city.main.feels_like + '°C'
    param_3.innerHTML = city.wind.speed+'m/S'
    param_4.innerHTML = city.main.humidity +'%'
})

//console.log(form)