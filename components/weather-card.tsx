import { parseISO, format } from 'date-fns';
import styles from './weather-card.module.css';

// if current date, format LLLL d, yyyy
// if future date just want numerical month and date
function WeatherDate({ dateString } : { dateString: string }) {
    const date = parseISO(dateString);
    const todaysDate = new Date(Date.now());
    if (date.getUTCDate() === todaysDate.getUTCDate()) {
        return <time dateTime={dateString}>{format(date, 'LLLL d, yyyy')}</time>
    } else {
        return <time dateTime={dateString}>{format(date, 'M/d')}</time>
    }
}

export default function WeatherCard({
    weather,
    temperatureC,
    date
  }: {
    weather: string,
    temperatureC: number,
    date: string
  }) {
    return(
        <div className={styles.weatherCardContainer}>
            <h2>{weather}</h2>
            <div className={styles.temperature}>{temperatureC}</div>
            <WeatherDate dateString={date} />
        </div>
    );
}