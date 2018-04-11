import Loadding from '@/dd-ui/package/loadding/index.js';
import Popup from '@/dd-ui/package/popup/index.js';
import Tip from '@/dd-ui/package/tip/index.js';
import Cell from '@/dd-ui/package/cell/cell.vue';
console.log(Loadding)
const version='1.0.0';

const install  = function(Vue) {
  if (install.installed) return;
  Vue.component(Cell.name, Cell);

  Vue.$Loadding = Vue.prototype.$Loadding = Loadding;
  Vue.$Popup = Vue.prototype.$Popup = Popup;
  Vue.$Tip = Vue.prototype.$Tip = Tip;
};


if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue);
}

export default install
