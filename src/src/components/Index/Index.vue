<template>
  <div class="index">
    <Header></Header>
    <div class="index_top"></div>
    <div class="index_bg">
      <!-- <img
        src="../../assets/img/png/banner.png"
      /> -->
      <div class="index_banner">
        <div class="index_banner_main">
          <div class="index_banner_main_content">
            <div class="index_banner_main_content_bg blur"></div>
            <div class="index_banner_main_content_main">
              <div class="index_banner_main_content_title">
                <img src="../../assets/img/png/welcome.png">
              </div>
              <div class="index_banner_main_content_text">
                <p>
                Metaverse-DAO is a cute puppy who has dreamed of becoming an astronaut since birth. 
                Every child is trying to ask for delicious snacks. 
                He always likes to look up at the stars and yearns to travel to the moon, because that is his dream. .
                </p>
                <p>
                  One thing is that it like all children, likes games. 
                  At the same time, it hates fraud, speculators and all unethical transactions, It pursues integrity.
                </p>
                <p>
                  It always hopes to find more partners with the same hobbies, play games together, and travel to the moon together. 
                  Yes, it is thinking about this in its dreams. 
                </p>
                <p>But who wouldn't?</p>
              </div>
              <div class="index_banner_main_content_four index_banner_main_content_four1">
                <img src="../../assets/img/png/sijiao.png">
              </div>
              <div class="index_banner_main_content_four index_banner_main_content_four2">
                <img src="../../assets/img/png/sijiao.png">
              </div>
              <div class="index_banner_main_content_four index_banner_main_content_four3">
                <img src="../../assets/img/png/sijiao.png">
              </div>
              <div class="index_banner_main_content_four index_banner_main_content_four4">
                <img src="../../assets/img/png/sijiao.png">
              </div>
            </div>
          </div>
          <div class="index_banner_btn_line">
            <div @click="clickBannerBtn(1)" class="index_banner_btn_line_btn1">
              <div class="index_banner_btn_line_btn1_img">
                <img src="../../assets/img/png/how_icon3.png">
              </div>
              Buy On Pancake
            </div>
            <div @click="clickBannerBtn(2)" class="index_banner_btn_line_btn2">
              <div class="index_banner_btn_line_btn2_img">
                <img src="../../assets/img/png/banner_btn2.png">
              </div>
              Chart
            </div>
          </div>
          <div class="index_banner_copy_line">
            <div class="index_banner_copy_line_icon">
              <div class="index_banner_copy_line_icon_img">
                <img src="../../assets/img/png/copy_icon.png">
              </div>
            </div>
            <input v-model="banner_copy_text" class="index_banner_copy_line_input" type="text" readonly />
            <div v-clipboard="banner_copy_text" class="index_banner_copy_line_btn"
            v-clipboard:success="successClip"
            v-clipboard:error="errorClip"
            style="display: none;"
            >
              Copy
            </div>
          </div>
          <div class="index_banner_bd_line">
            <div @click="clickImg(item)" class="index_banner_bd_line_model" v-for="item in bannerbdList" :key="item.id">
              <img :src="item.src">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index_bg_big">
      <!-- <img src="../../assets/img/png/bg_big.png"> -->
      <div class="index_bg_big_up">
        <!-- <div class="index_bg_big_up_img index_bg_big_up_img1">
          <img src="../../assets/img/png/bg_icon1.png">
        </div> -->
        <div class="index_bg_big_up_img index_bg_big_up_img2 index_bg_big_up_img2_temp" >
          <img src="../../assets/img/png/bg_icon2.png">
        </div>
        <div class="index_bg_big_up_img index_bg_big_up_img3 index_bg_big_up_img3_temp">
          <img src="../../assets/img/png/bg_icon3.png">
        </div>
        <div class="index_bg_big_up_img index_bg_big_up_img4 index_bg_big_up_img4_temp">
          <img src="../../assets/img/png/bg_icon4.png">
        </div>
        <div class="index_bg_big_up_img index_bg_big_up_img5 index_bg_big_up_img5_temp">
          <img src="../../assets/img/png/bg_icon5.png">
        </div>
      </div>
    </div>
    <div v-show="false" class="index_video">
      <div class="index_video_width">
        <div @click="clickvideo" class="index_video_main">
          <youtube :video-id="getId()" ref="youtube" @playing="playing" class="index_youtube" control:false></youtube>

          <div v-if="videoUrl==''" class="index_video_main_player">
            <img src="../../assets/img/png/player.png">
          </div>
          <div v-if="videoUrl==''" class="index_video_main_logo">
            <span>Metaverse-DAO</span>
            <div class="index_video_main_logo_img">
              <img src="../../assets/img/png/how_icon4.png">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index_data index_data_temp">
      <div class="index_data_blur">

      </div>
      <!-- <div class="index_common_bg">
        <img src="../../assets/img/png/banner.png">
      </div> -->
      <div class="index_video_width">
        <div class="index_data_main">
          <div class="index_data_title">
            <div class="index_data_title_bg">
              <img src="../../assets/img/png/title_icon.png">
            </div>
            <div class="index_data_title_content index_data_title_content1">
              {{index_data}}
            </div>
          </div>
          <div class="index_data_main_chuangkou">
            <div class="index_data_main_model">
              <div class="index_data_main_model_line1">
                <div class="index_data_main_model1_line" >
                  <p>{{data1.line1}}</p>
                  {{data1.line1Data}}
                  <!-- <div @mouseover="tanchuang1flag=true" @mouseleave="tanchuang1flag=false" class="index_data_main_model_img index_data_main_model_img1">
                    <img src="../../assets/img/png/wenhao.png">
                  </div> -->
                </div>
                <div class="index_data_main_model1_line">
                  <p>{{data1.line2}}</p>
                  {{data1.line2Data}}
                  <div @mouseover="tanchuang2flag=true" @mouseleave="tanchuang2flag=false" class="index_data_main_model_img index_data_main_model_img2">
                    <img src="../../assets/img/png/wenhao.png">
                  </div>
                </div>
              </div>
              <div class="index_data_main_model1_line3">
                <div class="index_data_main_model1_line3_left">
                  <p>{{data1.line3}}</p>
                </div>
                <div class="index_data_main_model1_line3_center">
                  {{data1.line3Data}}
                </div>
                <div @mouseover="tanchuang3flag=true" @mouseleave="tanchuang3flag=false" class="index_data_main_model_img index_data_main_model_img3">
                  <img src="../../assets/img/png/wenhao.png">
                </div>
              </div>
            </div>
            <div v-if="tanchuang1flag" class="tanchuang tanchuang1">
              <span>{{tanchuang1}}</span>
            </div>
            <div v-if="tanchuang2flag" class="tanchuang tanchuang2">
              <span>{{tanchuang2}}</span>
            </div>
            <div v-if="tanchuang3flag" class="tanchuang tanchuang3">
              <span>{{tanchuang3}}</span>
            </div>
            <div v-if="tanchuang4flag" class="tanchuang tanchuang4">
              <span>{{tanchuang4}}</span>
            </div>
          </div>
          <div class="index_data_main_input_tip">
            Dividends Inquire
          </div>
          <div class="index_data_main_input">
            <div class="index_data_main_input_text">
              <input v-model="data3.input_text" :placeholder="data3.input_text_placeholder"></input>
            </div>
            <div @click="searchWithdraw()" class="index_data_main_input_btn">
              Inquire
            </div>
            <div @mouseover="tanchuang4flag=true" @mouseleave="tanchuang4flag=false" class="index_data_main_model_img index_data_main_model_img4">
              <img src="../../assets/img/png/wenhao.png">
            </div>
          </div>
          <div v-if="data3.searchWithdrawStatus=='result'" class="index_data_main_input_sub">
            <div class="index_data_main_input_sub_model">
              {{data3.input_text_sub1}}<span>{{data3.input_text_sub2}}</span>
              <div class="index_data_main_input_sub_model_icon">
                <img src="../../assets/img/png/data3_icon.png">
              </div>
            </div>
            <div class="index_data_main_input_sub_model">
              {{data3.input_text_sub3}}<span>{{data3.input_text_sub4}}</span>
              <div class="index_data_main_input_sub_model_icon">
                <img src="../../assets/img/png/data3_icon.png">
              </div>
            </div>
          </div>
          <div v-if="data3.searchWithdrawStatus=='error'" class="index_data_main_input_sub_error">
            {{data3.input_text_errorMSG}}
          </div>
        </div>
      </div>
    </div>
    <div class="index_tokenmics">
      <!-- <div class="index_common_bg index_tokenmics_bg">
        <img src="../../assets/img/png/banner.png">
      </div> -->
      <div class="index_video_width">
        <div class="index_tokenmics_main">
          <div class="index_data_title index_tokenmics_title">
            <div class="index_data_title_bg">
              <img src="../../assets/img/png/title_icon.png">
            </div>
            <div class="index_data_title_content index_data_title_content">
              {{index_tokenmics}}
            </div>
          </div>
          <div class="index_tokenmics_moon">
            <img src="../../assets/img/png/moon.png">
          </div>
          <div class="index_tokenmics_content1">
            0% Team
          </div>
          <div class="index_tokenmics_content2">
            <p>50%</p>
            <p>Burned</p>
          </div>
          <div class="index_tokenmics_content3">
            <p>15%</p>
            <p>Cross chain</p>
          </div>
          <div class="index_tokenmics_content4">
            <p>20%</p>
            <p>Presale</p>
          </div>
          <div class="index_tokenmics_content5">
            <p>14%</p>
            <p>Liquidity</p>
          </div>
          <div class="index_tokenmics_content6">
            <p>1% Airdrop</p>
          </div>
        </div>
      </div>
    </div>
    <div class="index_tax">
      <!-- <div class="index_common_bg index_tax_bg">
        <img src="../../assets/img/png/banner.png">
      </div> -->
      <div class="index_video_width">
        <div class="index_tax_main">
          <div class="index_data_title index_tax_title">
            <div class="index_data_title_bg">
              <img src="../../assets/img/png/title_icon.png">
            </div>
            <div class="index_data_title_content index_tax_title_content">
              {{index_tax}}
            </div>
          </div>
          <div class="index_tax_main_line1">
            Purchase Slippage<span>0%(tax-free)</span>
          </div>
          <div class="index_tax_main_line1 index_tax_main_line2">
            Selling Slippage<span>10%(In special circumtances,the slippage will be higher,up to 45%)</span>
          </div>
          <div class="index_tax_main_img">
            <img src="../../assets/img/png/index_tax.png">
            <div class="index_tax_main_img_main">
              <!-- <div class="index_tax_main_img_content">
                20% Team
              </div> -->
              <div class="index_tax_main_img_content">
                100% Dividends
              </div>
              <!-- <div class="index_tax_main_img_content">
                40% Prize pool & burning
              </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index_mechanism">
      <!-- <div class="index_common_bg index_mechanism_bg">
        <img src="../../assets/img/png/banner.png">
      </div> -->
      <div class="index_video_width">
        <div class="index_mechanism_main">
          <div class="index_data_title index_mechanism_title">
            <div class="index_data_title_bg">
              <img src="../../assets/img/png/title_icon.png">
            </div>
            <div class="index_data_title_content index_mechanism_title_content">
              {{index_mechanism}}
            </div>
          </div>
          <div class="index_mechanism_text_block">

          </div>
          <div class="index_mechanism_text">
            <div class="index_mechanism_text_main">
              {{index_mechanism_text}}
            </div>
          </div>
          <div class="index_mechanism_line index_mechanism_line1">
            <div class="index_mechanism_line_model">
              <div class="index_mechanism_line_model_title">
                <span>Ⅰ Usdt dividend</span>
                <div class="index_mechanism_line_model_title_img index_mechanism_line_model_title_img1">
                  <img src="../../assets/img/png/mechanism_icon1.png">
                </div>
              </div>
              <div class="index_mechanism_line_model_content">
                Holding Metaverse-DAO will get dividend with USDT, it will automatically send. 
                When anyone sells Metaverse-DAO, others will get dividends
              </div>
            </div>
            <div class="index_mechanism_line_model">
              <div class="index_mechanism_line_model_title">
                <span>Ⅱ The nightmare of speculators and robots</span>
                <div class="index_mechanism_line_model_title_img index_mechanism_line_model_title_img2">
                  <img src="../../assets/img/png/mechanism_icon4.png">
                </div>
              </div>
              <div class="index_mechanism_line_model_content">
                We hate speculators and robots stealing the wealth of the holders. 
                If the tokens rise too much in the short term, it will temporarily increase the selling tax. 
                Wealth should belong to the real holders, not let the thieves make money
              </div>
            </div>
            <!-- <div class="index_mechanism_line_model">
              <div class="index_mechanism_line_model_title">
                <span>Ⅱ Never stop buying</span>
                <div class="index_mechanism_line_model_title_img index_mechanism_line_model_title_img1">
                  <img src="../../assets/img/png/mechanism_icon2.png">
                </div>
              </div>
              <div class="index_mechanism_line_model_content">
                In order to give every buyer a chance to get rich and make more people to buy,  
                prize pool has prepared generous rewards. If no one buy Metaverse-DAO for 1 hour, 
                the last buyer will get 35% of the prize pool, if no one win for 7 days, 35% of it will be burned
              </div>
            </div> -->
          </div>
          <!-- <div class="index_mechanism_line">
            <div class="index_mechanism_line_model">
              <div class="index_mechanism_line_model_title">
                <span>Ⅲ Dapps development fund</span>
                <div class="index_mechanism_line_model_title_img index_mechanism_line_model_title_img1">
                  <img src="../../assets/img/png/mechanism_icon3.png">
                </div>
              </div>
              <div class="index_mechanism_line_model_content">
                Metaverse-DAO has a plan and vision for Dapps development, it needs development fund. 
                Any sale will charge 10% tax, most of which will be used for dividends and prize pool, 
                and some will be given to the team for promotion and more Dapps development
              </div>
            </div>
            <div class="index_mechanism_line_model">
              <div class="index_mechanism_line_model_title">
                <span>Ⅳ The nightmare of speculators and robots</span>
                <div class="index_mechanism_line_model_title_img index_mechanism_line_model_title_img2">
                  <img src="../../assets/img/png/mechanism_icon4.png">
                </div>
              </div>
              <div class="index_mechanism_line_model_content">
                We hate speculators and robots stealing the wealth of the holders. 
                If the tokens rise too much in the short term, it will temporarily increase the selling tax. 
                Wealth should belong to the real holders, not let the thieves make money
              </div>
            </div>
          </div> -->
          <div class="index_mechanism_line">
            <div class="index_mechanism_line_model">
              <div class="index_mechanism_line_model_title">
                <span>Ⅲ price protection</span>
                <div class="index_mechanism_line_model_title_img index_mechanism_line_model_title_img1">
                  <img src="../../assets/img/png/mechanism_icon5.png">
                </div>
              </div>
              <div class="index_mechanism_line_model_content">
                In order to protect the holders, if the price dumps too fast in the short term, 
                the selling tax will increase and it will contribute to the dividend and the prize pool, 
                anyone who buys will get a very generous reward from the prize pool in this time
              </div>
            </div>
            <div class="index_mechanism_line_model">
              <div class="index_mechanism_line_model_title">
                <span>Ⅳ Refuse tax evasion</span>
                <div class="index_mechanism_line_model_title_img index_mechanism_line_model_title_img1">
                  <img src="../../assets/img/png/mechanism_icon6.png">
                </div>
              </div>
              <div class="index_mechanism_line_model_content">
                In order to prevent speculators from selling all Metaverse-DAO at one time when taxes are low, 
                the maximum amount of Metaverse-DAO sold at one time is 200,000,000
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index_roadmap">
      <!-- <div class="index_common_bg index_roadmap_bg">
        <img src="../../assets/img/png/banner.png">
      </div> -->
      <div class="index_video_width">
        <div class="index_roadmap_main">
          <div class="index_data_title index_roadmap_title">
            <div class="index_data_title_bg">
              <img src="../../assets/img/png/title_icon.png">
            </div>
            <div class="index_data_title_content index_roadmap_title_content">
              {{index_roadmap}}
            </div>
          </div>
          <div class="index_roadmap_main_blank"></div>
          <div class="index_roadmap_main_content">
            <div class="index_roadmap_main_content_title">
              <span>Metaverse-DAO</span>
              <div class="index_roadmap_main_content_title_icon">
                <img src="../../assets/img/png/new_logo.png">
              </div>
            </div>
            <div class="index_roadmap_main_content_left">
              <div class="index_roadmap_main_content_left_btn"
              :class="item.flag?'index_roadmap_main_content_left_btn_active':''"
              @click="roadmapClick(item)"
              v-for="item in roadmaptitleList" :key="item.id">
                {{item.name}}
              </div>
            </div>
            <div class="index_roadmap_main_content_right">
              <div class="index_roadmap_main_content_right_line" v-for="item in roadmapNameRealList">
                <div class="index_roadmap_main_content_right_line_img">
                  <img v-if="item.flag" src="../../assets/img/png/roadmap_right.png">
                </div>
                <div class="index_roadmap_main_content_right_line_text">
                  <span>{{item.name}}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="index_how">
      <!-- <div class="index_common_bg index_how_bg">
        <img src="../../assets/img/png/banner.png">
      </div> -->
      <div class="index_video_width">
        <div class="index_how_main">
          <div class="index_data_title index_how_title">
            <div class="index_data_title_bg">
              <img src="../../assets/img/png/title_icon.png">
            </div>
            <div class="index_data_title_content index_how_title_content">
              {{index_how}}
            </div>
          </div>
          <div class="index_how_line index_how_line1">
            <div class="index_how_line_left">
              <p>1. Download Trust Wallet</p>
              <div class="index_how_line_left_icon index_how_line_left_icon1">
                <img src="../../assets/img/png/how_icon1.png">
              </div>
            </div>
            <div class="index_how_line_right">
              Download <span @click="clickBuy(TrustWalletUrl)">TrustWallet</span> (an app for phone),  or <span @click="clickBuy(MetaMaskUrl)">MetaMask</span>
              (a crypto wallet in form of a browser extension). After that you will have to add 
              <span @click="clickBuy(BinanceSmartChainUrl)">Binance Smart Chain</span> to your network-list. 
            </div>
          </div>
          <div class="index_how_line">
            <div class="index_how_line_left">
              <p>2. Buy or send BNB to Wallet</p>
              <div class="index_how_line_left_icon index_how_line_left_icon2">
                <img src="../../assets/img/png/how_icon2.png">
              </div>
            </div>
            <div class="index_how_line_right">
              Purchase BNB on an exchange (Binance, Coinbase etc.) and transfer the 
              tokens to your wallet address, BEP-20 addresses start with a "0x", or 
              purchase BNB on Binance Smart Chain (<span @click="clickBuy(PancakeUrl)">Pancake</span>)
            </div>
          </div>
          <div class="index_how_line">
            <div class="index_how_line_left">
              <p>3. Purchase on Pancake</p>
              <div class="index_how_line_left_icon index_how_line_left_icon3">
                <img src="../../assets/img/png/banner_btn1.png">
              </div>
            </div>
            <div class="index_how_line_right">
              Purchase Metaverse-DAO on <span @click="clickBuy(Pancake2Url)">Pancake</span> or use the token address:TBD Choose 
              Metaverse-DAO and Swap BNB for Metaverse-DAO
            </div>
          </div>
          <div class="index_how_line index_how_line4">
            <div class="index_how_line_left">
              <p>4. View Metaverse-DAO</p>
              <div class="index_how_line_left_icon index_how_line_left_icon4">
                <img src="../../assets/img/png/new_logo.png">
              </div>
            </div>
            <div class="index_how_line_right">
              You need to add Metaverse-DAO contract to your MetaMask or Trust Wallet to view your $METADAO.
            </div>
          </div>
          <div class="index_how_jiantou">
            <img src="../../assets/img/png/index_how_jiantou.png">
          </div>
        </div>
      </div>
    </div>
    <div style="display: none;">
      <input type="text" id="address" style='margin-left: 0px;width: 400px; border-radius: 5px; outline: medium; text-align: center; border: 1px solid #666666;' placeholder="InputTokenAddress" />
      <div type="button" @click="search()" style='margin-left: 18px;width: 60px; border-radius: 5px;text-align: center;' >Search</div>
      <span>
          <p id="tokenName"></p>
          <p id="bnbBalance"></p>
          <p id="basePrice"></p>
          <p id="lpPrice"></p>
          <p id="rate"></p>
          <p id="huadian"></p>
  
          <input type="text" id="withdrawAddress" style='margin-left: 0px;width: 400px; border-radius: 5px; outline: medium; text-align: center; border: 1px solid #666666;' placeholder="InputUserAddress" />
          <button type="button" onclick="searchWithdraw()" style='margin-left: 18px;width: 120px; border-radius: 5px;text-align: center;' >Search Withdraw</button>
          <p id="withdrawable"></p>
          <p id="withdrawn"></p>
      </span>
  
      <span><p>=========================================================================分界线========================================================================</p></span>
  
      <span>
          <table id="table1"></table>
      </span>
      <p id="arrPrice"></p>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import $ from "jquery";
