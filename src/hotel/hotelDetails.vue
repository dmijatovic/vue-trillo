<template>
  <div class="hotel-details">
    <!-- Hotel details -->
    <hotel-desc
      class="hotel-desc">
    </hotel-desc>
    
    <!-- customer reviews -->
    <div class="hotel-reviews">
      <hotel-review v-for="(review,i) in reviews"
        :text="review.text"
        :person="review.person"
        :date="review.date"
        :score="review.score"
        :key="i">
      </hotel-review>
    </div>
  </div>
</template>

<script>
import hotelDesc from './hotelDesc.vue';
import hotelReview from './hotelReview.vue';
import { cfg } from '../app.cfg';

export default {
  components:{
    'hotel-desc': hotelDesc,
    'hotel-review': hotelReview
  },
  data(){
    return {
      reviews: cfg.hotel.reviews
    }
  }
}
</script>
<style lang="scss">
@import 'hotelDetails';
</style>
