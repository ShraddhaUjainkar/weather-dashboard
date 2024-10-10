<template>
    <div class="sport-container">
        <h2>Sports News</h2>
        <div v-if="sportsNews && sportsNews.length > 0" class="news-column">
            <div v-for="(news, index) in sportsNews" :key="index" class="news-item">
                <h3>{{ news.headline }}</h3>
                <strong>Description:</strong>
                <p> {{ news.stadium }}|{{ news.country }}| </p>
                <strong>Tournament:</strong>
                <p> {{ news.tournament }}</p>
            </div>
        </div>
        <div v-else>
            <p>No sports news available.</p>
        </div>
    </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { fetchSportData } from '@/services/whetherServices';

export default {
    name: 'SportsNews',
    setup() {
        const sportsNews = ref([]);

        const fetchSportsNews = async () => {
            try {
                sportsNews.value = await fetchSportData();
            } catch (error) {
                console.error('Error fetching sports news:', error);
            }
        };

        const formatDate = (date) => {
            return new Date(date).toLocaleString();
        };

        onMounted(fetchSportsNews);

        return {
            sportsNews,
            formatDate,
        };
    },
};
</script>
  
<style scoped>

.sport-container {
    margin: 0 15%;
    
}
.sport-container {
    margin: 0 15%;
}

.news-column {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 15px; 
}

.news-item {
    border: 1px solid #ccc;
    padding: 15px;
    background-color: #f9f9f9;
}

</style>
  