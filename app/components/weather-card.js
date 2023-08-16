import styles from './weather-card.module.css';

export default function WeatherCard({
    description,
    iconUrl,
    city,
    temp,
    precip
}) {
    return (
        <div className={styles.weatherCardWrapper} id="weather-app-card">
            <div className={styles.weatherCardTitle} id="weather-app-card-title">
                Current weather in {city}
            </div>
            <div className={styles.weatherCardContainer} id="weather-app-card-container">
                <div className={styles.weatherCardItem} id="weather-app-card-item-image-container">
                    <div id="weather-app-card-item-description">{description}</div>
                    <img
                        src={iconUrl}
                        height={144}
                        width={144}
                        alt={description}
                        id="weather-app-card-item-image"
                    />
                </div>
                <div className={styles.weatherCardItem} id="weather-app-card-item-temperature">
                    Temperature
                    <div className={styles.weatherCardItemContent}>
                        {temp}° F
                    </div>
                </div>
                <div className={styles.weatherCardItem} id="weather-app-card-item-precipitation">
                    Precipitation
                    <div className={styles.weatherCardItemContent}>
                        {precip}%
                    </div>
                </div>
            </div>
        </div>
    );
}