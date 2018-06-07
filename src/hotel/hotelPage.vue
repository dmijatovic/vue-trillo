<template>
  <section class="app-body">
    <h1>Hotel page</h1>
    <hotel-gallery
      :gallery="gallery">
    </hotel-gallery>
  </section>
</template>

<script>

import { cfg } from '../app.cfg';
import hotelGallery from './hotelGallery.vue';

export default {
  data(){
    return{
      gallery: cfg.hotel.gallery
    }
  },
  components:{
    'hotel-gallery':hotelGallery
  }
}
</script>

<style>

</style>
