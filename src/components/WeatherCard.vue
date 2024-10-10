<template>
    <div v-if="weather" class="weather-card">
        <h2 data-aos="slide-up">Weather in {{ weather.location.name }}, {{ weather.location.country }}</h2>
        <p><strong>Temperature:</strong> {{ weather.current.temp_c }} °C</p>
        <p><strong>Condition:</strong> {{ weather.current.condition.text }}</p>
        <img :src="weather.current.condition.icon" alt="Weather Icon" />
        <p><strong>Wind Speed:</strong> {{ weather.current.wind_kph }} kph</p>
        <p><strong>Humidity:</strong> {{ weather.current.humidity }}%</p>
    </div>
    <div v-else>
        <p>Loading weather data...</p>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import { fetchWeather } from '../services/whetherServices';

export default {
    name: 'WeatherCard',
    setup() {
        const weather = ref(null);

        const getWeatherData = async () => {
            try {
                const data = await fetchWeather('india');
                weather.value = data;
            } catch (error) {
                console.error('Error fetching weather data:', error);
            }
        };

        onMounted(() => {
            getWeatherData();
        });

        return {
            weather,
        };
    },
};
</script>

<style scoped>
.weather-card {
    border-radius: 8px;
    padding: 16px;
    max-width: 400px;
    background-color: #f9f9f9;
    text-align: center;
}

.weather-card img {
    max-width: 100px;
}

.weather-card p {
    margin: 8px 0;
}
</style>
