'use client'
import React, { useState } from 'react'
import './CurrentWeather.css'

const CurrentWeather = ({data}) => {

  const wind = data?.wind?.speed
  const temp = data?.main?.temp
  const icon = data?.weather[0]?.icon
  const feel = data?.main?.feels_like
  const visibility = data?.visibility
  const humidity = data?.main?.humidity
  const Pressure = data?.main?.pressure
  const description = data?.weather[0]?.description

  const [time, setTime] = useState(null);
  const ICON_URL = `https://openweathermap.org/img/wn/${icon}@2x.png`

  setInterval(() => {

    let currentDate = new Date();
    let hours = currentDate.getHours();
    let minutes = currentDate.getMinutes();
    let AM_PM = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    let formattedTime = hours + ":" + (minutes < 10 ? '0' : '') + minutes + " " + AM_PM;
    setTime(formattedTime)
    
  }, 1000);

  return (
    <div className='currentDataWrapper'>
      <div className="currentHeader">
        <h4>Current weather</h4>
        <p className='time'>{time}</p>
      </div>
      <div className="contentSection">
            <img className='img' src={ICON_URL} alt="WeatherIcon" />
            <h1 className='temp'>{temp ? Math.round(temp - 273.15) : '---'}°</h1>
            <div className="conditon">
                <h4>{description ? description : '---'}</h4>
                <p>Feels like {feel ? Math.round(feel - 273.15) : '---'}°</p>
            </div>
      </div>
      <p className='over_View'>The skies will be mostly clear. The low will be 15°.</p>
      <div className="weatherCondtionSection">
            <div className="box wind">
                <p>Wind</p>
                <strong>{wind ? wind : '---'} km/h</strong>
            </div>
            <div className="box humidity">
                <p>Humidity</p>
                <strong>{humidity ? humidity : '---'}%</strong>
            </div>
            <div className="box visibility">
                <p>visibility</p>
                <strong>{visibility ? (visibility / 1000) : '---'} km</strong>
            </div>
            <div className="box Pressure">
                <p>Pressure</p>
                <strong>{Pressure ? Pressure : '---'} mb</strong>
            </div>
      </div>
    </div>
  )
}

export default CurrentWeather