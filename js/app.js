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
        descriptionValue.innerHTML = xData.weather[0].main; 
        windSpeedValue.innerHTML = xData.wind.speed;
}
xReq.send();
handleForecastWeather();
}

    //     let temperatureValue = document.getElementById("temperatureValue");
    //     temperatureValue.innerHTML = xData.main.temp;  
    //     let curentWeatherIcon = document.getElementById("curentWeatherIcon");
    //     let icon = "./images/icons/" + xData.weather[0].icon + ".svg";
    //     curentWeatherIcon.src = icon;
    //     let windSpeed = document.getElementById("wind-speed");
    //     windSpeed.innerHTML = xData.wind.speed + "m/s";
    //     let windDirection = document.getElementById("wind-direction");
    //     function  toTextualDescription(degree){
    //         if (degree>337.5) return 'Northerly';
    //         if (degree>292.5) return 'North Westerly';
    //         if(degree>247.5) return 'Westerly';
    //         if(degree>202.5) return 'South Westerly';
    //         if(degree>157.5) return 'Southerly';
    //         if(degree>122.5) return 'South Easterly';
    //         if(degree>67.5) return 'Easterly';
    //         if(degree>22.5){return 'North Easterly';}
    //         return 'Northerly';
    //     }
    //     windDirection.innerHTML = toTextualDescription(xData.wind.deg);
    //     //descriptionValue.innerHTML = xData.weather[0].main; 
        
    //     //humidityValue.innerHTML = xData.main.humidity;  
    //     //windSpeedValue.innerHTML = xData.wind.speed;
    // };
    //  xReq.send();
    //  ;
//}

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
        let tempDay1 = document.getElementById("temp_day1");
        tempDay1.innerHTML = Math.round(xData.list[8].main.temp) + "";
        let d2 = new Date(`${xData.list[16].dt_txt}`);
        let day2 = document.getElementById('day2');
        day2.innerHTML = days[d2.getDay()];
        let iconDay2 = document.getElementById("icon_day2");
        iconDay2.src = "./images/icons/" + xData.list[16].weather[0].icon + ".svg";
        let tempDay2 = document.getElementById("temp_day2");
        tempDay2.innerHTML =Math.round(xData.list[16].main.temp);
        let d3 = new Date(`${xData.list[24].dt_txt}`);
        let day3 = document.getElementById('day3');
        day3.innerHTML = days[d3.getDay()];
        let iconDay3 = document.getElementById("icon_day3");
        iconDay3.src = "./images/icons/" + xData.list[24].weather[0].icon + ".svg";
        let tempDay3 = document.getElementById("temp_day3");
        tempDay3.innerHTML = Math.round(xData.list[24].main.temp);
        let d4 = new Date(`${xData.list[32].dt_txt}`);
        let day4 = document.getElementById('day4');
        day4.innerHTML = days[d4.getDay()];
        let iconDay4 = document.getElementById("icon_day4");
        iconDay4.src = "./images/icons/" + xData.list[32].weather[0].icon + ".svg";
        let tempDay4 = document.getElementById("temp_day4");
        tempDay4.innerHTML = Math.round(xData.list[32].main.temp);
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

