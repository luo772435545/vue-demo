<template>
  <transition name="dd-indicator">
    <div v-show="!closed" class="dd-popup-box">
      <div class="dd-popup">
        <div class="tit" v-text="title"></div>
        <div class="body" v-text="body"></div>
        <div class="btns">
          <span class="btn1" v-show="!cancel" data-type="cancel" @click="btnHand" v-text="cancelText"></span>
          <span class="btn2"  data-type="enter"  @click="btnHand" v-text="enterText"></span>
        </div>
      </div>
    </div>
  </transition>

</template>

<script>
  /**
   * gan
   * title 标题
   * body 内容
   * cancel 取消按钮是否显示
   * cancelText取消文字
   * enterText取消文字
   * callback 确定按钮回调函数
   * cancelCallback取消按钮回调函数
   * */
    export default {
      name: "popup",
      props:{
        title:{
         type: String,
         default:''
        },
        body:{
         type: String,
         default:''
        },
        cancel:{
         type: Boolean,
         default:false
        }
      },
      data(){
        return{
          closed:true,
          cancelText:'',
          enterText:''
        }
      },
      methods:{
        btnHand(event){
          let vm=this;
          if(event.target.dataset.type=='cancel'){
            vm.closed=true;
            //取消回调
            this.cancelCallback(event);
          }else if(event.target.dataset.type=='enter'){
            //确定回调
           this.callback(event);
          }
        }
      }
    }
</script>

<style scoped lang="scss">
  .dd-popup-box{width: 100vw;
    height: 100vh;
    background-color:rgba(0,0,0,0.6);
    position: fixed;
    top: 0;left: 0;
    z-index: 9998;

  }
.dd-popup{
  width: 70vw;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  padding: 30px;
  background-color: #ffffff;
  z-index: 9999;
  box-shadow: 0 0 30px rgba(255, 255, 255, 0.6);
  .tit{
    font-size: 16px;
  }
  .body{
    font-size: 14px;
  }
  .btns{
    text-align: right;
  }
}

.dd-indicator-enter-active, .dd-indicator-leave-active {
  transition: opacity .3s linear;
}
.dd-indicator-enter, .dd-indicator-leave-to {
  opacity: 0;
}
</style>
