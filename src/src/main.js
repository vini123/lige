import commenapi from "@/assets/js/commenapi.js";
// import $ from 'jquery';
import GobalVar from "@/store/gobal.js";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import Clipboard from "v-clipboard";
import "video.js/dist/video-js.css";
import Vue from "vue";
import VideoPlayer from "vue-video-player";
import "vue-video-player/src/custom-theme.css";
import VueYoutube from "vue-youtube";
import Vuex from "vuex";
import App from "./App.vue";
// import axios from 'axios';
import "./assets/css/commen.css";
import "./assets/effect/stars.css";
// import VueCookies from 'vue-cookies'
import httpRequest from "./assets/js/http";
import router from "./router";

Vue.use(VideoPlayer);
Vue.use(Clipboard);
Vue.use(VueYoutube);

Vue.use(ElementUI);
Vue.prototype.commenapi = commenapi;
Vue.config.productionTip = false;

// Vue.prototype.$axios = axios;
Vue.prototype.$myAjax = httpRequest.myAjax; // ajax请求方法
Vue.prototype.gobalVar = GobalVar;

// Vue.use(VueCookies)

const store = new Vuex.Store({
  state: {
    toastFlag: false,
    baseurl: "/test",
  },
  mutations: {
    setToastFlag(state, value) {
      state.toastFlag = value;
    },
  },
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
