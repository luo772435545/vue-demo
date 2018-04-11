import Vue from 'vue';
import load from '@/dd-ui/package/loadding/index.vue';
const Loadding = Vue.extend(load);

class loadding {
  constructor(){
    this.lodEl=new Loadding({
      el:document.createElement('div')
    });
  }
  open(){
    document.body.appendChild(this.lodEl.$el);
    Vue.nextTick(()=>{
      this.lodEl.closed=false;
    })
  }
  endMeth(event){
    if (event.target.parentNode) {
      event.target.parentNode.removeChild(event.target);
    }
  }
  close(){
    //监听动画完成
    this.lodEl.$el.addEventListener('transitionend',this.endMeth);
    this.lodEl.closed=true
  }
}


export default new loadding()
