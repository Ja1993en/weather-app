var input = document.querySelector('.input_text');
const button = document.querySelector('.submit');
const cityName = document.querySelector('.city-name')
const coord = document.querySelector('.coord')
const current = document.querySelector('.current-weather');
var weatherContainer = document.querySelector('.current-container');
// const lat = document.createElement('h1');
const word = document.createElement('a');
const num = document.createElement('a');
const city = document.createElement('h1');


var weatherDashboard = () => {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast/?q=' + input.value + '&appid=50a7aa80fa492fa92e874d23ad061374&units=imperial';
  
    fetch(requestUrl)
        .then(response => {
            return response.json();
        })
        .then(data =>{
            console.log(data); 
         
            
// getting coordinates to set in next API
            word.textContent = data.city.coord.lat;
            num.textContent = data.city.coord.lon;
           city.textContent = data.city.name;

            
            cityName.appendChild(city);
            cityName .appendChild(word);
            coord.append(num);
            weatherApp(word,num);
            input = "";

        })
        .catch(err => {
            console.log(err);
        })
}

const weatherApp = () => {
    console.log(word.textContent);
    console.log(num.textContent);
    fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${word.textContent}&lon=${num.textContent}&exclude=hourly&appid=a16a60861e1b33976ee908b3b92d981f&units=imperial`)
    .then(response =>{
        return response.json();
    })
    .then(data =>{
        console.log(data);
        for (let i=0; i < 6; i++){

            //setting Day Names 
            var allDays= ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var d = new Date(data.daily[i].dt * 1000); // to get the DateTime. 
            var dayName = allDays[d.getDay()]; // It will give day index, and based on index we can get day name from the array. 
            console.log(dayName)
            
            //setting all elements
            var minTemp = document.createElement('li');
            var maxTemp = document.createElement('li');
            var humidity = document.createElement('li');
            var windSpeed = document.createElement('li');
            var uv = document.createElement('li');
            var weatherIcon = document.createElement('img');
            var days = document.createElement('h1')
           
            //Getting information from API
            minTempValue = Math.round(data.daily[i].temp.min);
            maxTempValue = Math.round(data.daily[i].temp.max);
            humidityValue = data.daily[i].humidity
            windSpeedValue = data.daily[i].wind_speed;
            uvValue = data.daily[i].uvi;
            iconValue = data.daily[i].weather[0].icon;
            dayNameValue = dayName;

            //setting all the Values
            days.textContent = dayName
            minTemp.textContent = " Min Temp - "+ minTempValue+ " °";
            maxTemp.textContent = " Max Temp - "+ maxTempValue+ " °";
            humidity.textContent = "Humidity "+humidityValue;
            windSpeed.textContent = "Windspeed - "+windSpeedValue+"Mph";
            uv.textContent = uvValue;
           weatherIcon.src ="https://openweathermap.org/img/wn/"+ iconValue + ".png";
       
          current.appendChild(weatherContainer);
          weatherContainer.appendChild(days);
          weatherContainer.appendChild(weatherIcon);
          weatherContainer.appendChild(minTemp);
          weatherContainer.appendChild(maxTemp);
          weatherContainer.appendChild(humidity);
          weatherContainer.appendChild(windSpeed);
          weatherContainer.appendChild(uv);
          console.log(uv.textContent);
        //   uv.style.color ="red"


          
        //   let uv = document.createElement("li");
                        
                        // When UV Index is good, shows green, when ok shows yellow, when bad shows red
                      
                        if ( data.daily[i].uvi < 4 ) {
                            uv.style.color="green";
 
                        }
                        else if (data.daily[i].uvi < 7) {
                            uv.style.color = "yellow";
                         } else {
                            uv.style.color = "red";
                        }
                      
                


        
            
        }
        // city name, the date, an icon representation of weather conditions, the temperature, the humidity, the wind speed, and the UV index
    })
    .catch(err =>{
        console.log(err);
    })
}

button.addEventListener('click',function(){
 weatherDashboard();

})

