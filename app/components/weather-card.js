import styles from './weather-card.module.css';

export default function WeatherCard({
    description,
    iconUrl,
    city,
    temp,
    precip
}) {
    return (
        <div className={styles.weatherCardWrapper}>
            <div className={styles.weatherCardTitle}>
                Current weather in {city}
            </div>
            <div className={styles.weatherCardContainer}>
                <div className={styles.weatherCardItem}>
                    {description}
                    <img
                        src={iconUrl}
                        height={144}
                        width={144}
                        alt=""
                    />
                </div>
                <div className={styles.weatherCardItem}>
                    Temperature
                    <div className={styles.weatherCardItemContent}>
                        {temp}° F
                    </div>
                </div>
                <div className={styles.weatherCardItem}>
                    Precipitation
                    <div className={styles.weatherCardItemContent}>
                        {precip}%
                    </div>
                </div>
            </div>
        </div>
    );
}