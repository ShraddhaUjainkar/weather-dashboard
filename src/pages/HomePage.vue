<template>
    <div  data-aos="slide-up " class="homepage">
      <div class="content">
        <WeatherCardVue />
      </div>
      <div class="sidebar">
        <AlertCards />
      </div>
    </div>
</template>

<script>
import WeatherCardVue from '@/components/WeatherCard.vue';
import AlertCards from '../components/AlertCards.vue'
export default {
  components: {
    AlertCards,
    WeatherCardVue,
  },
};
</script>

<style scoped>
.homepage {
  display: flex;
  max-width:100%;
  margin:0 15%;
  margin-top:50px;
  background-color: #f9f9f9;
  opacity: 0.8;
}

.sidebar {
  flex: 0 0 30%;
  padding: 20px 0;
}

.content {
  flex: 0 0 70%;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  align-items: center;
  justify-content: center;
  display: flex;
}
</style>
