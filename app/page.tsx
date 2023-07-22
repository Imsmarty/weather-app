import WeatherCard from "@/components/weather-card";
import SearchBox from "@/components/search-box";
import styles from './page.module.css';

export default function Home() {
  return (
    <div>
      <div>Weather App</div>
      <SearchBox />
      <div>
        <div>Current weater in San Diego, CA</div>
      <WeatherCard weather="cloudy" temperatureC={20} date="2023-07-22"></WeatherCard>
      </div>
      <div>
        <div>Next 10 days in San Diego, CA</div>
        <div className={styles.next10DaysContainer}>
          <WeatherCard weather="sunny" temperatureC={21} date="2023-07-23" />
          <WeatherCard weather="sunny" temperatureC={21} date="2023-07-24" />
          <WeatherCard weather="sunny" temperatureC={21} date="2023-07-25" />
          <WeatherCard weather="sunny" temperatureC={21} date="2023-07-26" />
          <WeatherCard weather="sunny" temperatureC={21} date="2023-07-27" />
          <WeatherCard weather="sunny" temperatureC={21} date="2023-07-28" />
          <WeatherCard weather="sunny" temperatureC={21} date="2023-07-29" />
          <WeatherCard weather="sunny" temperatureC={21} date="2023-07-30" />
          <WeatherCard weather="sunny" temperatureC={21} date="2023-07-31" />
          <WeatherCard weather="sunny" temperatureC={21} date="2023-08-01" />
        </div>
      </div>
      <a target="_blank" href="https://icons8.com/icon/132/search">Search</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </div>
   
  );
}
