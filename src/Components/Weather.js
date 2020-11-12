import React, { useState, useEffect } from 'react'


export default function Weather() {
  const [weatherData, setWeatherData] = useState([])


    useEffect(() => {
      fetch('https://api.weatherbit.io/v2.0/current?city=Copenhagen&country=DK&key=de4ff00ad5a24948967c5a21d3892aea')
        .then((res) => res.json())
        .then((data) => setWeatherData(data))
        .catch((err) => console.log("Failed"))
      console.log(weatherData)
    }, [])

    return (
      <div className="container mt-3">
        <div className="row">
          <div className="col-6">
            <h1>Weather</h1>
            <h3>Showing the current weather in Copenhagen, Denmark.</h3>
            <p>Location: {weatherData.data[0].city_name}, {weatherData.data[0].country_code}</p>
            {/* <p>{JSON.stringify("Location: " + weatherData.city_name, weatherData.country_code)}</p> */}
            <p>Temperature: {weatherData.data[0].temp}°C</p>
            <p>Feels like: {weatherData.data[0].app_temp}°C</p>
          </div>
        </div>
      </div>
    );
}