let locationname = document.getElementById("location-name");
let locationtemp = document.getElementById("location-temp");
let locationfeels = document.getElementById("location-feels");

async function weather() {
    const response = await fetch(
        "http://api.weatherapi.com/v1/current.json?key=0c80b2b56f1943ada19100744230103&q=London&aqi=no"
    ).then(function (res) {
        return res.json();
    });
    // .then(function(data){
    //     console.log(data);
    // })

    locationname.innerHTML = response.location.name;
    locationtemp.innerHTML = response.current.temp_f;
    locationfeels.innerHTML = response.current.feelslike_f;

    console.log(response);

}
weather();