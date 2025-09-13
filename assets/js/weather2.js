console.log("weather details of a city using an API")
const cityCoords={
  "bangalore": { lat: 12.97, lon: 77.59 },
  "delhi": { lat: 28.61, lon: 77.20 },
  "mumbai": { lat: 19.07, lon: 72.87 },
  "london": { lat: 51.51, lon: -0.13 },
  "new york": { lat: 40.71, lon: -74.01 }
};
let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener("click",()=>{
    let city=document.getElementById('cityInput').value.toLowerCase();
    if (!cityCoords[city]) {
        document.getElementById('weather').innerHTML="City not found in list";
        return;
    }
    let coords=cityCoords[city];
    let url=`https://api.open-meteo.com/v1/forecast?latitude=${coords.lat}&longitude=${coords.lon}&current_weather=true`;
    //call the API using fetch
    fetch(url)
    .then(response=>response.json())
    .then(data=>{
        if(data.current_weather){
        document.getElementById('weather').innerHTML=`
        <h3>Weather in the city ${city}</h3>
        <p>Temperature: ${data.current_weather.temperature}</p>
        <p>Windspeed: ${data.current_weather.windspeed}km/h</p>`
          }else{
            document.getElementById("weather").innerHTML="Weather data not available";
        }
    })
    .catch(error=>{
        console.log(error)
        document.getElementById("weather").innerHTML="Error fetching weather data";
    }) });
