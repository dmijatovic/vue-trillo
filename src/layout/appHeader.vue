<template>
  <header class="header">
    <div class="header-badge">
      <!-- logo -->
      <img :src="logo" alt="App logo" class="header-logo">
      <!-- app title -->
      <h1 class="header-title">
        {{title}}
      </h1>
    </div>
    <!-- searchbox -->
    <search-box></search-box>
    <!--user nav -->
    <user-nav></user-nav>

  </header>
</template>

<script>
import { cfg } from '../app.cfg';
import searchBox from './searchBox.vue';
import userNav from './userNav.vue';

export default {
  components:{
    'search-box': searchBox,
    'user-nav': userNav
  },
  data(){
    return {
      logo: cfg.header.logo,
      title: cfg.header.title
    }    
  }
}
</script>

<style lang="scss">
@import 'appHeader';
</style>
