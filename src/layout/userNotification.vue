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
  align-items: center;
  padding: 0 3rem;

  &:hover{
    background-color: var(--color-light-4);
  }

  &-icon{
    height: 3rem;
    width: 3rem;
    fill: var(--color-dark-1);
  }

  &-label{
    position: absolute;
    //center content
    display: flex;
    align-items: center;
    justify-content: center;
    //padding: 1rem;
    height: 3rem;
    width: 3rem;
    font-size: 1.25rem;
    background-color:var(--color-primary-dark);
    color: #fff;
    border-radius: 50%;
    //transition: all 2s 1s;
    transform: translate(1.5rem, -2rem);
  }
}
</style>
