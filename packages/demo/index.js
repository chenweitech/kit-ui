import KitDemo from "./src/main";

KitDemo.install = Vue => {
  Vue.component(KitDemo.name, KitDemo);
};

export default KitDemo;
