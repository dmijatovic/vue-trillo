<template>
  <div class="hotel-header">
    <h1 class="hotel-title">{{ info.title }}</h1>
    <div class="hotel-stars">
      <svg-icon v-for="(star, i) in info.stars.nr"
        :svgIco="info.stars.svgIco"
        :cssClass="info.stars.cssClass"
        :key="i">
      </svg-icon>
    </div>
    <div class="hotel-location">
      <svg-icon
        :svgIco="info.location.icon.svgIco"
        :cssClass="info.location.icon.cssClass">
      </svg-icon>
      <button class="btn-inline">
        {{ info.location.label }}
      </button>
    </div>
    
    <div class="hotel-rating">
      <div class="hotel-rating-score">
        {{info.rating.score}}
      </div>
      <div class="hotel-rating-base">
        {{info.rating.base}}
      </div>
      <div class="hotel-rating-base">
        votes
      </div>
    </div>
  </div>
</template>

<script>
//import svgIcon
//import svgIcon from '../system/svgIcon.vue';

export default {
  props:{
    info: Object
  },
  /*components:{
    'svg-icon': svgIcon 
  }*/
}
</script>
<style lang="scss">
@import 'hotelHeader';
</style>
