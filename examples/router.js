import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

export default new Router({
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      redirect: "/guide/install"
    },
    {
      path: "/home",
      name: "home",
      component: () => import("./views/Home.vue"),
      children: [
        {
          path: "/guide/install",
          name: "install",
          component: () => import("./docs/getInstall.md")
        },
        {
          path: "/guide/quickStart",
          name: "quickStart",
          component: () => import("./docs/quickStart.md")
        },
        {
          path: "/guide/components/kitDemo",
          name: "kitDemo",
          component: () => import("./docs/kitDemo.md")
        }
      ]
    }
  ]
});
