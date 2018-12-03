<template>
  <div id="app">
    <building-slider v-bind:images="getImages" class="center"></building-slider>
  </div> 
</template>

<script>

import buildService from './store/Service.js';
import buildingSlider from './components/buildingSlider.vue';

export default {
  name: 'app',
  components:{
    buildingSlider
  },
  data () {
    return {
     
    }
  },
  computed: {
    getImages(){
      return buildService.getImages();
    },
  }
}

</script>

<style lang="scss">
  .center{
    margin: auto;
  }
</style>
