<template>
    <div class="alert-container" v-if="alerts && alerts.length > 0">
        <h1>Weather Alerts</h1>
        <div v-for="(item, index) in alerts" :key="index" class="alert-box" @click="toggleAlert(index)">
            <h3>{{ item.headline }}</h3>
            <p><strong>Description:</strong> {{ item.desc }}</p>

            <div v-if="expandedAlertIndex === index" data-aos="fade-down">
                <p><strong>Type:</strong> {{ item.msgtype }}</p>
                <p><strong>Severity:</strong> {{ item.severity }}</p>
                <p><strong>Urgency:</strong> {{ item.urgency }}</p>
                <p><strong>Areas:</strong> {{ item.areas }}</p>
                <p><strong>Category:</strong> {{ item.category }}</p>
                <p><strong>Certainty:</strong> {{ item.certainty }}</p>
                <p><strong>Effective:</strong> {{ formatDate(item.effective) }}</p>
                <p><strong>Expires:</strong> {{ formatDate(item.expires) }}</p>
            </div>
        </div>
    </div>
    <div v-else>
        <p>No alerts available.</p>
    </div>
</template>
  
<script>
import { ref, onMounted } from 'vue';
import { fetchAlertData } from '@/services/whetherServices';


export default {
    name: 'HeadLines',
    setup() {
        const alerts = ref([]);
        const expandedAlertIndex = ref(null);

        const toggleAlert = (index) => {
            expandedAlertIndex.value = expandedAlertIndex.value === index ? null : index;
        };

        const formatDate = (date) => {
            return new Date(date).toLocaleString();
        };

        const fetchAlerts = async () => {
            try {
                alerts.value = await fetchAlertData();
            } catch (error) {
                console.error('Error fetching alerts:', error);
            }
        };

        onMounted(fetchAlerts);
        return {
            alerts,
            expandedAlertIndex,
            toggleAlert,
            formatDate,
        };
    }
};
</script>
  
<style>
.alert-container{
    max-height: 100%;
}
.alert-box {
    border: 1px solid #ccc;
    padding: 15px;
    margin: 10px 15%;
    text-align: left;
    background-color: #f9f9f9;
    cursor: pointer; /* Add a cursor to indicate that the box is clickable */
}
</style>
