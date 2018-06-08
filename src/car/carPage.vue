<template>
  <section class="app-body">
    <!-- under construction -->
    <under-construction 
      v-if="!showLoader">
    </under-construction>
    <!-- loader -->
    <app-loader v-if="showLoader"
      :type="loader"></app-loader>
  </section>
</template>

<script>
export default {
  created(){
    setTimeout(()=>{
      this.toggleLoader();
    },3000);
  },
  data(){
    return {
      showLoader:true,
      loader:'ball-pulse'
    }
  },
  methods:{
    toggleLoader(){
      this.showLoader = !this.showLoader;
    }
  }
}
</script>
<style lang="scss">
</style>
