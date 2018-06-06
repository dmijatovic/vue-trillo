<template>
  <div class="user-nav">
    <!-- messages -->
    <user-notification
      :svgIco="user.msg.svgIco"
      :msgCnt="user.msg.count">
    </user-notification>    
    <!-- chats -->
    <user-notification
      :svgIco="user.chat.svgIco"
      :msgCnt="user.chat.count">
    </user-notification>
    <!--user profile -->
    <user-profile
      :name="user.name"
      :photo="user.img"
      :options="user.menu">
    </user-profile>
  </div>
</template>

<script>
import userNotification from './userNotification.vue';
import userProfile from './userProfile.vue';
import {cfg} from '../app.cfg';
export default {
  components:{
    'user-notification': userNotification,
    'user-profile': userProfile 
  },
  data(){
    return{
      user: cfg.user
    }
  }
}
</script>
<style lang="scss">
.user-nav{
  align-self: stretch;
  display: flex;
  align-items: stretch;
  //background-color: red;
  //select all direct children
  /*& > *{
    padding: 0 3rem;
    cursor: pointer;
  }
  //all direct children on hover
  & > *:hover{
    background-color: var(--color-light-2);
  }*/

}
</style>
