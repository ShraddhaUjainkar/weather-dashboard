<script>
import LayOut from './components/LayOut.vue';
import { onMounted } from 'vue';
import AOS from 'aos';
import 'aos/dist/aos.css';
export default {
  name: 'App',
  components: {
    LayOut,
  },
  setup() {
    onMounted(() => {
      AOS.init({
        duration: 1000,
        once: true,
      });
    });
  }
}
</script>

<template>
<LayOut>
  <router-view />
</LayOut>
</template>


<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin:0;
}
@import url('https://fonts.googleapis.com/css2?family=DM+Sans:ital,opsz,wght@0,9..40,100..1000;1,9..40,100..1000&display=swap');

body {
    font-family: 'DM Sans', sans-serif;
}
body{
  margin:0;
  padding:0;
}
</style>
