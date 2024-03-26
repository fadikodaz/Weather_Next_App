'use client'
import React, { useEffect, useState } from 'react'
import Header from '@/components/Header/page'
import ForeCastData from '@/components/ForecastWeather/page'
import CurrentWeather from '@/components/CurrentWeather/page'

const Home = () => {

  const [querryValue, setQuerry] = useState(null);
  const [result, setResult] = useState(null)
  const API_KEY = "bbbed311fdc2e4ac5c403748686d3eae";

  const WeatherData = async () => {
    const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${querryValue != null ? querryValue : 'okara'}&appid=${API_KEY}`)
    const data = await resp.json()
    setResult(data)
  }

  useEffect(() => {
    WeatherData()
  }, [querryValue])

  const QuerryHandler = (querry) => {
    setQuerry(querry)
  }
  

  return (
    <>
    <Header data={result} onQuerry={QuerryHandler} />
    <CurrentWeather data={result} />
    <ForeCastData querry={querryValue}/>
    </>
  )
}

export default Home