import cpmmonApi from '@/assets/js/commenapi.js'
import Header from '@/components/Header/Header.vue'
import Footer from '@/components/Footer/Footer.vue'

export default {
  name: "Index",
  components: {
    Header,Footer
  },
  data() {
    return {
      data1:{
        line1:"Current Price",
        line1Data:"0.00000284175 USD",
        line2:"Benchmark Price",
        line2Data:"0.00000420175 USD",
        line3:"Selling Slippage Now",
        line3Data:"20.80%"
      },
      data2:{
        line1:"Current Price",
        line2:"0.00000284175 USD",
        line3:"Base price",
        line4:"0.00000420175 USD",
        line5:
          {one:"Purchase rewards",
            two:"10.40%"
          },
        line6:          
        {one:"Selling Slippage",
            two:"10.40%"
          },
      },
      data3:{
        // input_text:"0xc82738172837a871287sdasjhdDJHSJHD82",
        input_text:"",
        input_text_placeholder:"Enter your wallet address",
        input_text_sub1:"Pending dividend:",
        input_text_sub2:"",
        input_text_sub3:"Dividends received:",
        input_text_sub4:"",
        searchWithdrawStatus:"",
        input_text_errorMSG:"Please enter the correct wallet address!"
      },
      tanchuang1flag:false,
      tanchuang2flag:false,
      tanchuang3flag:false,
      tanchuang4flag:false,
      tanchuang1:"texttexttexttextt exttexttexttexttexttext texttexttexttexttext texttexttexttexttexttexttex ttexttexttexttexttext texttexttexttexttexttextt exttexttexttexttex ttexttexttexttexttexttexttextt exttexttexttexttexttexttexttexttexttex ttexttexttexttexttext",
      tanchuang2:"texttexttexttextt exttexttexttexttexttext texttexttexttexttext texttexttexttexttexttexttex ttexttexttexttexttext texttexttexttexttexttextt exttexttexttexttex ttexttexttexttexttexttexttextt exttexttexttexttexttexttexttexttexttex ttexttexttexttexttext",
      tanchuang3:"texttexttexttextt exttexttexttexttexttext texttexttexttexttext texttexttexttexttexttexttex ttexttexttexttexttext texttexttexttexttexttextt exttexttexttexttex ttexttexttexttexttexttexttextt exttexttexttexttexttexttexttexttexttex ttexttexttexttexttext",
      tanchuang4:"texttexttexttextt exttexttexttexttexttext texttexttexttexttext texttexttexttexttexttexttex ttexttexttexttexttext texttexttexttexttexttextt exttexttexttexttex ttexttexttexttexttexttexttextt exttexttexttexttexttexttexttexttexttex ttexttexttexttexttext",
      index_data:"Transaction data",
      index_tokenmics:"Tokenmics",
      index_tax:"Tax distribution",
      index_mechanism:"Mechanism",
      index_how:"How to buy",
      index_roadmap:"Roadmap",
      banner_copy_text:"Please wait for the announcement",
      index_intro_status: "1",
      bannerbdList:[
        {
          id:0,
          src:require("../../assets/img/png/banner_bd1.png"),
          url:"https://coinmarketcap.com/"
        },
        {
          id:1,
          src:require("../../assets/img/png/banner_bd2.png"),
          url:"https://www.certik.com/"
        },
        {
          id:2,
          src:require("../../assets/img/png/banner_bd3.png"),
          url:"https://metamask.io/"
        },
        {
          id:3,
          src:require("../../assets/img/png/banner_bd4.png"),
          url:"https://bscscan.com/"
        },
      ],
      playerOptions : {
        playbackRates: [0.7, 1.0, 1.5, 2.0], //播放速度
        autoplay: false, //如果true,浏览器准备好时开始回放。
        muted: false, // 默认情况下将会消除任何音频。
        loop: false, // 导致视频一结束就重新开始。
        preload: 'auto', // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
        language: 'zh-CN',
        aspectRatio: '16:9', // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
        fluid: true, // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
        sources: [{
          src: 'https://www.bilibili.com/video/BV1Nq4y1A7Bv?spm_id_from=333.851.b_7265636f6d6d656e64.1',
        }],
        // poster: "../../static/images/test.jpg", //你的封面地址
        // width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试', //允许覆盖Video.js无法播放媒体源时显示的默认信息。
        controlBar: {
          timeDivider: true,
          durationDisplay: true,
          remainingTimeDisplay: false,
          fullscreenToggle: true  //全屏按钮
        }
    },
      roadmaptitleList:[
        {
          id:0,
          name:"Phase 1",
          flag:true,
          right_flag:"1,2,3,4"
        },
        {
          id:1,
          name:"Phase 2",
          flag:false,
          right_flag:""
        },
        {
          id:2,
          name:"Phase 3",
          flag:false,
          right_flag:""
        },
        {
          id:3,
          name:"Phase 4",
          flag:false,
          right_flag:""
        },
        {
          id:4,
          name:"Phase 5",
          flag:false,
          right_flag:""
        },
      ],
      roadmapNameRealList:[],
      roadmapNameList:[
        [
          {
            id:0,
            name:"Project development",
            flag:true
          },
          {
            id:1,
            name:"Community（Telegram）",
            flag:true
          },
          {
            id:2,
            name:"Launch social media sites（Twitter）",
            flag:true
          },
          {
            id:3,
            name:"Token website launch",
            flag:true
          },
          {
            id:4,
            name:"Media reports",
            flag:true
          },
          {
            id:5,
            name:"Metaverse-DAO is Born",
            flag:true
          },
          {
            id:6,
            name:"5,000 telegram members",
            flag:true
          },
        ],
        [
          {
            id:0,
            name:"Apply for listing on CoinGecko",
            flag:false
          },
          {
            id:1,
            name:"Apply for listing on CoinMarketCap",
            flag:false
          },
          {
            id:2,
            name:"Third party audit",
            flag:false
          },
          {
            id:3,
            name:"Create community foundation",
            flag:false
          },
          {
            id:4,
            name:"10,000 telegram members",
            flag:false
          },
          {
            id:5,
            name:"Game website launch",
            flag:false
          },
          {
            id:6,
            name:"Developmengt of Game NFT market",
            flag:false
          },
          {
            id:7,
            name:"Game community (Discord)",
            flag:false
          },
          {
            id:8,
            name:"Launch social media sites (Instagram)",
            flag:false
          },
        ],
        [
          {
            id:0,
            name:"Game NFT Series Released",
            flag:false
          },
          {
            id:1,
            name:"Release competitive game for Metaverse-DAO",
            flag:false
          },
          {
            id:2,
            name:"30,000 telegram members",
            flag:false
          },
          {
            id:3,
            name:"Large influencer marketing push",
            flag:false
          },
          {
            id:4,
            name:"Air drop",
            flag:false
          },
          {
            id:5,
            name:"More memes of Metaverse-DAO and game",
            flag:false
          },
        ],
        [
          {
            id:0,
            name:"Community Vote",
            flag:false
          },
          {
            id:1,
            name:"Website Redesign",
            flag:false
          },
          {
            id:2,
            name:"100,000 telegram members",
            flag:false
          },
          {
            id:3,
            name:"Development of Metaverse-DAO financial dapp",
            flag:false
          },
          {
            id:4,
            name:"Build additional Partnerships worldwide",
            flag:false
          },
          {
            id:5,
            name:"Apply for new Exchange Lisitings",
            flag:false
          },
        ],
        [
          {
            id:0,
            name:"Release more games for Metaverse-DAO",
            flag:false
          },
          {
            id:1,
            name:"150,000 telegram members",
            flag:false
          },
          {
            id:2,
            name:"Partner with artists for NFT series",
            flag:false
          },
          {
            id:3,
            name:"Give away Tesla to community supporters at $500m market cap",
            flag:false
          },
          {
            id:4,
            name:"Established complete Metaverse-DAO Dapps alliance",
            flag:false
          },
          {
            id:5,
            name:"Continue to create unlimited possibilities with the community",
            flag:false
          },
        ],
      ],  
      videoUrl:"https://www.youtube.com/watch?v=j6tr5SX79TU",
      // videoUrl:"",
      loop:1,
      targetDate:"2022/01/31",
      clickBannerBtnUrl1:"",
      clickBannerBtnUrl2:"",
      tokenAddress:"0xb3823bf90671df91Cb716Cf7ec2AfdAE16114755",
      NODE_URL:"https://speedy-nodes-nyc.moralis.io/e741ef70af12c8b4f268c8c2/bsc/testnet",
      defaultAccount : '0x105e22D658dE314E8D6DEdA8daB9875507e88E54',
      abi:[
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "account",
                  "type": "address"
              }
          ],
          "name": "balanceOf",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "getLpPriceNow",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "getBasePriceNow",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "_name",
          "outputs": [
              {
                  "internalType": "string",
                  "name": "",
                  "type": "string"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
              }
          ],
          "name": "withdrawableDividendOf",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [
              {
                  "internalType": "address",
                  "name": "addr",
                  "type": "address"
              }
          ],
          "name": "withdrawnDividendOf",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "_getBasePriceRate",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      },
      {
          "inputs": [],
          "name": "getSellTaxRate",
          "outputs": [
              {
                  "internalType": "uint256",
                  "name": "",
                  "type": "uint256"
              }
          ],
          "stateMutability": "view",
          "type": "function"
      }
  ],
      TrustWalletUrl:"https://trustwallet.com/",
      MetaMaskUrl:"https://metamask.io/",
      BinanceSmartChainUrl:"https://academy.binance.com/en/articles/connecting-metamask-to-binance-smart-chain",
      PancakeUrl:"https://pancakeswap.finance/swap",
      Pancake2Url:"",
      index_mechanism_text:"Metaverse-DAO (METADAO) as the core token of the whole project, the team hopes to better protect those real investors, we have seen many projects including games destroyed by some speculators and whales who don't care about the development of the project, or even play the game at all, they haven't used NFTs either, but just enter earlier and arbitrage through token price fluctuations, no project can completely eliminate this from happening (at least we think so). After careful consideration by the team, in order to minimize the adverse effects, we upgraded and innovated the smart contract as a way to make price relatively stable and allow holders to obtain more benefits and protection.",
    };
  },
  mounted() {
    this.roadmapClick(this.roadmaptitleList[0]);
    this.bindfunctionAll();
    this.initUrl();
    setInterval(() => {
      this.initUrl();
    }, 1000*60);
    // this.setIntervalmethod();
  },
  methods: {
    bindfunctionAll(){
      this.bindfunction(".index_banner_copy_line_btn");
      this.bindfunction(".index_banner_bd_line_model");
      this.bindfunction(".index_data_main_input_btn");
      this.bindfunction(".index_data_main_input_btn");
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
    
    roadmapClick(item){
      this.roadmaptitleList.forEach(one=>one.flag=false);
      item.flag=true;
      let arr = item.right_flag.split(",");
      this.roadmapNameList.forEach(one=>{
        one.forEach(two=>{
          two.flag=false;
        })
      })
      arr.forEach(one=>{
        if(one!=""){
          let list = this.roadmapNameList[item.id];
        list[parseInt(one)-1].flag = true;
        }
      })
      this.initRoadMap();

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
    clickvideo(){
      if(!this.videoUrl){
        this.$store.commit("setToastFlag", true);
        cpmmonApi.setToastFlag();
      }
    },
    clickCopy(e){
      copyText(this.banner_copy_text,e);
    },
    successClip(){
      this.$message.success("token address");
    },
    errorClip(){
      this.$message.error("Browsers do not support ");
    },
    initRoadMap(){
      let map = this.roadmaptitleList.filter((item)=>item.flag==true);
      this.roadmapNameRealList = this.roadmapNameList[map[0].id];
    },
    playing() {
      console.log('\o/ we are watching!!!')
    },
    getId () {
      return this.$youtube.getIdFromUrl(this.videoUrl)
    },
    clickBannerBtn(index){
      if(index==1){
        if(this.clickBannerBtnUrl1){
          window.open(this.clickBannerBtnUrl1);
        }
        else{
          this.$store.commit("setToastFlag", true);
          cpmmonApi.setToastFlag();
        }
      }
      else if(index==2){
        if(this.clickBannerBtnUrl2){
          window.open(this.clickBannerBtnUrl2);
        }
        else{
          this.$store.commit("setToastFlag", true);
          cpmmonApi.setToastFlag();
        }
      }
    },
    setIntervalmethod(){
      let date = new Date(this.targetDate);
      setInterval(()=>{
        let nowDate = new Date();
        let hour = Math.floor((date - nowDate)/(60*60*1000));
        hour = hour.toString();
        if(hour.length>=2){
          this.data1.line6.hour1 = hour.substring(hour.length-2,hour.length-1);
          this.data1.line6.hour2 = hour.substring(hour.length-1);
        }
        else if(hour.length==1){
          this.data1.line6.hour1 = "0";
          this.data1.line6.hour2 = hour;
        }
        else{
          this.data1.line6.hour1 = "0";
          this.data1.line6.hour2 = "0";
        }
        let minute = Math.floor((date - nowDate)/(60*1000))%60;
        minute = minute.toString();
        if(minute.length>=2){
          this.data1.line6.minute1 = minute.substring(minute.length-2,minute.length-1);
          this.data1.line6.minute2 = minute.substring(minute.length-1);
        }
        else if(minute.length==1){
          this.data1.line6.minute1 = "0";
          this.data1.line6.minute2 = minute;
        }
        else{
          this.data1.line6.minute1 = "0";
          this.data1.line6.minute2 = "0";
        }
        let seconds = Math.floor((date - nowDate)/(1000))%60;
        seconds = seconds.toString();
        if(seconds.length<2){
          seconds = "0"+seconds;
        }
        this.data1.line6.second1 = seconds.substring(seconds.length-2,seconds.length-1);
        this.data1.line6.second2 = seconds.substring(seconds.length-1);
      },1000);
    },
    initUrl(){
      let _this = this;
      try{
        const NODE_URL = this.NODE_URL;
            let web3 = new Web3(new Web3.providers.HttpProvider(NODE_URL));
            web3.eth.defaultAccount = this.defaultAccount;

            var contract;
      var tokenAddress = this.tokenAddress;
      contract = new web3.eth.Contract(this.abi, tokenAddress);
      web3.eth.getBalance(tokenAddress).then(function(result) {
                    document.getElementById("bnbBalance").innerHTML = "BnB Balance: " + result;
                });

                contract.methods._name().call({}, function(error, result){
                    document.getElementById("tokenName").innerHTML = "TokenName: " + result;
                });

                contract.methods.getLpPriceNow().call({}, function(error, result){
                  _this.data1.line1Data = (Number(result)/(2**64)).toFixed(11) + " USD";
                });

                contract.methods.getBasePriceNow().call({}, function(error, result){
                  _this.data1.line2Data = (Number(result)/(2**64)).toFixed(11) + " USD";
                });

                contract.methods._getBasePriceRate().call({}, function(error, result){
                    document.getElementById("rate").innerHTML = "PriceRate: " +  Number(result)/10 + "%";
                });

                contract.methods.getSellTaxRate().call({}, function(error, result){
                  _this.data1.line3Data = (Number(result)/10).toFixed(1) + "%";
                });
      }
      catch(e){
        _this.data1.line1Data = "/";
        _this.data1.line2Data = "/";
        _this.data1.line3Data = "/";
      }

    },
    searchWithdraw(){
      var tokenAddress = this.tokenAddress;
      var tokenAddress2 = this.data3.input_text;
      let _this = this;
      try{
        $(".index_data_main_input_sub_error").stop();
        $(".index_data_main_input_sub_error").css({'opacity':'1'});
        _this.data3.searchWithdrawStatus = "result";
      
      const NODE_URL = this.NODE_URL;
            let web3 = new Web3(new Web3.providers.HttpProvider(NODE_URL));
            web3.eth.defaultAccount = this.defaultAccount;

            var contract;
      
      contract = new web3.eth.Contract(this.abi, tokenAddress);
      

      contract.methods.withdrawableDividendOf(tokenAddress2).call({}, function(error, result){
        _this.data3.input_text_sub2 = cpmmonApi.numberToCurrencyNo((Number(result)/1000000000000000000).toFixed(2));
                });

                contract.methods.withdrawnDividendOf(tokenAddress2).call({}, function(error, result){
                  _this.data3.input_text_sub4 = cpmmonApi.numberToCurrencyNo((Number(result)/1000000000000000000).toFixed(2));
                });
      }
      catch(e){
        $(".index_data_main_input_sub_error").stop();
        $(".index_data_main_input_sub_error").css({'opacity':'1'});
        this.data3.searchWithdrawStatus = "error";
        setTimeout(() => {
          $(".index_data_main_input_sub_error").animate({'opacity':'0'},3000);
        }, 3000);
        return null;
      }

    },
    clickBuy(url){
      if(url){
          window.open(url);
        }
        else{
          this.$store.commit("setToastFlag", true);
          cpmmonApi.setToastFlag();
        }
    }
  },
  computed: {
    player() {
      return this.$refs.youtube.player
    }
  }
};
</script>

<style src='./index.css'></style>