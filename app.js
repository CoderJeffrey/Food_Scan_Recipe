//app.js
var fetchWechat=require('fetch-wechat');
var tf=require('@tensorflow/tfjs-core');
var webgl=require('@tensorflow/tfjs-backend-webgl');
var plugin=requirePlugin('tfjsPlugin');
App({
  globalData:{
    list_food_mine_all:[],
    list_food_page:[],
    list_food_Search:[],
    model_path: "",
  },
  onLaunch: function () {
    plugin.configPlugin({
      //ployfill fectch funtion
      fetchFunc: fetchWechat.fetchFunc(),
      //fill tfjs runtime
      tf,
      //inject webgl backend
      webgl,
      //provide webgl canvas
      canvas:wx.createOffscreenCanvas(),

    });
    // 
  }
  
})