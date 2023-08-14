'use client';
import WeatherCard from './components/weather-card'
import WeatherSearch from './components/weather-search'
import styles from './page.module.css'
import { getWeather } from './services/weather-service';
import { useState, useEffect } from 'react';

const extractWeatherDataFromResponse = (data => {
  let obj = {};
  obj.description = data.current.weather_descriptions[0];
  obj.iconUrl = data.current.weather_icons[0];
  obj.temp = data.current.temperature;
  obj.precip = data.current.precip;
  obj.city = data.location.name;
  return obj;
});

export default function Home() {
  const [weatherData, setWeatherData] = useState({});
  const [city, setCity] = useState('San Diego');

  useEffect(() => {
    getWeather(city).then((data) => {
      setWeatherData(extractWeatherDataFromResponse(data));
    });
    return () => {};
  }, [city]);

  const onWeatherSearchSubmit = (city) => {
    setCity(city);
  }

  return (
    <main className={styles.main}>
      <div className={styles.weatherHeader} >
        <div className={styles.weatherTitle}>
          Weather App
        </div>
        <WeatherSearch handleSubmit={(city) => onWeatherSearchSubmit(city)} />
      </div>
      <WeatherCard
        description={weatherData.description}
        iconUrl={weatherData.iconUrl}
        temp={weatherData.temp}
        precip={weatherData.precip}
        city={city}
      />
    </main>
  )
}
