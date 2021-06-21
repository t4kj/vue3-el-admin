import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

// 完整引入 Element Plus
import ElementPlus from "element-plus";
import "element-plus/lib/theme-chalk/index.css";

// 多语言配置
import i18n from "@/language";

createApp(App)
  .use(store)
  .use(router)
  .use(ElementPlus, { i18n: i18n.global.t })
  .use(i18n)
  .mount("#app");
