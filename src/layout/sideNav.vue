<template>
  <aside class="side">
    <!--navigation -->
    <nav class="side-nav">
      <ul class="side-menu">
        <!--<li v-for="item in mnuItems"
          class="side-menu-item"
          :key="item.path">-->
          
          <router-link v-for="item in mnuItems"
            tag="li"
            :to="item.path"
            class="side-menu-item"
            active-class="active"
            :key="item.path">

            <svg class="side-menu-icon">
              <use :xlink:href="item.svgIco"></use>
            </svg>
            {{item.label}}

          </router-link>
          
        <!--</li>-->
      </ul>
    </nav>
    <!-- copyrights -->
    <div class="side-copyright">
      <h3>Copyright &copy;</h3>
    </div>
  </aside>
</template>

<script>
import { routes } from '../routes';
import { cfg } from '../app.cfg';
export default {
  /*data(){
    return {
      menuItems: routes
    }    
  },*/
  computed:{
    /**
     * compute nav items based on routes object
     * used by router
     */
    mnuItems(){
      let items=[];
      routes.map((item)=>{
        //debugger
        items.push({
          path: item.path,  
          svgIco: `${ cfg.svg.iconFile }#${ item.svgIco }`,
          label: item.label
        })
      });
      return items;
    }
  }
}
</script>

<style lang="scss">
@import 'sideNav';
</style>
