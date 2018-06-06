<template>
  <section class="app-container">  
    <app-header></app-header>

    <div class="content">
      <side-nav></side-nav>
      <main class="content-body">
        <h3>Here comes the content</h3>
      </main>
    </div>    
  </section>
</template>

<script>
import { cfg } from './app.cfg';
import appHeader from './layout/appHeader.vue';
import sideNav from './layout/sideNav.vue';

export default {
  components:{
    'app-header': appHeader,
    'side-nav': sideNav
  },
  data(){
    return {
      menuItems: cfg.menuItems,      
    }
  }
}
</script>

<style lang="scss">
</style>
