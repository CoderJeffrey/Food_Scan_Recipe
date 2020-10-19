//index.js
//获取应用实例


 const tf=require('@tensorflow/tfjs-core') 
 const tfl=require('@tensorflow/tfjs-layers')
 var model
 var index=0
 var list_temp_food=new Array()
 require('regenerator-runtime')



Page({
  data:{
    name:"什么",
    urlSet:"pages/midPage/midPage",
    isHidden: true,
    index:0,
    index_food:0,
    list_food_Page_One: getApp().globalData.list_food_page,
    list_food_mine: new Array(),
    list_food_temp: new Array(),
    list_food_final: new Array(),
    model_path: "empty",
  },

  continuePhoto: function(){
    this.setData({
      index_food: this.data.index_food-1
    })
    var index=this.data.index_food;
    this.data.list_food_mine[index]="";
    this.setData({
      list_food_mine:this.data.list_food_mine,
    })
    this.takePhoto();
  },

  exact_food_1: function(){
    var index=this.data.index;
    var test_dump='list_food_final['+index+']';
    this.setData({
      [test_dump]: list_food_temp[0],
      index: index++
    })
  },

  exact_food_2: function(){
    var index=this.data.index;
    var test_dump='list_food_final['+index+']';
    this.setData({
      [test_dump]: list_food_temp[1],
      index: index++
    })
  },

  exact_food_3: function(){
    var index=this.data.index;
    var test_dump='list_food_final['+index+']';
    this.setData({
      [test_dump]: list_food_temp[2],
      index: index++
    })
  },

  onLoad:function () {

    this.camera=wx.createCameraContext(this)
    this.canvas=wx.createCanvasContext('food_canvas', this)
    wx.cloud.init()
    wx.cloud.getTempFileURL({
      fileList: ['cloud://luyan-mqb3c.6c75-luyan-mqb3c-1302359848/tfjs_model/model.json'],
      success: res => {
        // get temp file URL
        console.log(res.fileList[0].tempFileURL)
        this.setData({
          model_path: res.fileList[0].tempFileURL,
        })
        console.log(this.data.model_path)
      },
      fail: err => {
        // handle error
      }
      
    })
    console.log(this.data.model_path)

    this.loadModel()
  },

    //newly_added
  async loadModel(){
        
        console.log(this.data.model_path);
       
        this.model=await tfl.loadLayersModel('https://6c75-luyan-mqb3c-1302359848.tcb.qcloud.la/tfjs_model/model.json');
        // this.model.summary()
   },

   takePhoto: function(){
     this.camera.takePhoto({
       quality:'high',
         success:(res)=>{
           this.canvas.drawImage(res.tempImagePath,0,0,150,150)
           this.canvas.draw(false,()=>{
             wx.canvasGetImageData({
               canvasId: 'food_canvas',
               height: 224,
               width: 224,
               x: 0,
               y: 0,
                 success: (res)=>{
                  this.predict(res)
                 }
             })  
           })  
        } 
     })
   },
 
   menuSwitch: function(){
       //传数据
      wx.navigateTo({
       url: '/pages/middle/middle',
     })
     
     getApp().globalData.list_food_mine_all=this.data.list_food_mine;

   },

   async predict(img){
    if(this.model==null||this.canvas==null) return
    console.log('==predict==')

    const imgData={data:new Uint8Array(img.data),width:img.width,
    height:img.height}

    const imgSlice= tf.tidy(()=>{
      const imgTensor=tf.browser.fromPixels(imgData,4)
      return imgTensor.slice([0,0,0],[-1,-1,3]).expandDims(0)
    })
    const res=await this.model.predict(imgSlice)
    const res_array = res.squeeze().dataSync()
    var index = 0
    max = 0
    for(i = 0; i < res_array.length; i++){
      if(res_array[i] > max){
        index = i
        max = res_array[i]
      }
    }
    console.log("result: " + index)
    const fruit_names = [
      '苹果','杏子','鳄梨','鳄梨','香蕉','甜菜','蓝莓','仙人掌果','哈密瓜',
      '哈密瓜','杨桃','菜花','樱桃','樱桃','樱桃','樱桃','樱桃','樱桃','栗子',
      '小柑橘','椰子','玉米','玉米皮','黄瓜','茄子','姜','百香果','葡萄','葡萄',
      '葡萄','葡萄','葡萄','葡萄','柚子','柚子','番石榴','奇异果','金橘','柠檬',
      '酸橙','荔枝','芒果','山竹','桑葚','洋葱','洋葱','洋葱','橙子','木瓜',
      '百香果','桃子','桃子','桃子','梨','青椒','辣椒','彩椒','彩椒','柿子',
      '菠萝','菠萝','火龙果','李子','石榴','柚子','土豆','土豆','土豆',
      '土豆','树莓','草莓','草莓','西红柿','西瓜','甜瓜'
  ]
    const y=fruit_names[index];
    console.log(y);
    //var list_temp_food=new Array();
    var index=this.data.index_food;
    this.data.list_food_mine[index]=y;
    this.setData({
      list_food_mine: this.data.list_food_mine,
      index_food:this.data.index_food+1
    })



  },
  // async predict(img){
  //   if(this.model==null||this.canvas==null) return
  //   console.log('==predict==')
  //   console.log('img')
  //   console.log(img)
  //   const imgData={data:new Uint8Array(img.data),width:img.width,
  //   height:img.height}
  //   console.log('imgData')
  //   console.log(imgData)
  //   const imgSlice= tf.tidy(()=>{
  //     const imgTensor=tf.browser.fromPixels(imgData,4)
  //     return imgTensor.slice([0,0,0],[-1,-1,3]).expandDims(0)
  //   })
  //   const res=await this.model.predict(imgSlice)
  //   const y=res.squeeze().dataSync()[0]
  //   console.log('result')
  //   console.log(y)
  //   if(y<=0){
  //     console.log("cat")
  //     this.setData({
  //       name:"小猫"
  //     })
  //   }
  //   else{
  //     console.log("dog")
  //     this.setData({
  //       name:"小狗"
  //     })
  //   }

  //},* 页面的初始数据
   
    showMd: function(e) {
        //弹出框展示套餐的具体商品，根据data-group得到数组对象，然后再渲染到界面上
        var self = this;
        let groupList = e.currentTarget.dataset.group;
        //debugger
        this.setData({
            isHidden: false,//显示模态框，
            groupArr: groupList,
        })
    },

    hiddenMd: function() {
        this.setData({
            isHidden: true//隐藏模态框
        })
    },
    addGoodsCart: function (e) {
      var self = this;
      let goodsObj = e.currentTarget.dataset.item;

      app.judgeLogin(function () {

          if (app.windowData.status === -1) {
              app.tool.showTipModal('提示', '店铺休息暂不接单');
          } else {
              if (app.tool.showSellout(goodsObj)) {
                  app.tool.showTipModal('提示', '商品库存不足');
              } else {

                  var param = {
                      num: 1, //增加的数量
                      shop_id: goodsObj.shop_id,
                      product_id: goodsObj.product_id,
                  };

                  let apiData = {
                      apiUrl: app.apiConfig.addCart,
                      type: 'post',
                      sendData: param,
                      notLoad: true
                  };
                  apiData.success = res => {
                      if (res.data) {
                          //提示添加成功

                          setTimeout(function () {
                              app.tool.showToast('添加成功', 'success', 1500);
                          }, 100);
                      }
                  };
                  apiData.anyFun = () => {
                      //获取购物车商品购买总数量
                      appJs.calcCartNUMBER()
                  };
                  app.apiConfig.getApi(apiData);

                  

              }
          }
      }, true, function (goLogin) {
          if (goLogin) {
              self.isTimelyUpdate = true
          }
      })
  },






})


