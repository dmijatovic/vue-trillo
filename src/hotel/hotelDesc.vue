<template>
  <!--class will added by vue as assigned it to custom tag-->
  <div>
    <p v-for="(textblock,i) in desc"
      :key="i"
      class="hotel-desc-block">
      {{ textblock }}
    </p>
    <ul class="hotel-desc-features">
      <li v-for="feature in features"
        class="hotel-desc-feature"
        :key="feature">{{ feature }}</li>
    </ul>
    <div class="recommendation">
      <p class="recommendation-count">
        {{recommendation.label}}
      </p>
      <div class="recommendation-friends">
        <img v-for="img in recommendation.friends" 
          :key="img.src" 
          :src="img.src" 
          :alt="img.lalbel" 
          class="recommendation-photo" />
      </div>
    </div>

  </div>
</template>

<script>
import { cfg } from '../app.cfg';
export default {
  
  data(){
    return {
      desc:cfg.hotel.desc,
      features: cfg.hotel.features,
      recommendation: cfg.hotel.recommendation
    }
  }
}
</script>
<style lang="scss">
@import 'hotelDesc';
</style>
