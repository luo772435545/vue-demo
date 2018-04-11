<template>
    <div >
      <ul class="lottery" id="lottery" >
        <li class="item">
          <div class="item-d" @click="tttt" :class="{'lot-act':rand[0]==indexPro}" :data-id="rand[0]" >
            <div class="back"><img src="../../assets/image/shangpindi.png"/> </div>
            <div class="back1"><img src="../../assets/image/shangpindi_xuanzhong.png"/> </div>
            <div class="product">
              <img :src="imgDate[0].img" />
            </div>
            <p class="text">{{imgDate[0].text}}</p>
          </div>
          <div class="t-top item-d" :class="{'lot-act':rand[1]==indexPro}"  :data-id="rand[1]" >
            <div class="back"><img src="../../assets/image/shangpindi.png"/> </div>
            <div class="back1"><img src="../../assets/image/shangpindi_xuanzhong.png"/> </div>
            <div class="product">
              <img :src="imgDate[1].img" />
            </div>
            <p class="text">{{imgDate[1].text}}</p>
          </div>
          <div class="item-d" :class="{'lot-act':rand[2]==indexPro}" :data-id="rand[2]">
            <div class="back"><img src="../../assets/image/shangpindi.png"/> </div>
            <div class="back1"><img src="../../assets/image/shangpindi_xuanzhong.png"/> </div>
            <div class="product">
              <img :src="imgDate[2].img" />
            </div>
            <p class="text">{{imgDate[2].text}}</p>
          </div>
        </li>
        <li class="item">
          <div class="item-d"  :class="{'lot-act':rand[3]==indexPro}" :data-id="rand[3]">
            <div class="back"><img src="../../assets/image/shangpindi.png"/> </div>
            <div class="back1"><img src="../../assets/image/shangpindi_xuanzhong.png"/> </div>
            <div class="product">
              <img :src="imgDate[3].img" />
            </div>
            <p class="text">{{imgDate[3].text}}</p>
          </div>
          <div class=" item-progress">
            <div class="progress">
              <div class="z-p" id="progress">
                <!-- <canvas class="progress"  width="420" height="360"></canvas>-->
                <!--<img src="../../assets/image/jindutiao_dutiao.png" />-->
              </div>
            </div>
            <div class="progress act-p">
             <!-- <div class="z-p">
                <img class="jin" src="../../assets/image/jindutiao_texiao1.png" />
              </div>-->

            </div>
            <div class="progress-a">
              <img src="../../assets/image/jindutiao_shang.png" />
            </div>
            <div class="product ">
              <img class="hvr-float-shadow hvr-float-shadow-ani" src="../../assets/image/shangpin_zhongxinqu.png" />
            </div>
            <div class="start-go hvr-box-shadow-inset" @click="start" >
              <div v-if="isBtn">
                <img src="../../assets/image/anniu_zhuanniu2.png" />
              </div>
              <div v-else>
                <img src="../../assets/image/anniu_zhuanniu3.png" />
              </div>

            </div>
          </div>
          <div class="item-d"  :class="{'lot-act':rand[4]==indexPro}"  :data-id="rand[4]">
            <div class="back"><img src="../../assets/image/shangpindi.png"/> </div>
            <div class="back1"><img src="../../assets/image/shangpindi_xuanzhong.png"/> </div>
            <div class="product">
              <img :src="imgDate[4].img" />
            </div>
            <p class="text">{{imgDate[4].text}}</p>
          </div>
        </li>
        <li class="item">
          <div class="item-d"  :class="{'lot-act':rand[5]==indexPro}"  :data-id="rand[5]">
            <div class="back"><img src="../../assets/image/shangpindi.png"/> </div>
            <div class="back1"><img src="../../assets/image/shangpindi_xuanzhong.png"/> </div>
            <div class="product">
              <img :src="imgDate[5].img" />
            </div>
            <p class="text">{{imgDate[5].text}}</p>
          </div>
          <div class="b-bot item-d"  :class="{'lot-act':rand[6]==indexPro}"  :data-id="rand[6]">
            <div class="back"><img src="../../assets/image/shangpindi.png"/> </div>
            <div class="back1"><img src="../../assets/image/shangpindi_xuanzhong.png"/> </div>
            <div class="product">
              <img :src="imgDate[6].img" />
            </div>
            <p class="text">{{imgDate[6].text}}</p>
          </div>
          <div class="item-d"  :class="{'lot-act':rand[7]==indexPro}" :data-id="rand[7]">
            <div class="back"><img src="../../assets/image/shangpindi.png"/> </div>
            <div class="back1"><img src="../../assets/image/shangpindi_xuanzhong.png"/> </div>
            <div class="product">
              <img :src="imgDate[7].img" />
            </div>
            <p class="text">{{imgDate[7].text}}</p>
          </div>
        </li>
      </ul>
    </div>
</template>

