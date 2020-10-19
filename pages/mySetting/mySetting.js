// pages/mySetting/mySetting.js
Page({

  data: {

  },

  getPhoneNumber(e){
    console.log(e);
   },

  getUserInfo(e){
    console.log(e.detail.userInfo.nickeName);
    console.log(e.detail.userInfo.city);
    console.log(e.detail.userInfo.province);
    console.log(e.detail.userInfo.country);
  }
  
})