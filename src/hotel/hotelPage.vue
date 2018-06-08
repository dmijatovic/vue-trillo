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
    <!--loader -->
    <app-loader  v-if="loader.show"
      :type="loader.type"
      class="hotels">
    </app-loader> 
  </section>
</template>

<script>

import { cfg } from '../app.cfg';
import hotelGallery from './hotelGallery.vue';
import hotelHeader from './hotelHeader.vue';
import hotelDetails from './hotelDetails.vue';
import { searchSvc } from '../layout/searchSvc';

export default {
  created(){
    this.listenForSearch();
    setTimeout(()=>{
      this.loader.show = false;
    },1000);
  },
  data(){
    return{
      gallery: cfg.hotel.gallery,
      info: cfg.hotel.info,
      loader:{
        show: true,
        type:'ball-pulse'
      }
    }
  },
  components:{
    'hotel-gallery': hotelGallery,
    'hotel-header': hotelHeader,
    'hotel-details': hotelDetails
  },
  methods:{
    listenForSearch(){
      //debugger
      searchSvc.$on('Search',(data)=>{
        this.performSearch(data);
        //console.log("Search request started...", data);
      });
    },
    performSearch(data){
      console.log("Searching foor...");
      this.toggleLoader();
      setTimeout(()=>{
        this.toggleLoader();
      },2000);
    },
    toggleLoader(){
      this.loader.show = !this.loader.show;
    }
  }
}
</script>
<style lang="scss">
.app-body{
  position: relative;
}

.hotels{
  position: absolute;
  left: 0; right: 0;
  top:0; bottom:0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--color-light-1);
  z-index: 99;
}
</style>
