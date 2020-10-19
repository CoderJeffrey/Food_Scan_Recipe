// pages/test2/test2.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listForFood_Search: new Array(),
    counter: 0,

  },

  menuSwitch1: function(e){

    console.log(e.detail.value);
    console.log("New!!!",e.detail.value);
    this.data.listForFood_Search[0]=e.detail.value;
    this.setData({
      listForFood_Search: this.data.listForFood_Search,
      counter: this.data.counter+1
    })
    for (let index = 0; index < this.data.counter; index++) {
      getApp().globalData.list_food_Search[index]=this.data.listForFood_Search[index];    
    }
    // console.log("这是新的列表-项的index",this.data.counter);
    // console.log("这是新的列表的-值value",this.data.listForFood_Search[this.data.counter-1]);
    // console.log("全局-值",getApp().globalData.list_food_Search[this.data.counter-1]);
    wx.navigateTo({
      url: '/pages/middle/middle',
    })
  },
  
})