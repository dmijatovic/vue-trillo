<template>  
  <form @submit.prevent="searchFor" class="search">    
    <!-- <h3>Searchbox here</h3> -->
    <input type="text" class="search-input"
      v-model="searchTerm"
      :placeholder="placeholder">
    
    <button class="search-button"
      :disabled="searchTerm==''"
      type="submit">
      <svg class="search-icon">
        <use :xlink:href="svgIcon"></use>
      </svg>
    </button>
  </form>
</template>

<script>
import { cfg } from '../app.cfg';
import { searchSvc } from './searchSvc';
export default {  
  props:{
    placeholder: String
  },
  data(){
    return {
      searchTerm:''
    }
  },
  computed:{
    svgIcon(){
      let ico = `${cfg.svg.iconFile}#${cfg.svg.icoSearch}`;
      return ico;
    }
  },
  methods:{
    searchFor(){
      //console.log("Search for...", this.searchTerm);
      //emit sarch request
      searchSvc.$emit('Search', this.searchTerm);
      //reset search term???
      //this.searchTerm = ""
    }
  }
}
</script>

<style lang="scss">
@import 'searchBox';
</style>
