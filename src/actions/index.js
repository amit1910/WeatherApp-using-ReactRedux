import axios from 'axios';

const API_KEY = "b4a6eb666cd3e00221b660c9f96a8343";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;


export const FETCH_WEATHER = 'FETCH_WEATHER';

//actionCreator
export function fetchWeather(city){
    const url = `${ROOT_URL}&q=${city},us`;
    const request = axios.get(url);

    console.log('request:', request );  

    return{
        type:FETCH_WEATHER,
        payload: request
       
    };
}