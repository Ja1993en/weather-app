var input = document.querySelector('.input_text');
var icon = document.querySelector('.icon');
var main = document.querySelector('#name');
var temp = document.querySelector('.temp');
var wind = document.querySelector('.wind');
var desc = document.querySelector('.desc');
var clouds = document.querySelector('.clouds');
var button= document.querySelector('.submit');


button.addEventListener('click', function(name){
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid=de1772d8463221105b9952651b1a38c7')
.then(response => response.json())
.then(data => {
    console.log(data)
  var tempValue = data['main']['temp'];
  var nameValue = data['name'];
  var descValue = data['weather'][0]['description'];
  var iconValue = data['weather'][0]['icon'];
  var windValue = data['wind']['speed'];

  wind.innerHTML = "Windspeed - "+windValue;
  icon.innerHTML = iconValue;
  main.innerHTML = nameValue;
  desc.innerHTML = "Desc - "+descValue;
  temp.innerHTML = "Temp - "+tempValue;
  input.value ="";

})

.catch(err => alert("Wrong city name!"));
})

// var iconValue = data['weather'][0]['icon'];
// //   var timeValue = data['sys']
//   var windValue = data['wind']['speed'];
//   main.innerHTML = nameValue;
//   wind.innerHTML = "Wind - "+windValue;
//   icon.innerHTML = iconValue;



// icons: {
//     'Rain': require('../assets/regnerisch.png'),
//     'Clear': require('../assets/sonne.png'),
//     'Clouds': require('../assets/wolkig.png'),
//     'Snow': require('../assets/schnee.png'),
//     'Drizzle':require('../assets/regnerisch.png'),
//     'Thunderstorm':require('../assets/regnerisch.png')
// },          
//  fetch('https://api.openweathermap.org/data/2.5/weather?lat=32.779167&lon=-96.808891&appid=de1772d8463221105b9952651b1a38c7')
// .then ((response) =>{
//     return response.json();
// })
// .then ((data) =>{

//     // for(var i = 0; i < data.length; i++){
//        console.log(data)
    
//     // }
  
// })
// .catch(function(error){

//     console.error('You have entered wrong city')

// });

