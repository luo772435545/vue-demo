import Vue from 'vue';
import tip from '@/dd-ui/package/tip/tip';
const Tip = Vue.extend(tip);

var tipArr=[];
class TipM {
  constructor(){
    this.El=new Tip({
      el:document.createElement('div')
    });
    this.default={
      text:'提示'
    }
  }
  open(option){
    //打开方法
    let _this=new Tip({
      el:document.createElement('div')
    }),
    tip=this;
    if(tipArr.length>0){
      clearTimeout(tipArr[0].timer);
    }
    _this.closed=false;
    tipArr.push(_this);
    Object.assign(_this,this.default,option);
    setTimeout(function () {
      document.body.appendChild(tipArr[tipArr.length-1].$el);
    },0)
    Vue.nextTick(()=>{
      _this.timer=setTimeout(function () {
            _this.closed=true;
            tip.close(_this)
        },3000)
    })
  }
  endMeth(event){
    if (event.target.parentNode) {
      event.target.parentNode.removeChild(event.target);
    }
  }
  close(_this){
    //监听动画完成
    _this.closed=true;
    _this.$el.addEventListener('transitionend',this.endMeth);
  }
}


export default new TipM()
