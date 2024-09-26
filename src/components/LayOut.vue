<script>
import NavBar from './NavBar.vue';

export default {
  name: 'LayOut',
  components: {
    NavBar,
  },
};
</script>
 
<template>
  <div class="main-container">
    <NavBar />
    <div class="overlay">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.main-container{
  background: linear-gradient(to top,#fff, #87CEFA, #4682B4);
  background-repeat: no-repeat;
  background-attachment: fixed;
  position: fixed;
  top:0;
  right: 0;
  left: 0;
  bottom: 0;
  height: 100vh;
}
.overlay {
  height: 100%;
  overflow-y: auto; /* Allow vertical scrolling */
  position: relative;
  z-index: 1;
}
.overlay::-webkit-scrollbar {
  display: none;
}
</style>
