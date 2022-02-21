<template>
  <div class="header" :class="headerFlag?'headerabsolute':'headerfixed'">
    <div class="header_main">
      <div v-if="logoLine" class="header_logoline">
        <div class="header_left">
          <div @click='reload()' class="header_left_logo">
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
      <div class="header_pagegotoline">
          <div  @click="clickMenu(headerMenu)" class="header_pagegotoline_model" :class="headerMenu.class2?headerMenu.class2:''" v-for="headerMenu in headerMenuList" :key="headerMenu.id">
            <div v-if="headerMenu.class2" class="headerMenuhot">
              <img src="../../assets/img/png/hot.png">
            </div>  
            <span>{{headerMenu.name}}
                <div class="header_pagegotoline_model_hr" :class="headerMenu.active?'header_pagegotoline_model_hr_active':''">
                </div>
              </span>
              <div v-if="headerMenu.subname && headerMenu.day>0" class="headerMenuSubname">
                {{headerMenu.subname}}
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
      headerFlag:true,
      logoLine:true,
      menu_prefix:"menu_",
      menu_br_prefix:"header_pagegotoline_model_hr",
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
      headerMenuList: [
        {
          id: 1,
          name: "Home",
          url:"",
          active:true,
          class2:false,
          classTo:"index",
        },
        {
          id: 2,
          name: "Must watch！",
          url:"",
          active:false,
          class2:"header_pagegotoline_model2",
          classTo:"index_video",
        },
        {
          id: 3,
          name: "Transaction data",
          url:"",
          active:false,
          class2:false,
          classTo:"index_data",
        },
        {
          id: 4,
          name: "Tokenomics",
          url:"",
          active:false,
          class2:false,
          classTo:"index_tokenmics",
        },
        {
          id: 5,
          name: "Whitepaper",
          url:"",
          active:false,
          class2:false,
          classTo:"index_mechanism",
        },
        {
          id: 6,
          name: "Roadmap",
          url:"",
          active:false,
          class2:false,
          classTo:"index_roadmap",
        },
        {
          id: 7,
          name: "How to buy",
          url:"",
          active:false,
          class2:false,
          classTo:"index_how",
        },
        {
          id: 8,
          name: "NFT market",
          subname:"",
          url:"",
          active:false,
          class2:"header_pagegotoline_model2",
          day:""
        },
        {
          id: 9,
          name: "Gamefi",
          subname:"",
          url:"",
          active:false,
          class2:"header_pagegotoline_model2",
          day:""
        },
      ],
      whitelistUrl:"",
      targetDate:"2022/04/28",
      targetDate2:"2022/03/29",
      index_data_other_height:140,
      timeout:"",
    };
  },
  mounted() {
    this.initModelHeight();
    this.initDate();
    window.addEventListener("scroll",this.scrollFunction,true);
  },
  methods: {
    clickMenu(status){
      if(status.name!="NFT market" && status.name!="Gamefi" && status.name!="Whitepaper" &&status.name!="Must watch！" ){
        for(let i=0;i<this.headerMenuList.length;i++){
          this.headerMenuList[i].active=false;
        }
        status.active=true;
      }
      
      if((status.name=="NFT market" || status.name=="Gamefi" || status.name=="Whitepaper" || status.name=="Must watch！")){
        if(status.url){
          window.open(status.url);
        }
        else{
          this.$store.commit("setToastFlag", true);
          cpmmonApi.setToastFlag();
        }
        return null;
      }
      if(status.classTo){
        clearTimeout(this.timeout);
        $( "html,body").stop();
        window.removeEventListener("scroll",this.scrollFunction,true);
        $( "html,body").animate({ "scrollTop" : status.top }, 500);
        let that = this;
        this.timeout = setTimeout(function(){
          window.addEventListener("scroll",that.scrollFunction,true);
        },500)
        // this.scrollFunction();
        // document.documentElement.scrollTop = status.top;
      }
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
    scrollFunction(e){
      // var scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop;
      // scrollTop = Math.ceil(scrollTop);
      // // let top = document.getElementsByClassName("index_video")[0].offsetTop-this.index_data_other_height;
      // let top = document.getElementsByClassName("index_data")[0].offsetTop-this.index_data_other_height;
      // // let top = document.getElementsByClassName("index_video")[0].offsetTop;
      // if(scrollTop>=top){
      //   this.logoLine = false;
      //   if(this.headerFlag){
      //     this.headerFlag = false;
      //     $(".header_pagegotoline").css({'height':'0px','padding-top':'20px'});
      //     $(".header_pagegotoline").animate({'height':'56px'},500);
      //   }
      // }
      // else{
      //   this.logoLine = true;
      //   this.headerFlag = true;
      //   $(".header_pagegotoline").css({'height':'56px','padding-top':'0px'});
      // }
      // this.checkMenuActive(scrollTop);

      setTimeout(() => {
        var scrollTop = e.target.documentElement.scrollTop || e.target.body.scrollTop;
      scrollTop = Math.ceil(scrollTop);
      // let top = document.getElementsByClassName("index_video")[0].offsetTop-this.index_data_other_height;
      let top = document.getElementsByClassName("index_data")[0].offsetTop-this.index_data_other_height;
      // let top = document.getElementsByClassName("index_video")[0].offsetTop;
      if(scrollTop>=top){
        this.logoLine = false;
        if(this.headerFlag){
          this.headerFlag = false;
          $(".header_pagegotoline").css({'height':'0px','padding-top':'20px'});
          $(".header_pagegotoline").animate({'height':'56px'},500);
        }
      }
      else{
        this.logoLine = true;
        this.headerFlag = true;
        $(".header_pagegotoline").css({'height':'56px','padding-top':'0px'});
      }
      this.checkMenuActive(scrollTop);
      }, 50);
    },
    initModelHeight(){
      this.headerMenuList.forEach(item => {
        if(item.classTo){
          let top = document.getElementsByClassName(item.classTo)[0].offsetTop;
          if(item.classTo=="item"){
            top=0;
          }
          else if(item.classTo=="index_data"){
            top-=this.index_data_other_height;
          }
          else if(item.classTo=="index_video"){
            top-=this.index_data_other_height;
          }
          item.top = top;
        }
      });
    },
    checkMenuActive(scrollTop){

      for(let i=0;i<this.headerMenuList.length-2;i++){
        if(i==0){
          if(scrollTop<this.headerMenuList[i+1].top){
            this.changeActive(i);
          }
        }
        else if(i==this.headerMenuList.length-3){
          if(scrollTop>=this.headerMenuList[i].top){
            this.changeActive(i);
          }
        }
        else{
          if(i!=4 && i!=1){
            if(this.headerMenuList[i].top<=scrollTop && this.headerMenuList[i+1].top>scrollTop){
              this.changeActive(i);
            }
          }
        }
        
      }
    },
    changeActive(i){
      // if(!this.headerMenuList[i].active){
      //     this.headerMenuList.forEach(item=>{
      //       item.active = false;
      // })
      this.headerMenuList.forEach(item=>{
            item.active = false;
          })
        this.headerMenuList[i].active = true;
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
    reload(){
      this.$router.go(0);
    },
    initDate(){
      let targetDate = new Date(this.targetDate);
      targetDate.setHours(8);
      targetDate.setMinutes(0);
      targetDate.setSeconds(0);
      let targetDate2 = new Date(this.targetDate2);
      targetDate2.setHours(8);
      targetDate2.setMinutes(0);
      targetDate2.setSeconds(0);
      let date = new Date();
      date.setHours(8);
      date.setMinutes(0);
      date.setSeconds(0);
      let nowDate = new Date();
      if(nowDate<date){
        date.setDate(date.getDate()-1);
      }
      let date1 = (targetDate - date)/(1*24*60*60*1000);
      let result = this.headerMenuList.filter(item=>item.name=="NFT market");
      this.headerMenuList[7].day = Math.round(date1);
      result[0].subname = "in "+Math.round(date1)+" days";
      let result2 = this.headerMenuList.filter(item=>item.name=="Gamefi");
      let date2 = (targetDate2 - date)/(1*24*60*60*1000);
      this.headerMenuList[8].day = Math.round(date2);
      result2[0].subname = "in "+Math.round(date2)+" days";
    }
  },
};
</script>

<style src='./header.css'></style>
<style src='@/assets/css/commen.css'></style>
<style src='@/assets/font/font.css'></style>