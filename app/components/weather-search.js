import { useState } from 'react';
import styles from './weather-search.module.css';

// todo disable button when empty
export default function WeatherSearch({ handleSubmit }) {
    const [city, setCity] = useState('');

    const onSubmit = () => {
        handleSubmit(city);
    }

    return (
        <div className={styles.weatherSearchContainer}>
            <input className={styles.weatherSearchInput} type="text" value={city} onChange={(e) => setCity(e.target.value)} />
            <button className={styles.weatherSearchButton} onClick={onSubmit}>Search</button>
        </div>
    );
}