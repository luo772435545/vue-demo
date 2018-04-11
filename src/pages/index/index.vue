<template>
    <div class="box">
      <div class="back">
        <img src="../../assets/image/beijing_ditu.jpg" />
      </div>
      <div class="warrper">
        <!--head-->
        <header class="head">
          <div class="head-l">
            <img src="../../assets/image/anniu_hongbang.png" />
          </div>
          <div class="head-tit">
            <img class="fir" src="../../assets/image/taitou_tiao.png" />
            <img class="two" src="../../assets/image/taitouzhi_2.png" />
            <img class="thr" src="../../assets/image/taitou_tiao.png" />
          </div>
          <div class="head-r">
            <img src="../../assets/image/anniu_gerenzhongxin.png" />
          </div>
        </header>
        <!---->
        <!---->
        <div class="mid-swiper">
          <div class="swiper-container">
            <div class="swiper-wrapper">
              <div class="swiper-slide">
                <img src="../../assets/image/changbiao_3.png" />
                <img class="tit" src="../../assets/image/taitouzhi_2.png" />
              </div>
              <div class="swiper-slide">
                <img src="../../assets/image/changbiao_2.png" />
                <p class="tit">菜鸟场</p>
              </div>
              <div class="swiper-slide">
                <img src="../../assets/image/changbiao_2.png" />
                <p class="tit">普通场</p>
              </div>
              <div class="swiper-slide">
                <img src="../../assets/image/changbiao_2.png" />
                <p class="tit">富家场</p>
              </div>
              <div class="swiper-slide">
                <img src="../../assets/image/changbiao_2.png" />
                <p class="tit">奢侈场</p>
              </div>
              <div class="swiper-slide">
                <img src="../../assets/image/changbiao_2.png" />
                <p class="tit">奢侈场</p>
              </div>
              <div class="swiper-slide">
                <img src="../../assets/image/changbiao_2.png" />
                <p class="tit">奢侈场</p>
              </div>
              <div class="swiper-slide">
                <img src="../../assets/image/changbiao_2.png" />
                <p class="tit">奢侈场</p>
              </div>
             <!-- <div  class="swiper-slide" v-for="(item,index) in swDate">
                <img :src="item.back" />
                <img v-show="item.openImgTit!=''" :src="item.openImgTit" />
                <p class="tit" v-show="item.tit!=''" v-text="item.tit"></p>
              </div>-->
            </div>
          </div>
          <div class="banner">
            <img src="../../assets/image/banner.png" />
          </div>
        </div>
        <!---->
       <!-- <lottery></lottery>-->
        <component :is="currentView"></component>
      </div>
    </div>
</template>

<script>
  import Swiper from "../../../static/js/swiper.min";
  import Lottery from '@/components/lottery/index.vue'
  export default {
    name: "index",
    props:{
      currentView:{
        default: 'Lottery'
      }
    },
    data(){
          return{
            swDate:[{
              back:'/static/img/changbiao_3.png',
              openImgTit:'/static/img/taitouzhi_2.png',
              tit:''
            },{
              back:'../../assets/image/changbiao_2.png',
              openImgTit:'',
              tit:'菜鸟场'
            },{
              back:'../../assets/image/changbiao_2.png',
              openImgTit:'',
              tit:'普通场'
            },{
              back:'../../assets/image/changbiao_2.png',
              openImgTit:'',
              tit:'富家场'
            },{
              back:'../../assets/image/changbiao_2.png',
              openImgTit:'',
              tit:'奢侈场'
            },{
              back:'../../assets/image/changbiao_2.png',
              openImgTit:'',
              tit:'奢侈场'
            }]
          }
    },
    mounted(){
          //swiper 初始化
      var swiper = new Swiper('.swiper-container', {
        slidesPerView:'auto',
        spaceBetween: 30,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
      });
      this.$axios.get('https://easy-mock.com/mock/5a7c098ba7b3ff4311b67838/zeph/gonggao#!method=get').then((res)=>{
        console.log(res);
      })
    },
    components:{
      'Lottery':Lottery
    }
    }
</script>

<style scoped lang="scss" >
  @import "../../../static/css/swiper.min.css";
  .box {
    width: 1080px;
    height: 1920px;
    position: relative;
    margin: 0 auto;
    .back{width: 100%;position: absolute;left: 0;top: 0}
    .back img{width: 100%;}
    .back1 img{width: 100%;}
    .warrper{position: relative;z-index: 2}
    .head{height:116px; }
    .head-l{position: absolute;left: 0;top: 0;height:116px;;z-index: 2}
    .head-r{position: absolute;right: 0;top: 0;height:116px;;}
    .head-tit{display: flex;width: 40%;justify-content: center;
      align-items: center;height:116px;;margin: 0 auto;position: relative}
    .head-l img ,.head-r img {height: 100%;display: block;}
    .head-tit .fir{height: 43px;}
    .head-tit .two{height: 66px;}
    .head-tit .thr{height: 43px;transform: rotate(180deg);}
    .mid-swiper .banner{padding-top: 197px;}
    .mid-swiper{position: relative}
    .warrper .banner{width: 100%;height: 169px;}
    .warrper {
      .banner img{width: 100%}
    }
    .swiper-container {
      width: 100%;
      height: 194px;
      position: absolute;
      left: 0;
      top: -14px;
    }
    .swiper-slide:first-child{margin-left:28px; }
    .swiper-slide {
      text-align: center;
      font-size: 18px;
      width: 194px;
      margin-right: 35px;
      /* Center slide text vertically */
    }
    .swiper-slide img{
      width: 100%;
    }
    .swiper-slide .tit{width: 75%;position: absolute;bottom: 10%;left: 10%;font-size: 0.27rem;color: #fff;}


  }



</style>
