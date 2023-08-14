import { weatherServiceKey } from './apiKeys';

const url = "http://api.weatherstack.com/current";

export async function getWeather(city) {

    const response = await fetch(`${url}?access_key=${weatherServiceKey}&query=${city}&units=f`, {
        method: "GET",
        mode: "cors",
        cache: "no-cache",
        credentials: "same-origin",
    });
    return response.json();
}