<template>
  <div id="app">
    <HelloWorld msg="Welcome to Your FeedItBack Vue.js App"/>
    <Language style="position:absolute; left:125px;top:100px" :msg="lang"/>
    
    <Tab :guestCollection="guestData" :orderCollection="orderData"/>
  </div>
</template>
<script>
import HelloWorld from './components/HelloWorld.vue'
import Language from './components/Language.vue'
import Tab from './components/Tab.vue'
import {getGuests} from './data'
import {getOrders} from './data'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Language,
    Tab
  },
  data(){
    return{
      message:'Welcome to Your FeedItBack Vue.js App',
      lang:'',
      guestData:'',
      orderData:''
    };
  },
  created(){
    this.loadLanguage();
    this.loadGuests();
    this.loadOrders();
  },
  methods: {
    loadLanguage(){
      console.log("Loading Language:");
      const languageURL = 'https://tst-api.feeditback.com/exam/languages';
      const myInit = {
        method: 'GET',
        headers: {'Access-Control-Allow-Origin': '*'}
      };
      fetch(languageURL,myInit).then((response) => {
        return response.json();
      }).then((response) => {
        this.lang = response["languages"][0].title;
      }).catch((e) => {
        console.log(e);
      });
    },
    async loadGuests(){
      console.log("Loading Guests:");
      const guestsURL = 'https://tst-api.feeditback.com/exam/guests';
      const myInit = {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'X-FIB-API-LANGUAGE': 'en_GB',
          'X-FIB-API-AUTH-TYPE': 'exam',
          'X-FIB-API-AUTH-TOKEN': 'F6HCAFVHPEg3"Sw#'
        }
      };
      try{
        let response = await fetch(guestsURL,myInit);
        let jsonObj = await response.json();
        
        if(jsonObj["error"]){
          console.log("Error: Loading local guests data");  
          this.localGuestsData();
        } else {
          console.log("Loading guests data complete");  
          this.guestData = jsonObj["items"];
        }
      } catch(e){
        console.log("Await Data failed to load: ", e);
      }
    },
    async loadOrders(){
      console.log("Loading Orders:");
      const guestsURL = 'https://tst-api.feeditback.com/exam/guests.orders';
      const myInit = {
        method: 'GET',
        headers: {
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Credentials': 'true',
          'X-FIB-API-LANGUAGE': 'en_GB',
          'X-FIB-API-AUTH-TYPE': 'exam',
          'X-FIB-API-AUTH-TOKEN': 'F6HCAFVHPEg3"Sw#'
        }
      };
      try{
        let response = await fetch(guestsURL,myInit);
        let jsonObj = await response.json();
        
        if(jsonObj["error"]){
          console.log("Error: Loading local orders data");  
          this.localOrdersData();
        } else {
          console.log("Loading orders data complete");  
          this.orderData = jsonObj["items"];
        }
      } catch(e){
        console.log("Await Data failed to load: ", e);
      }
    },
    localGuestsData(){
        const guestsObj = getGuests();
        this.guestData = guestsObj["items"];
    },
    localOrdersData(){
        const ordersObj = getOrders();
        this.orderData = ordersObj["items"];
    }
  }
}

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
[v-cloak]{
    display:none;
  }
</style>