<script>
    class progress {
    constructor(opts){
      this.parent=opts.parent|| document.body,
        this.width= opts.width||100,
        this.radius= opts.radius||45,
        this.arc= opts.arc||5,
        this.perent=opts.perent||70,
        this.color=['#ccc', '#4389e9'],
        this.animated=false,
        this.after=function() {},
        this.ctx=Object,
        this.x=0,
        this.tox=70
    }
    init(){
      let canvas=document.createElement('canvas'),
        _this=this;
      _this.parent.appendChild(canvas);
      _this.ctx = canvas.getContext("2d");

      _this.ctx.canvas.width = _this.width;
      _this.ctx.canvas.height = _this.width;
      /* if (!this.animated) return this.fill(this.perent);*/
      // _this.fill(_this.x)
      _this.animate(_this);
    }
    clearFill(){
      let _this=this;
      _this.ctx.clearRect(0, 0, _this.width,  _this.width)
    }
    fillBG(){
      let _this=this;
      _this.ctx.beginPath();
      _this.ctx.lineWidth = _this.arc;
      _this.ctx.strokeStyle = _this.color[0];
      _this.ctx.arc(_this.width / 2, _this.width / 2, _this.radius, 0, 2 * Math.PI);
      _this.ctx.stroke();
    }
    fillArc(){
      let _this=this;
      let start=125 * Math.PI / 180;
      let end=(_this.x*2.9+125) * Math.PI / 180;
      _this.ctx.beginPath();
      _this.ctx.lineWidth = _this.arc;
      _this.ctx.strokeStyle = _this.color[1];
      _this.ctx.arc(_this.width / 2, _this.width / 2, _this.radius, start,end );
      _this.ctx.stroke();
    }
    fill(a,b){
      let _this=this;
      _this.fillBG();
      _this.fillArc();
    }
    animate(th){
      let _this=th||this;
      if (_this.x++ > _this.perent) return _this.after && _this.after();
      setTimeout(function () {
        _this.clearFill();
        _this.fill(_this.x);
        _this.animate(_this)
      }, 1000/60);
    }
    aniInit(th){
      let _this=th||this;
      _this.x--;
      if(_this.x<=5){
        return
      }
      setTimeout(function () {
        _this.clearFill();
        _this.fill(_this.x);
        _this.aniInit(_this)
      }, 1000/60);
    }

  }
    export default {
      name: "index",
      data(){
            return{
              imgDate:[{
                img:require('../../assets/image/shangpin.png'),
                text:'小天才手表1'
              },{
                img:require('../../assets/image/goods1.png'),
                text:'小天才手表2'
              },{
                img:require('../../assets/image/goods2.png'),
                text:'小天才手表3'
              },{
                img:require('../../assets/image/goods3.png'),
                text:'小天才手表4'
              },{
                img:require('../../assets/image/goods4.png'),
                text:'小天才手表5'
              },{
                img:require('../../assets/image/goods5.png'),
                text:'小天才手表6'
              },{
                img:require('../../assets/image/goods6.png'),
                text:'小天才手表7'
              },{
                img:require('../../assets/image/goods7.png'),
                text:'小天才手表8'
              }],
              clcl:Object,
              ttt:Object,
              isBtn:true,//控制按钮
              rand:[0,1,2,3,4,5,6,7],
              indexPro:-1
            }
        },
      mounted(){
        let vm=this;
        /*this.$Popup.open({
          title:'标题',
          body:'文字',
          callback:function () {
            this.$Popup.close();
          },
          cancelCallback(){

          }
        });*/

        vm.clcl=vm.dep();
        vm.ttt=new progress({
          parent:document.getElementById('progress'),
          animated: true,
          width: document.getElementById('progress').clientWidth,
          radius: document.getElementById('progress').clientWidth/2.2,
          arc: 8,
          perent: 5,
          color: ['#ccc','#4389e9'],
          textColor: '#f30',
          textSize: '40px',
          after: function(){

          }
        });
        vm.ttt.init();
        vm.clcl.suan();
      },
      methods:{
        start(){
          let vm=this;
          if(vm.clcl.end){
            vm.clcl.end=false;
            vm.clcl.speed=300;
            vm.clcl.init();
            if(vm.clcl.rotato>=213){
              vm.clcl.rotato=-35;
              vm.ttt.perent=5
              vm.ttt.aniInit(vm.ttt);
            }else {
              vm.clcl.rotato+=31;
              vm.ttt.perent+=11.11;
              vm.ttt.animate(vm.ttt)
            }
           vm.isBtn=false;
          }else {
            vm.clcl.endFn();
            vm.isBtn=true;
          }
        },
        dep(){
          let vm=this;
          class dep {
            constructor(){
              this.nub=0;//转动次数
              this.speed=300;//速度
              this.index=-1;//当前哪个
              this.timer=0;//setTimeOut timer
              this.all=8; //奖
              this.rotato=-35;
              this.end=true //是否转动
            }
            init(){
              this.roll();
            }
            suan(){
              //算法
              let _this=vm.clcl;
              const a=Array.from({length:_this.all},(s,x)=>x);
              for (let i=0;i<a.length-2;i++){
                let random=Math.random()*(a.length-i);
                let j=i+Math.floor(random);
                [a[i],a[j]]=[a[j],a[i]]
              }
              vm.rand=a;
            }
            roll(){
              let _this=vm.clcl;
              if(_this.end){
                return ;
              }
              _this.nub++;
              if(_this.speed<=100){
                _this.speed=100;
                _this.endFn();
              }else {
                _this.speed-=2;
              }
              _this.index=_this.nub%_this.all;
              clearTimeout(_this.timer);
              vm.indexPro=_this.index;
              _this.timer=setTimeout(vm.clcl.roll,_this.speed)
            }
            endFn(){
              this.end=true;
            }
          }
          return new dep();
        },
        tttt(){
          let ccc=['asc','ascdddd','aaa','kkk'];
          let a=Math.floor(Math.random()*4);
          this.$Tip.open({
            text:ccc[a]
          })
        }
      }
    }
