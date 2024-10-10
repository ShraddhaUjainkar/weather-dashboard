import axios from 'axios';

export const fetchWeather = async (location) => {
    try {
        const response = await axios.get(
            `${process.env.VUE_APP_WEATHER_API_URL}/${process.env.VUE_APP_CURRENT_JSON}`, {
                params: {
                    key: process.env.VUE_APP_WEATHER_API_KEY,
                    q: location,
                    aqi: 'no'
                }
            }
        );
        return response.data;
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};

export const fetchSportData= async () =>{
    try {
        const response = await axios.get(
            `${process.env.VUE_APP_WEATHER_API_URL}${process.env.VUE_APP_SPORT_JSON}`, {
                params: {
                    key: process.env.VUE_APP_WEATHER_API_KEY,
                    q: 'London'
                }
            }
        );
        return response.data.football || [];
    } catch (error) {
        console.error('Error fetching weather data:', error);
        throw error;
    }
};
export const fetchAlertData = async (location = 'india') => {
    try {
        const response = await axios.get(
            `${process.env.VUE_APP_WEATHER_API_URL}${process.env.VUE_APP_FORECAST_JSON}`, {
                params: {
                    key: process.env.VUE_APP_WEATHER_API_KEY,
                    q: location,
                    days: 1,
                    aqi: 'no',
                    alerts: 'yes'
                }
            }
        );
        return response.data.alerts.alert || [];
    } catch (error) {
        console.error('Error fetching alerts:', error);
        throw error;
    }
};

export const fetchAstronomyData = async (location = 'india', date) => {
    try {
        const response = await axios.get(
            `${process.env.VUE_APP_WEATHER_API_URL}astronomy.json`, {
                params: {
                    key: process.env.VUE_APP_WEATHER_API_KEY,
                    q: location,
                    dt: date
                }
            }
        );
        return response.data || [];
    } catch (error) {
        console.error('Error fetching astronomy data:', error);
        throw error;
    }
};
