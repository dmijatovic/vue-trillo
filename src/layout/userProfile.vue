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
  //NO CODE HERE
  //there is no class .user
  
  &-photo{
    display: flex;   
    align-items: center;
    padding: 0 3rem 0 1rem;
    //margin-right: 3rem;    
    cursor: pointer; 
  }

  &-photo:hover{
    background-color: var(--color-light-4);
  }

  &-img{    
    height: 6rem;
    width: 6rem;
    border-radius: 50%;
    overflow: hidden;
    margin-right: 1rem;
  }
  &-name{
    font-size: 2rem;
  }
}
</style>
