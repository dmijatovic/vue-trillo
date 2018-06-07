<template>
  <section class="app-body">
    <!-- image gallery -->
    <hotel-gallery
      :gallery="gallery">
    </hotel-gallery>
    <!-- header -->
    <hotel-header
      :info="info">
    </hotel-header>
    <!-- hotel details -->
    <hotel-details></hotel-details>    
  </section>
</template>

<script>

import { cfg } from '../app.cfg';
import hotelGallery from './hotelGallery.vue';
import hotelHeader from './hotelHeader.vue';
import hotelDetails from './hotelDetails.vue';

export default {
  data(){
    return{
      gallery: cfg.hotel.gallery,
      info: cfg.hotel.info
    }
  },
  components:{
    'hotel-gallery':hotelGallery,
    'hotel-header':hotelHeader,
    'hotel-details': hotelDetails
  }
}
</script>
<style></style>
