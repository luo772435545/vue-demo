<template>
    <transition  name="dd-indicator">
      <div class="dd-tip" v-show="!closed">
        <span v-text="text"></span>
      </div>
    </transition>
</template>

<script>
    export default {
        name: "tip",
        data(){
          return{
            closed:false,
            text:String
          }
        }
    }
</script>

<style scoped>
.dd-tip{position: fixed;z-index: 20;bottom:10vh;left: 50%;transform: translate(-50%,0);background-color: rgba(0,0,0,0.8);color: #ffffff }
.dd-tip span{padding: 30px;}
.dd-indicator-enter-active, .dd-indicator-leave-active {
  transition: opacity .3s linear;
}
.dd-indicator-enter, .dd-indicator-leave-to {
  opacity: 0;
}
</style>