//Photos start form here
function awsomePhotos(photoKey){
    //the photos are change acording to the number of the curently day the week thats mean that the key of object = the number of the day
    let d = new Date();
    photoKey = d.getDay();
    let flowersApi = "https://pixabay.com/api/?key=8455558-58a99ccd0e878ead6f3916c5d&q=flowers&image_type=photo&pretty=true"
    let xReqF = new XMLHttpRequest();
    xReqF.open('GET', flowersApi);
    xReqF.onload = function result() {
        let xData = JSON.parse(xReqF.responseText);
        let flowers = document.getElementById("flowers");
        flowers.src = xData.hits[photoKey].previewURL;
    }
    xReqF.send();

    let citiesApi = "https://pixabay.com/api/?key=8455558-58a99ccd0e878ead6f3916c5d&q=cities&image_type=photo&pretty=true"
    let xReqC = new XMLHttpRequest();
    xReqC.open('GET', citiesApi);
    xReqC.onload = function result() {
        let xData = JSON.parse(xReqC.responseText);
        let flowers = document.getElementById("cities");
        flowers.src = xData.hits[photoKey].previewURL;
    }
    xReqC.send();

    let peopleApi = "https://pixabay.com/api/?key=8455558-58a99ccd0e878ead6f3916c5d&q=people&image_type=photo&pretty=true"
    let xReqP = new XMLHttpRequest();
    xReqP.open('GET', peopleApi);
    xReqP.onload = function result() {
        let xData = JSON.parse(xReqP.responseText);
        let people = document.getElementById("people");
        people.src = xData.hits[photoKey].previewURL;
    }
    xReqP.send();

    let winterApi = "https://pixabay.com/api/?key=8455558-58a99ccd0e878ead6f3916c5d&q=winter&image_type=photo&pretty=true"
    let xReqW = new XMLHttpRequest();
    xReqW.open('GET', winterApi);
    xReqW.onload = function result() {
        let xData = JSON.parse(xReqW.responseText);
        let winter = document.getElementById("winter");
        winter.src = xData.hits[photoKey].previewURL;
    }
    xReqW.send();

    let springApi = "https://pixabay.com/api/?key=8455558-58a99ccd0e878ead6f3916c5d&q=spring&image_type=photo&pretty=true"
    let xReqS = new XMLHttpRequest();
    xReqS.open('GET', springApi);
    xReqS.onload = function result() {
        let xData = JSON.parse(xReqS.responseText);
        let spring = document.getElementById("spring");
        spring.src = xData.hits[photoKey].previewURL;
    }
    xReqS.send();

    let autumnApi = "https://pixabay.com/api/?key=8455558-58a99ccd0e878ead6f3916c5d&q=autumn&image_type=photo&pretty=true"
    let xReqA = new XMLHttpRequest();
    xReqA.open('GET', autumnApi);
    xReqA.onload = function result() {
        let xData = JSON.parse(xReqA.responseText);
        let autumn = document.getElementById("autumn");
        autumn.src = xData.hits[photoKey].previewURL;
    }
    xReqA.send();

    let houseApi = "https://pixabay.com/api/?key=8455558-58a99ccd0e878ead6f3916c5d&q=house&image_type=photo&pretty=true"
    let xReqH = new XMLHttpRequest();
    xReqH.open('GET', houseApi);
    xReqH.onload = function result() {
        let xData = JSON.parse(xReqH.responseText);
        let house = document.getElementById("house");
        house.src = xData.hits[photoKey].previewURL;
    }
    xReqH.send();

    let wildlifeApi = "https://pixabay.com/api/?key=8455558-58a99ccd0e878ead6f3916c5d&q=wildlife&image_type=photo&pretty=true"
    let xReqWildlife = new XMLHttpRequest();
    xReqWildlife.open('GET', wildlifeApi);
    xReqWildlife.onload = function result() {
        let xData = JSON.parse(xReqWildlife.responseText);
        let wildlife = document.getElementById("wildlife");
        wildlife.src = xData.hits[photoKey].previewURL;
    }
    xReqWildlife.send();

    let balloonApi = "https://pixabay.com/api/?key=8455558-58a99ccd0e878ead6f3916c5d&q=balloon&image_type=photo&pretty=true"
    let xReqBalloon = new XMLHttpRequest();
    xReqBalloon.open('GET', balloonApi);
    xReqBalloon.onload = function result() {
        let xData = JSON.parse(xReqBalloon.responseText);
        let balloon = document.getElementById("balloon");
        balloon.src = xData.hits[photoKey].previewURL;
        //balloon.onClick = bigPhoto(xData.hits[photoKey].previewURL);
    }
    xReqBalloon.send();
}
awsomePhotos();

//This photo make the photo show big photo when choice a a one photo from the awsome photos
function bigPhoto(photoApi){
    event.preventDefault();
    let d = new Date();
    let photoKey = d.getDay();
    xReqPhotoChoice = new XMLHttpRequest();
    xReqPhotoChoice.open('GET', photoApi);
    xReqPhotoChoice.onload = function result(){
        let xData = JSON.parse(xReqPhotoChoice.responseText);
        let dialog = document.getElementById("dialog");
        dialog.src = xData.hits[photoKey].webformatURL;
        let modal = document.getElementById('modal-content1');
        modal.style.display = "block";
    }
    xReqPhotoChoice.send();
}
//This function make the big photo is visible when click on somewhere empty around the big photo
function visibleBigPhoto(){
 let bigPhoto = document.getElementById('modal-content1');
 bigPhoto.style.display = "none";
}

