<template>
  <section class="gallery">
    <figure v-for="item in gallery" 
      class="gallery-item"
      :key="item.label">
      <img :src="item.src" alt="item.label" class="gallery-photo">
      <figcaption class="gallery-item-label">{{item.label}}</figcaption> 
    </figure>    
  </section>
</template>

<script>
export default {
  props:{
    gallery: Array 
  }
}
</script>
<style lang="scss">
@import '../scss/media';
.gallery{
  //set images side by side in float
  //combined with image width defined as %
  //note! even when 100% is used on the image
  //flex will size and 'float' these in one row
  display: flex;
  //margin: 1rem;
  padding: 4rem;
  &-photo{
    width: 100%;
  }
  &-item-label{
    font-size: 1.5rem;
    padding-left: 1rem;
    //text-align: center;
  }

  //on very small screens move search to next row
  @media screen and (max-width: $width-xs) {
    padding: 2rem;
  }
}
</style>
