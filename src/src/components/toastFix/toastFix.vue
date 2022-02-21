<template>
    <div v-if="this.$store.state.toastFlag" @touchmove.prevent @scroll.prevent @mousewheel.prevent>
        <div id="toast" class="toast_fix" @click="toastFixclick()" @scroll.prevent @touchmove.prevent @mousewheel.prevent></div>
        <div class="toast_fix_main">
          <div class="toast_fix_main_content">
            <div class="toast_fix_main_content_title">
                <!-- <span>{{title}}</span> -->
                <div class="toast_fix_main_content_title_img">
                    <img :src="title_img">
                </div>
            </div>
            <div class="toast_fix_main_content_line2">
                <!-- {{line2}} -->
              <div class="toast_fix_main_content_title_img2">
                  <img :src="title_img2">
              </div>
            </div>
            <div @click="clickBtn" class="toast_fix_btn">
                Ok
            </div>
          </div>
        </div>
    </div>
  </template>
  <script>

  export default {
    components: {},
    data() {
      return {
          title:"Metaverse-DAO",
          title_img:require("../../assets/img/png/new_logo.png"),
          title_img2:require("../../assets/img/png/comingsoon.png"),
          line2:"Coming Soon",
      }
    },
    mounted(){
      
    },
    methods: {
        clickBtn(){
            this.$store.commit("setToastFlag", false);
            $('body').css({ 
            "overflow-x":"auto","overflow-y":"auto"
          });
        },
        toastFixclick(){
          this.$store.commit("setToastFlag", false);
            $('body').css({ 
            "overflow-x":"auto","overflow-y":"auto"
          });
        }
    },
  };
  </script>
  
  <style src='./toastFix.css'></style>
  <style src='@/assets/css/commen.css'></style>