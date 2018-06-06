<template>
  <div class="notification">
    <svg class="notification-icon">
      <use :xlink:href="svgIcon"/>
    </svg>
    <span class="notification-label">
      {{msgCnt}}
    </span>
  </div>
</template>

<script>
import {cfg} from '../app.cfg';
export default {
  props:{
    svgIco:String,
    msgCnt:Number 
  },
  computed:{
    svgIcon(){
      let icon = `${cfg.svg.iconFile}#${this.svgIco}`;
      return icon;
    }
  }
}
</script>
<style lang="scss">
.notification{
  display: flex;

  &-icon{
    height: 3rem;
    width: 3rem;
  }
}
</style>
