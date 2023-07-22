import WeatherCard from "@/components/weather-card";
import SearchBox from "@/components/search-box";
import styles from './page.module.css';

const todaysWeather = {
  weather: "cloudy",
  temperatureC: 20,
  date: "2023-07-22"
};

const next10DaysWeather = [
  {
    weather: "sunny",
    temperatureC: 20,
    date: "2023-07-23"
  },
  {
    weather: "cloudy",
    temperatureC: 20,
    date: "2023-07-24"
  },
  {
    weather: "sunny",
    temperatureC: 20,
    date: "2023-07-25"
  },
  {
    weather: "cloudy",
    temperatureC: 20,
    date: "2023-07-26"
  },
  {
    weather: "sunny",
    temperatureC: 20,
    date: "2023-07-27"
  },
  {
    weather: "cloudy",
    temperatureC: 20,
    date: "2023-07-28"
  },
  {
    weather: "sunny",
    temperatureC: 20,
    date: "2023-07-29"
  },
  {
    weather: "cloudy",
    temperatureC: 20,
    date: "2023-07-30"
  },
  {
    weather: "sunny",
    temperatureC: 20,
    date: "2023-07-31"
  },
  {
    weather: "cloudy",
    temperatureC: 20,
    date: "2023-08-01"
  }
]

export default function Home() {
  return (
    <div>
      <div  className={styles.headerContainer}>
        <div className={styles.headerText}>Weather App</div>
        <SearchBox />
      </div>
      
      <div>
        <div className={styles.sectionHeaderText}>Current weather in San Diego, CA</div>
      <WeatherCard
        {...todaysWeather}
      />
      </div>
      <div>
        <div className={styles.headerText}>Next 10 days in San Diego, CA</div>
        <div className={styles.next10DaysContainer}>
          {next10DaysWeather.map( card => <WeatherCard {...card} /> )}
        </div>
      </div>
      <a target="_blank" href="https://icons8.com/icon/132/search">Search</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
    </div>
   
  );
}
