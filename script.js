// access all the DOM Elements
let userInput=document.querySelector(".search-city")
let tempEle=document.querySelector(".temp")
let ImgEle=document.querySelector(".weather-img")
let HumidityEle=document.querySelector(".humidity")
let WindEle=document.querySelector(".wind-speed")
let cityName=document.querySelector(".location")

let apiKey='005f9821985fbc64ddad9ab85e12f17e'

function displayWeather(){
    let city=userInput.value
    if(city!==""){
        let weatherInfo=fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)
        weatherInfo.then(async(data)=>{
            let res=await data.json()
            console.log(res)
            const {temp,humidity}=res.main
            const {icon}=res.weather[0]
            const {speed}=res.wind
            tempEle.innerHTML=`<h3 class="temp">${temp}<span>&deg;</span>c</h3>`
            HumidityEle.innerHTML=`<p class="humidity">Humidity: <span>${humidity}%</span></p>`
            cityName.innerHTML=`<p class="location">Location: <span>${res.name}</span></p>`
            ImgEle.src=`https://openweathermap.org/img/wn/${icon}@2x.png`
            WindEle.innerHTML=`<p class="wind-speed">windspeed: <span>${speed} km/h</span></p>`
        }).catch((err)=>{
            console.log(err)
        })
    }else{
        alert("enter proper city")
    }
}