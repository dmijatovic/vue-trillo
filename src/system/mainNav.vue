<template>
  <div class="navigation">
    <!--animated menu background-->
    <div class="navigation-background"
      :class="{active:showMenu}">&nbsp;</div>
    <!--nav button --> 
    <div class="btn navigation-button u-no-select"
      @click="toggleMenu">
      <span class="navigation-icon"
        :class="{active:showMenu}">
        &nbsp;
      </span>
    </div>
    <!-- nav menu -->
    <div class="navigation-menu"
      :class="{active:showMenu}">
      <ul class="navigation-list">
        <li class="navigation-item"
          v-for="item in menuItems"
          :key="item.label">
          
          <a :href="item.link"
            class="btn navigation-link">
            <i :class="item.faIco"></i>
            <span class="navigation-label">
              {{item.label}}
            </span>
          </a>

        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    menuItems:Array
  },
  data(){
    return {
      showMenu:false
    }
  },
  methods:{
    toggleMenu(){
      this.showMenu = !this.showMenu;
      //console.log("toggleMenu...", this.showMenu);
    }
  }
}
</script>
<style class="scss">
@import 'mainNav';
</style>