</script>

<style scoped lang="scss">

  .lottery{margin-top: 124px;font-family: '黑体';font-weight: 600}
  .lottery .item{height: 327px;display: flex;justify-content: space-between;padding: 0 30px;position: relative;margin-bottom: 44px;}
  .lottery .item:nth-child(2){position: relative;z-index: 2}
  .lottery .item .item-d{width: 303px;position: relative;height: 327px}
  .lottery .item .item-d .back{height: 100%;width:100%;position: absolute;left: 0;top: 0}
  .lottery .item .item-d .back img{width: 100%}
  .lottery .item .item-d .back1{height: 100%;width:100%;position: absolute;left: 0;top: 0;z-index: 1;display: none;}
  .lottery .item .lot-act .back{display: none;}
  .lottery .item .lot-act .back1{display: block;}
  .lottery .item .item-d .product{position: absolute;left: 0;top: 13px;display: flex;justify-content: center;align-items: center;width: 100%;
   z-index: 3}
  .lottery .item .item-d .product img{margin-top: 0.185rem; width: 260px;}
  .lottery .item .t-top{position: absolute;top: -94px;left: 50%; transform: translate(-50%, 0);}
  .lottery .item .b-bot{position: absolute;top: 64px;left: 50%; transform: translate(-50%, 0);}
  .lottery .item-progress{position: absolute;left: 50%;top: -68px;transform:translate(-50%,0);width: 421px;height: 4.259259rem;}
  .lottery .item-progress img{width: 100%;}
  .lottery .item-progress .progress{
    position: absolute;top: 0;left: 0;width: 100%;height: 348px;
  }
  .lottery .item-progress .act-p .z-p img{top: 170px;left: 0}
  .lottery .item-progress .progress .z-p{position: absolute;top: 0;left: 0;width: 100%;overflow: hidden;height: 348px;   transform-origin: 50% 60%;
    transform: rotate(0deg);}
  .lottery .item-progress .act-p .z-p{transform-origin: 50% 65%;transform: rotate(-35deg);transition: 0.2s ease-out all}
  .lottery .item-progress .progress .z-p .jin{width: 126px;}
  .lottery .item-progress .progress-b{position: absolute;top: 0;left: 0;z-index: 5}
  .lottery .item-progress .progress-b img{width: 232px;}
  .lottery .item-progress .progress img{position: absolute;width: 444px;}
  .lottery .item-progress .progress-a{position: absolute;top: 0;left: 0;width: 100%;}
  .lottery .item-progress .product{position: absolute;left: 50%;top: 70px;width:291px;transform:translate(-50%,0);}
  .lottery .start-go{width: 305px;position: absolute;top: 352px;left: 50%;transform:translate(-50%,0);height:87px;background-size: cover;text-align: center;font-size: 0.26rem;display: flex;justify-content: center;align-items: center;z-index: 10;moz-user-select: -moz-none;
    -moz-user-select: none;
    -o-user-select:none;
    -khtml-user-select:none;
    -webkit-user-select:none;
    -ms-user-select:none;
    user-select:none;}
  .lottery .text{font-size: 26px;font-weight: 600;color: #fff;position: absolute;text-align: center;bottom:24px;left: 0;width: 100%;z-index: 5;line-height: 44px;}
  .lottery .item .lot-act .back1{animation: anmate 0.6s ease-out infinite}
  .lottery .item .lot-act .back1 img{width: 100%}
/*  .lottery .start-btn1{background-image:("../../assets/image/anniu_zhuanniu3.png")}
  .lottery .start-btn2{background-image:('../../assets/image/anniu_zhuanniu2.png')}*/
  @keyframes anmate {
    0%{-ms-transform:scale(0.8); /* IE 9 */
      -webkit-transform: scale(0.8); /* Safari */
      transform: scale(0.8); /* 标准语法 */}
    50%{-ms-transform:scale(1.2); /* IE 9 */
      -webkit-transform: scale(1.2); /* Safari */
      transform: scale(1.2); /* 标准语法 */}
    75%{-ms-transform:scale(1.1); /* IE 9 */
      -webkit-transform: scale(1.1); /* Safari */
      transform: scale(1.1); /* 标准语法 */}
    100%{
      -ms-transform:scale(1); /* IE 9 */
      -webkit-transform: scale(1); /* Safari */
      transform: scale(1); /* 标准语法 */
    }
  }
</style>
