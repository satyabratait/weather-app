const locationname = document.getElementById("location-name");
let locationtemp = document.getElementById("location-temp");
let locationfeels = document.getElementById("location-feels");
let locationother = document.getElementById("location-other");
let locationimage = document.querySelector(".location-info__image");

async function weather(query) {
  const response = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=${query}&aqi=no`
  )
    .then(function (res) {
      return res.json();
    })
    .catch((err) => alert("You entered Wrong city name"));

  locationname.value = `${response.location.name}`;
  locationtemp.innerHTML = response.current.temp_c;
  locationfeels.innerHTML = response.current.feelslike_c;

  let conditionvalue = response.current.condition.text;
  let tempvalue = response.current.temp_c;

  console.log(conditionvalue);
  console.log(tempvalue);

  if (response.current.is_day == 1) {
    if (conditionvalue == "Sunny" || conditionvalue == "Clear") {
      locationimage.src = "./assets/weather/weather-svg/animated/day.svg";
    } else if (
      conditionvalue == "Partly cloudy" ||
      conditionvalue == "Overcast"
    ) {
      locationimage.src =
        "./assets/weather/weather-svg/animated/cloudy-day-1.svg";
    } else if (conditionvalue == "Cloudy") {
      locationimage.src = "./assets/weather/weather-svg/animated/cloudy.svg";
    } else if (conditionvalue == "Rain" || conditionvalue == "Moderate rain") {
      locationimage.src = "./assets/weather/weather-svg/animated/rainy-4.svg";
    } else if (conditionvalue == "Heavy rain") {
      locationimage.src = "./assets/weather/weather-svg/animated/rainy-7.svg";
    } else if (conditionvalue == "Mist" || conditionvalue == "Moderate snow") {
      locationimage.src = "./assets/weather/weather-svg/animated/snowy-2.svg";
    } else if (conditionvalue == "Snow") {
      locationimage.src = "./assets/weather/weather-svg/animated/snowy-6.svg";
    }
  } else {
    if (conditionvalue == "Clear") {
      locationimage.src = "./assets/weather/weather-svg/animated/night.svg";
    } else if (
      conditionvalue == "Partly cloudy" ||
      conditionvalue == "Overcast"
    ) {
      locationimage.src =
        "./assets/weather/weather-svg/animated/cloudy-night-1.svg";
    } else if (conditionvalue == "Cloudy") {
      locationimage.src =
        "./assets/weather/weather-svg/animated/cloudy-night-3.svg";
    } else if (conditionvalue == "Rain" || conditionvalue == "Moderate rain") {
      locationimage.src = "./assets/weather/weather-svg/animated/rainy-4.svg";
    } else if (conditionvalue == "Heavy rain") {
      locationimage.src = "./assets/weather/weather-svg/animated/rainy-7.svg";
    } else if (conditionvalue == "Mist" || conditionvalue == "Moderate snow") {
      locationimage.src = "./assets/weather/weather-svg/animated/snowy-4.svg";
    } else if (conditionvalue == "Snow") {
      locationimage.src = "./assets/weather/weather-svg/animated/snowy-6.svg";
    }
  }

  console.log(response);
}

locationname.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    weather(e.target.value);
  }
});

(() =>{
  weather("Bhubaneswar");
})();
