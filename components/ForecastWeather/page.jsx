'use client'
import React, { useEffect, useState } from 'react'
import './ForeCastData.css'


const ForeCastData = ({querry}) => {
  
  const [active, setActive] = useState(0);
  const [ForeCastList, setForeCastList] = useState([]);
  const API_KEY = "bbbed311fdc2e4ac5c403748686d3eae";

  const WeatherData = async () => {
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${querry ? querry : 'okara'}&cnt=7&appid=${API_KEY}`)
    const data = await resp.json()
    setForeCastList(data.list)
  }

  useEffect(() => {
    WeatherData()
  }, [querry])
  
  // Create a new Date object for the current date
  const currentDate = new Date();
  // Extract the year, month, and day components
  const year = currentDate.getFullYear();
  const month = ('0' + (currentDate.getMonth() + 1)).slice(-2); // Adding 1 because January is 0
  const day = ('0' + currentDate.getDate()).slice(-2);
  // Format the date strin
  const formattedDate = `${year}-${month}-${day}`;
  // Define an array of weekday names
  const weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  // Extract the day of the week component
  const dayOfWeek = weekdays[currentDate.getDay()]

  const arr = [
    { F_name : 'Monday',    H_name : 'Mon' },
    { F_name : 'Tuesday',   H_name : 'Tue' },
    { F_name : 'Wednesday', H_name : 'Wed' },
    { F_name : 'Thursday',  H_name : 'Thu' },
    { F_name : 'Friday',    H_name : 'Fri' },
    { F_name : 'Saturday',  H_name : 'Sat' },
    { F_name : 'Sunday',    H_name : 'Sun' },
  ]
// ----------------------------
  let boxes = arr.map((e,id)=>{

    const list = ForeCastList[id]
    const icon = list?.weather[0]?.icon
    const ICON_URL = `https://openweathermap.org/img/wn/${icon}@2x.png`

    return(

      <div key={id} onClick={()=>{setActive(id)}} className={` ${active === id ? 'FullBox' : 'SmallBox'}`}>

        <div className="Detailheader">
              <h4>{active === id ? e.F_name : e.H_name}</h4>
              <span className='time'>{dayOfWeek === e.F_name ? formattedDate : querry || 'Okara'}</span>
        </div>
        <div className="weather_Temp_Condi">
              <h1>{list?.main?.temp ? Math.round(list?.main?.temp - 273.15) : '---'}°</h1>
              {
                icon
                ?
                (
                  <img className='img' src={ICON_URL} alt="Weather Images" />
                )
                :
                '...'
              }
              
        </div>
        <div className="Weather_Info">
                <p>Real Feel<span>{list?.main?.feels_like ? Math.round(list?.main?.feels_like - 273.15) : '---'}°</span></p>
                <p>Wind<span>{list?.wind?.speed} Km/h</span></p>
              <div className='rows'>
                <p>Humidity<span>{list?.main?.humidity}%</span></p>
              </div>
        </div>

      </div>
    )
  })


  return (
    <>
      <div className='weatherNav'>
        <p>Next 7 days</p>
        <span>forecast</span>
      </div>
      <div className='Wrapper'>
          {boxes}
      </div>
    </>
  )
}

export default ForeCastData