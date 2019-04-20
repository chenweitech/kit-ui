import Vue from "vue";
import App from "./App.vue";
import router from "./router";

import DemoBlock from "@/components/DemoBlock.vue";
Vue.component("demo-block", DemoBlock);

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

// 导入并使用组件库
import KitUI from "../packages";
Vue.use(KitUI);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
