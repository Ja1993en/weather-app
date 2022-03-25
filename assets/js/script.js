var input = document.querySelector('.input_text');
var main = document.querySelector('#name');
var humidity = document.querySelector('.humidity');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var wind = document.querySelector('.wind');
var button = document.querySelector('.submit'); 
var weatherContainer = document.getElementById('container');

day = ['monday','thuesday','wensday','thursday','friday','saturday','sunday' ];
// date.innerText = moment().format('l');
button.addEventListener('click',function() {
    var requestUrl = 'https://api.openweathermap.org/data/2.5/forecast/?q=' + input.value + '&appid=50a7aa80fa492fa92e874d23ad061374&units=imperial';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
           
            console.log(data)
            for (let i =1; i < 40; i+=8) {
             
                var cityName = document.createElement('h2');
                var date = document.createElement('h3')
                var weatherIcon = document.createElement('img')
                var cityTemp = document.createElement('li');
                var cityDesc = document.createElement('li');
                var cityWind = document.createElement('li');
                // const forecastDateEl = document.createElement("li");
                

                var tempValue = Math.round(data.list[i].main.temp);
                var nameValue = data.city.name;
                var descValue = data.list[i].weather[0].description;
                var windValue = Math.round(data.list[i].wind.speed);
                var iconValue = data.list[i].weather[0].icon
                var dateValue = data.list[i].dt
                var day =new Date(dateValue*1000);
                var dayName = day.toDateString();
                

               
            
                
                // console.log(descValue)
                    cityName.textContent = nameValue;
                    cityTemp.textContent = "Temp - "+tempValue;
                    cityDesc.textContent = "desc - "+descValue;
                    cityWind.textContent = "Windspeed - "+windValue+" Mph";
                    weatherIcon.src ="https://openweathermap.org/img/wn/"+ iconValue + ".png";
                    date.textContent =  day.toDateString();
                    
                    
//                 desc = "Desc - " + descValue;
//                 temp = "Temp - " + tempValue;
                    weatherContainer.append(cityName);
                    weatherContainer.append(date);
                    weatherContainer.appendChild(weatherIcon);
                    weatherContainer.appendChild(cityTemp);
                    cityTemp.appendChild(cityWind);
                    cityWind.appendChild(cityDesc);
                    // cityDesc.appendChild(date);
                 


                input.value = "";
                
                // var weatherContainer = document.createElement('div');
                // var weatherCard = document.createElement('container');
                // var nameValue = document.createElement('h3');
                
              
                // nameValue.textContent = data.city.name;
                // weatherCard.append(nameValue);
            
                // weatherContainer.appendChild(nameValue);
                // createTableRow.appendChild(tableData);
                // weatherContainer.appendChild(createTableRow);
                

            }

        });
    
        

});

