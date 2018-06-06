<template>
  <div class="user-photo">
    <img :src="photo" alt="User" class="user-img">    
    <span class="user-name">{{ name }}</span>
  </div>
  
</template>

<script>
export default {
  props:{
    name:String,
    photo:String,
    options: Array
  }
}
</script>
<style lang="scss">
.user{
  &-photo{
    display: flex;        
  }
  &-img{    
    height: 5rem;
    width: 5rem;
    border-radius: 50%;
    overflow: hidden;
  }
  &-name{
    
  }
}
</style>
