<template>
    <div class="card">
        <div class="astronomy-info" v-if="astronomy">
            <h4 data-aos="slide-up" >Astronomy Info : {{todayDate}}</h4>
            <br/>
            <p><strong>Is Moon Up:</strong> {{ astronomy.astronomy.astro.is_moon_up ? 'Yes' : 'No'}}</p>
            <p><strong>Is Sun Up:</strong> {{ astronomy.astronomy.astro.is_sun_up ? 'Yes' : 'No' }}</p>
            <p><strong>Moon Illumination:</strong> {{ astronomy.astronomy.astro.moon_illumination }}%</p>
            <p><strong>Moon Phase:</strong> {{ astronomy.astronomy.astro.moon_phase }}</p>
            <p><strong>Moonrise:</strong> {{ astronomy.astronomy.astro.moonrise }}</p>
            <p><strong>Moonset:</strong> {{ astronomy.astronomy.astro.moonset }}</p>
            <p><strong>Sunrise:</strong> {{ astronomy.astronomy.astro.sunrise }}</p>
            <p><strong>Sunset:</strong> {{ astronomy.astronomy.astro.sunset }}</p>
        </div>
    </div>
</template>

<script>
import { ref, onMounted } from 'vue';
import dayjs from 'dayjs';
import { fetchAstronomyData } from '@/services/whetherServices';

export default {
    name: 'AlertCard',
    setup() {
        const astronomy = ref(null); 
        const todayDate = dayjs().format('YYYY-MM-DD');



        const fetchAlerts = async () => {
            try {
                astronomy.value = await fetchAstronomyData(); 
            } catch (error) {
                console.error('Error fetching alerts:', error);
            }
        };

        // Fetch alerts when the component is mounted
        onMounted(fetchAlerts);

        return {
            astronomy,
            todayDate,
        };
    },
};
</script>

<style scoped>
.card {
    border-radius: 8px;
    padding: 16px;
    max-width: 400px;
}
.astronomy-info{
    text-align: left;
}
.astronomy-info h4{
    font-weight: 600;
}

</style>
