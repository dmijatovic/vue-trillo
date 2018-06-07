<template>
  <section class="app-container">  
    <app-header></app-header>

    <div class="content">
      <side-nav></side-nav>
      <main class="content-body">
        <!--Here comes the content -->
        <router-view></router-view>
      </main>
    </div>    
  </section>
</template>

<script>
import { cfg } from './app.cfg';
import { searchSvc } from './layout/searchSvc';
import appHeader from './layout/appHeader.vue';
import sideNav from './layout/sideNav.vue';

export default {
  created(){
    this.listenForSearch();
  },
  components:{
    'app-header': appHeader,
    'side-nav': sideNav
  },
  /*
  data(){
    return {
      menuItems: cfg.menuItems,      
    }
  },*/
  methods:{
    listenForSearch(){
      //debugger
      searchSvc.$on('Search',(data)=>{
        console.log("Search request started...", data);
      });
    }
  }
}
</script>

<style lang="scss">
</style>
