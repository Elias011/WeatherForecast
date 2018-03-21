// (function($, document, window){
	
// 	$(document).ready(function(){

// 		// Cloning main navigation for mobile menu
// 		$(".mobile-navigation").append($(".main-navigation .menu").clone());

// 		// Mobile menu toggle 
// 		$(".menu-toggle").click(function(){
// 			$(".mobile-navigation").slideToggle();
// 		});

// 		var map = $(".map");
// 		var latitude = map.data("latitude");
// 		var longitude = map.data("longitude");
// 		if( map.length ){
			
// 			map.gmap3({
// 				map:{
// 					options:{
// 						center: [latitude,longitude],
// 						zoom: 15,
// 						scrollwheel: false
// 					}
// 				},
// 				marker:{
// 					latLng: [latitude,longitude],
// 				}
// 			});
			
// 		}
// 	});

// 	$(window).load(function(){

// 	});

// })(jQuery, document, window);


//let x = findLocation.value;
// let find = document.getElementById("find-button");
 function handelCityName(){
	let findLocation = document.getElementById("find-location-co").value;
    document.getElementById("location-name").innerHTML = findLocation;
    let nameCity = 'https://api.openweathermap.org/data/2.5/weather?q=' + findLocation + '&appid=6d8108cde3bc437877134c8a14c900ad&units=metric'; // here get the city name and make from API a link to can get all the information weather for the city in the input box
    let xReq = new XMLHttpRequest();
    xReq.open('GET',nameCity);
      xReq.onload =function result(){
        let xData = JSON.parse(xReq.responseText);
        let temperatureValue = document.getElementById("temperatureValue");
        temperatureValue.innerHTML = xData.main.temp;  
        let curentWeatherIcon = document.getElementById("curentWeatherIcon");
        let icon = "./images/icons/" + xData.weather[0].icon + ".svg";
        curentWeatherIcon.src = icon;
        let windSpeed = document.getElementById("wind-speed");
        windSpeed.innerHTML = xData.wind.speed + "m/s";
        let windDirection = document.getElementById("wind-direction");
        function  toTextualDescription(degree){
            if (degree>337.5) return 'Northerly';
            if (degree>292.5) return 'North Westerly';
            if(degree>247.5) return 'Westerly';
            if(degree>202.5) return 'South Westerly';
            if(degree>157.5) return 'Southerly';
            if(degree>122.5) return 'South Easterly';
            if(degree>67.5) return 'Easterly';
            if(degree>22.5){return 'North Easterly';}
            return 'Northerly';
        }
        windDirection.innerHTML = toTextualDescription(xData.wind.deg);
        //descriptionValue.innerHTML = xData.weather[0].main; 
        
        //humidityValue.innerHTML = xData.main.humidity;  
        //windSpeedValue.innerHTML = xData.wind.speed;
    };
     xReq.send();
     handleForecastWeather();
}

function handleForecastWeather() {
    let findLocation = document.getElementById("find-location-co").value;
    let nameCity ='https://api.openweathermap.org/data/2.5/forecast?q='+ findLocation +'&appid=6d8108cde3bc437877134c8a14c900ad&units=metric';
    let xReq = new XMLHttpRequest();
    xReq.open('GET',nameCity);
      xReq.onload =function result(){
        let xData = JSON.parse(xReq.responseText);
        let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
        for(i in xData.list){
            console.log(xData.list[i].dt_txt)
        }
        let d1 = new Date(`${xData.list[8].dt_txt}`);
        let day1 = document.getElementById('day1');
        day1.innerHTML = days[d1.getDay()];
        let iconDay1 = document.getElementById("icon_day1");
        iconDay1.src = "./images/icons/" + xData.list[8].weather[0].icon + ".svg";
        let d2 = new Date(`${xData.list[16].dt_txt}`);
        let day2 = document.getElementById('day2');
        day2.innerHTML = days[d2.getDay()];
        let iconDay2 = document.getElementById("icon_day2");
        iconDay2.src = "./images/icons/" + xData.list[16].weather[0].icon + ".svg";
        let d3 = new Date(`${xData.list[24].dt_txt}`);
        let day3 = document.getElementById('day3');
        day3.innerHTML = days[d3.getDay()];
        let iconDay3 = document.getElementById("icon_day3");
        iconDay3.src = "./images/icons/" + xData.list[24].weather[0].icon + ".svg";
        let d4 = new Date(`${xData.list[32].dt_txt}`);
        let day4 = document.getElementById('day4');
        day4.innerHTML = days[d4.getDay()];
        let iconDay4 = document.getElementById("icon_day4");
        iconDay4.src = "./images/icons/" + xData.list[32].weather[0].icon + ".svg";
      };
      xReq.send();
}

function dayAndDate(){
    let currentDate = document.getElementById("currentDate");
    let currentDay = document.getElementById("currentDay");
    let d = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    currentDay.innerHTML = days[d.getDay()];
    let months = ["January", "February", "March", "April", "May","June","July", "August", "September", "October", "November", "December"];
     currentDate.innerHTML =d.getDate() + " " + months[d.getMonth()];
}
dayAndDate();
