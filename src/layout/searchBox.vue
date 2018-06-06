<template>  
  <form @action.prevent="searchFor" class="search">    
    <!-- <h3>Searchbox here</h3> -->
    <input type="text" class="search-input"
      v-model="searchTerm"
      placeholder="search.label">
    
    <button class="search-button">
      <svg class="search-icon">
        <use :xlink:href="svgIcon"></use>
      </svg>
    </button>
  </form>
</template>

<script>
import { cfg } from '../app.cfg'; 
export default {  
  props:{
    search: Object
  },
  computed:{
    svgIcon(){
      let ico = `${cfg.svg.iconFile}#${cfg.svg.icoSearch}`;
      return ico;
    }
  },
  methods:{
    searchFor(){
      console.log("Search for...", this.searchTerm);
    }
  }
}
</script>

<style lang="scss">

.search{
  display: flex;
  flex: 0 0 33%;
  justify-content: space-between;  
  //background-color: orangered;
  border-radius: 3px;
  overflow: hidden;  

  &-input{
    flex:1;
    font-family: inherit;
    font-size: inherit;
    background-color: var(--color-light-3);
    border: none;
    padding: 1rem 2rem;
    width: 90%;
  }

  &-button{
    border: none;
    padding: 0.5rem 1rem;
  }

  &-icon{
    width: 3rem;
    height: 3rem; 
  }

}

</style>
