<template>
  <div class="flex">
    <div class="lp"></div>
    <div class="bor-1px cc"></div>
    <div class=" dd-bottom-1px dd-right-1px cc"></div>
    <div class="dd-right-arrow"></div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex{}
.lp{width: 540px;height: 280px;border: 1px solid #ddd;}
.cc{width: 300px;height: 300px;margin: 10px;position: relative;background-color: #f9f9f9}
@svg 1px-border {
  height: 2px;
  @rect {
    fill: var(--color, black);
    width: 100%;
    height: 50%;
  }
}
.bor-1px {
  border-bottom: 1px solid transparent;
  border-image: svg(1px-border param(--color #00b1ff)) 2 2 stretch;
}
</style>
