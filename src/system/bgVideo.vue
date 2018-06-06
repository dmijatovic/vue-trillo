<template>
  <div class="bg-video">
    <video class="bg-video-content" autoplay muted loop >
      <source v-for="file in sources"
        :src="file.src"
        :type="file.type" 
        :key="file.src">
        Your browser does not support available video formats :-(
    </video>
  </div>
</template>

<script>
export default {
  props:{
    sources:{
      type: Array
    }
  }
}
</script>

<style lang="scss">
@import 'bgVideo';
</style>

