import Vue from 'vue';
import popup from '@/dd-ui/package/popup/popup';
const Popup = Vue.extend(popup);

class PopupM {
  constructor(){
    this.El=new Popup({
      el:document.createElement('div')
    });
    this.default={
       title:'标题',
       body:'文字',
       cancel:false,
       cancelText:'取消',
       enterText:'确定',
       callback:function(){},
       cancelCallback:function(){},
    }
  }
  open(option){
    //打开方法
    let _this=this.El;
    _this.closed=false;
    document.body.appendChild(this.El.$el);
    Object.assign(_this,this.default,option);
    Vue.nextTick(()=>{

    })
  }
  endMeth(event){
    if (event.target.parentNode) {
      event.target.parentNode.removeChild(event.target);
    }
  }
  close(){
    //监听动画完成
    this.El.closed=true;
    this.El.$el.addEventListener('transitionend',this.endMeth);

  }
}


export default new PopupM()
