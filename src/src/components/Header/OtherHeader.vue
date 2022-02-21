<template>
    <div class="header headerabsolute headerOther">
      <div class="header_main">
        <div class="header_logoline">
          <div class="header_left">
            <div @click='clickToIndex()' class="header_left_logo">
              <img src="../../assets/img/logo/logo.png" />
            </div>
            <div @click="clickToUrl(whitelistUrl)" class="header_left_right">
              Whitelist
            </div>
          </div>
          <div class="header_right">
            <div class="headergo_model" v-for="headergo in headerGoList" :key="headergo.id">
                <div @click="clickImg(headergo)">
                  <img :src="headergo.img">
                </div>
            </div>
        </div>
        </div>
      </div>
    </div>
  </template>
  <script>
  
  import $ from 'jquery'
  import cpmmonApi from '@/assets/js/commenapi.js'
  
  export default {
    components: {},
    data() {
      return {
        whitelistUrl:"",
        headerGoList:[
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
      };
    },
    mounted() {
    },
    methods: {
      clickImg(item){
        if(item.url){
          window.open(item.url);
        }
        else{
          this.$store.commit("setToastFlag", true);
          cpmmonApi.setToastFlag();
        }
      },
      clickToUrl(url){
        if(url){
          window.open(url);
        }
        else{
          this.$store.commit("setToastFlag", true);
          cpmmonApi.setToastFlag();
        }
      },
      clickToIndex(){
        this.$router.push('/index');
      }
    },
  };
  </script>
  
  <style src='./header.css'></style>
  <style src='@/assets/css/commen.css'></style>
  <style src='@/assets/font/font.css'></style>