<template>
  <div class="app-loader">
    <div v-if="type.toLowerCase()=='ball-pulse'" 
      class="ball-pulse">
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div v-else-if="type.toLowerCase()=='ball-grid-pulse'"
      class="ball-grid-pulse">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <div v-else-if="type.toLowerCase()=='line-spin-fade-loader'" 
      class="line-spin-fade-loader">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

  </div>
  
</template>

<script>
export default {
  props:{
    type:String
  }
}
</script>

<style lang="scss">
@import '../scss/loaders';
</style>
