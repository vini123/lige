<template>
  <div class="footer">
    <div class="footer_main">
      <div class="footer_title">
        Friends of Metaverse-DAO
      </div>
      <div class="footer_friends">
        <div class="footer_friends_line footer_friends_line1">
          <div @click="clickImg(item)" class="footer_friends_line_model" v-for="item in imgList1" :key="item.id">
            <img :src="item.img">
          </div>
        </div>
        <div class="footer_friends_line">
          <div @click="clickImg(item)" class="footer_friends_line_model" v-for="item in imgList2" :key="item.id">
            <img :src="item.img">
          </div>
        </div>
      </div>
      <div class="footer_icon">
        <div @click="clickImg(item)" class="footer_icon_model" v-for="item in iconList" :key="item.id">
          <img :src="item.img">
        </div>
      </div>
      <div class="footer_content1">
        {{footer_content1}}
      </div>
      <div class="footer_content2">
        <u @click="clickTo('policy')">{{footer_content21}}</u>&nbsp;&nbsp;&nbsp;&nbsp;-&nbsp;&nbsp;&nbsp;&nbsp;<u @click="clickTo('terms')">{{footer_content22}}</u>
      </div>
      <div class="footer_content3">
        <p>{{footer_content3}}</p>
        <p>{{footer_content4}}</p>
      </div>
    </div>
  </div>
</template>
<script>

import cpmmonApi from '@/assets/js/commenapi.js'

export default {
  name: "Footer",
  components: {},
  data() {
    return {
      imgList1:[
        {
          id: 0,
          img: require("../../assets/img/png/banner_bd1.png"),
          url: "https://coinmarketcap.com/",
        },
        {
          id: 1,
          img: require("../../assets/img/png/banner_bd2.png"),
          url: "https://www.certik.com/",
        },
        {
          id: 2,
          img: require("../../assets/img/png/banner_bd3.png"),
          url: "https://www.coingecko.com/",
        },
      ],
      imgList2:[
        {
          id: 0,
          img: require("../../assets/img/png/banner_bd5.png"),
          url: "https://metamask.io/",
        },
        {
          id: 1,
          img: require("../../assets/img/png/banner_bd6.png"),
          url: "https://trustwallet.com/",
        },
        {
          id: 2,
          img: require("../../assets/img/png/banner_bd4.png"),
          url: "https://bscscan.com/",
        },
      ],
      iconList:[
        {
          id: 1,
          img: require("../../assets/img/png/ icon_facebook.png"),
          url: ""
        },
        {
          id: 2,
          img: require("../../assets/img/png/ icon_tel.png"),
          url: ""
        },
        {
          id: 3,
          img: require("../../assets/img/png/ icon_twitter.png"),
          url: ""
        },
        {
          id: 4,
          img: require("../../assets/img/png/ icon_reddit.png"),
          url: ""
        },
        {
          id: 5,
          img: require("../../assets/img/png/ icon_you.png"),
          url: ""
        },
        {
          id: 6,
          img: require("../../assets/img/png/ icon_email.png"),
          url: ""
        },
      ],
      footer_content1:"Copyright © 2021 Metaverse-DAO. All Rights Reserved",
      footer_content21:"Privacy Policy",
      footer_content22:"Terms & Conditions",
      footer_content3:"Metaverse-DAO is not  an investment, the purpose is to create more applications and try more possibilities in the crypto",
      footer_content4:"market field. Metaverse-DAO makes no promises and is not responsible for any losses or errors use at your own risk.",
    };
  },
  mounted() {
  },
  methods: {
    bindfunctionAll(){
      this.bindfunction(".footer_icon_model");
    },
    bindfunction(target) {
      var _this = this;
      $(".index").on(
        "mouseover",
        target,
        function () {
          _this.index_project_mouseover($(this));
        }
      );
      $(".index").on(
        "mouseout",
        target,
        function () {
          _this.index_project_mouseout($(this));
        }
      );
      $(".index").on(
        "mousedown",
        target,
        function () {
          _this.index_project_mousedown($(this));
          _this.index_project_mouseout($(this));
        }
      );
      $(".index").on(
        "mouseup",
        target,
        function () {
          _this.index_project_mouseup($(this));
          _this.index_project_mouseover($(this));
        }
      );
    },
    index_project_mouseover(target) {
      target.addClass("btn_cover");
    },
    index_project_mouseout(target) {
      target.removeClass("btn_cover");
    },
    index_project_mousedown(target) {
      target.addClass("btn_down");
    },
    index_project_mouseup(target) {
      target.removeClass("btn_down");
    },
    clickImg(item){
      if(item.url){
        window.open(item.url);
      }
      else{
        this.$store.commit("setToastFlag", true);
        cpmmonApi.setToastFlag();
      }
    },
    clickTo(adress){
      let { href } = this.$router.resolve({ path: '/'+adress })
      window.open(href, '_blank')
      // this.$router.push('/'+adress);
    }
  },
};
</script>

<style src='./footer.css'></style>