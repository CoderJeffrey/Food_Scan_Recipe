// pages/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    elementMine: "苹果",
    food_recordMine_J: new Array(),
    listRecord_Page: new Array(),
    listRecord_OneStar: new Array(),
    listRecord_TwoStar: new Array(),
    counting: -1,
    counter_TwoStarL:0,
    maximum:5,
    listForFood:[

    //菜名：草莓石榴香橙思慕雪 用料：草莓（300克），酸奶（少许），橙子（1个），石榴（1个），水（200ml）
      {
        name:"草莓石榴香橙思慕雪",
        index_for_Food:0,
        foodRequired:["草莓","橙子","石榴"],
        ingredient:["水(200ml)","酸奶(少许)"],
        steps:[
          "https://s1.ax1x.com/2020/09/02/w9VrNR.md.png",
          "https://s1.ax1x.com/2020/09/02/w9VDE9.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9V0HJ.md.jpg"
        ]
      },

      //菜名：橙香菠萝苹果牛肉 用料：牛腩，陈皮汁，苹果，菠萝

      {
        name:"橙香菠萝苹果牛肉",
        index_for_Food:1,
        foodRequired:["苹果","菠萝"],
        ingredient:["牛腩","陈皮汁"],
        steps:[
          "https://s1.ax1x.com/2020/09/02/w9eiFA.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9eCod.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9e9dH.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9epee.md.jpg"
        ]
      },

      //菜名：番茄芒果橙子果蔬汁 用料：西红柿（1个），芒果（2个），橙子（1个）
      {
        name:"番茄芒果橙子果蔬汁",
        index_for_Food:2,
        foodRequired:[" 西红柿","芒果","橙子"],
        ingredient:["无"],
        steps:[
          "https://s1.ax1x.com/2020/09/02/w9eKoj.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9eneg.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9euwQ.md.jpg",
        ]
      },

      //菜名：番茄香橙凉拌虾 用料：虾仁（200g），生姜（2片），番茄（1个），橙子（1个），洋葱(30g)，蒜末（10g），
      //香菜（8g），橙汁（10g），生抽（10g），盐(1g)，白糖（2g）
      {
        name:"番茄香橙凉拌虾",
        index_for_Food:3,
        foodRequired:["番茄","橙子"],
        ingredient:["虾仁（200g）","生姜（2片）","洋葱(30g)","蒜末（10g）","香菜（8g）","橙汁（10g）","生抽（10g）","盐(1g)","白糖（2g）"],
        steps:[
          "https://s1.ax1x.com/2020/09/02/w9esl6.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9eBf1.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9erSx.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9e0YR.md.jpg"
        ]
      },

      //菜名：凤橙石榴果酱  用料：凤梨（1个），石榴（3个），橙子（3个），冰糖（800克），柠檬（1个）
      {
        name:"凤橙石榴果酱",
        index_for_Food:4,
        foodRequired:["橙子","柠檬","石榴"],
        ingredient:["凤梨（1个）","冰糖（800克）"],
        steps:[
          "https://s1.ax1x.com/2020/09/02/w9e7X8.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9eT6f.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9eo1P.md.jpg",
        ]
      },

      //菜名：芒果甜瓜果冻  用料：芒果（1个）,糖（5勺），水（200ml），吉利丁粉（一袋），甜瓜（适量）
      {
        name:"芒果甜瓜果冻",
        index_for_Food:5,
        foodRequired:["芒果","甜瓜"],
        ingredient:["糖（5勺）","水（200ml）","吉利丁粉（一袋）"],
        steps:[
          "https://s1.ax1x.com/2020/09/02/w9mS10.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9ezpq.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9evhn.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9m9XT.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9ejts.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9mpcV.md.jpg",
        ]
      },


      //菜名：柠檬橙子苹果酱  用料：橙子（1个），苹果（1个），柠檬（2个），冰糖（2大勺）
      {
        name:"柠檬橙子苹果酱",
        index_for_Food:6,
        foodRequired:["橙子","苹果","柠檬"],
        ingredient:["冰糖（2大勺）"],
        steps:[
          "https://s1.ax1x.com/2020/09/02/w9Jz9O.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9mwDS.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wijaKs.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9mdu8.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9mUjf.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9Jv4K.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9JXAx.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9JjN6.md.jpg",
          "https://s1.ax1x.com/2020/09/02/w9YS3D.md.jpg",
        ]
      },

      //菜名：苹果奇异果火龙果汁 用料：苹果（1个），奇异果（1个），火龙果（1/3个）
      {
        name:"苹果奇异果火龙果汁",
        index_for_Food:7,
        foodRequired:["苹果","奇异果","火龙果"],
        ingredient:["无"],
        steps:[
          "https://s1.ax1x.com/2020/09/04/wij6GF.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wijyPU.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wijr5T.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wijDaV.md.jpg",

        ]
      },

      //菜名：苹果柿子思慕雪 用料：苹果（1个），柿子（1个），柠檬汁（少许），水（200ml）
      {
        name:"苹果柿子思慕雪",
        index_for_Food:8,
        foodRequired:["柿子","苹果"],
        ingredient:["柠檬汁（少许）","水（200ml）"],
        steps:[
          "https://s1.ax1x.com/2020/09/04/wij4Vx.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wij5a6.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wijfq1.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wijWrR.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wijRM9.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wijIIK.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wijTPO.md.jpg",
        ]
      },

      //菜名：苹果香橙百香果柠檬酱 用料：百香果（5个），苹果（1个），橙子（1个），柠檬（1个）

      {
        name:"苹果香橙百香果柠檬酱",
        index_for_Food:9,
        foodRequired:["苹果","橙子","柠檬"],
        ingredient:["百香果（5个）"],
        steps:[
          "https://s1.ax1x.com/2020/09/04/wixI3D.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wixoge.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wix59O.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wixh4K.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wixfN6.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wixTjH.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wixHud.md.jpg",
        ]
      },

        //菜名：苹果香蕉汁 用料：香蕉 苹果 梨 柠檬汁
      {
        name:"苹果香蕉汁",
        index_for_Food:10,
        foodRequired:["香蕉","苹果","梨"],
        ingredient:["柠檬汁"],
        steps:[
          "https://s1.ax1x.com/2020/09/04/wizpvQ.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wixz8S.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wixxC8.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wizSgg.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wixj4f.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wizCuj.md.jpg",
        ]
      },

      //菜名：苹果雪梨瘦肉汤 用料：瘦肉（250克），苹果（1个），梨（1个），无花果（5个）
      {
        name:"苹果雪梨瘦肉汤",
        index_for_Food:11,
        foodRequired:["苹果","梨"],
        ingredient:["瘦肉（250克）","无花果（5个）"],
        steps:[
          "https://s1.ax1x.com/2020/09/04/wiznv4.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wize8U.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wizm2F.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wizZCT.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wizE5V.md.jpg",
        ]
      },

      //菜名：奇异果甜瓜思慕雪 用料：奇异果（200g），甜瓜（200g），酸奶（200g）
      {
        name:"奇异果甜瓜思慕雪",
        index_for_Food:12,
        foodRequired:["奇异果","甜瓜"],
        ingredient:["酸奶（200g）"],
        steps:[
          "https://s1.ax1x.com/2020/09/04/wFekyq.md.jpg",
        ]
      },

      //菜名：鲜榨香蕉杨桃汁 用料： 香蕉（3个），杨桃（2个），水（1/4杯）
      {
        name:"鲜榨香蕉杨桃汁",
        index_for_Food:13,
        foodRequired:["香蕉","杨桃"],
        ingredient:["水（1/4杯）"],
        steps:[
          "https://s1.ax1x.com/2020/09/04/wFeAO0.md.jpg",
        ]
      },

      //菜名：香橙苹果汤 用料：苹果（1个），橙子（1个），红糖（30克）

      {
        name:"香橙苹果汤",
        index_for_Food:14,
        foodRequired:["苹果","橙子"],
        ingredient:["红糖（30克）"],
        steps:[
          "https://s1.ax1x.com/2020/09/04/wFeon0.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFe5Xq.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFe4cn.md.jpg",
        ]
      },

      //菜名：香蕉火龙果思慕雪 用料：火龙果（100g），牛奶（40g），香蕉（1个）

      {
        name:"香蕉火龙果思慕雪",
        index_for_Food:15,
        foodRequired:["火龙果","香蕉"],
        ingredient:["牛奶（40g）"],
        steps:[
          "https://s1.ax1x.com/2020/09/04/wFevcR.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFej39.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFeX9J.md.jpg",
        ]
      },

      //菜名：香蕉芒果思慕雪 用料：香蕉（1根），芒果（1个），酸奶（适量）
      {
        name:"香蕉芒果思慕雪",
        index_for_Food:16,
        foodRequired:["香蕉","芒果"],
        ingredient:["酸奶（适量）"],
        steps:[
          "https://s1.ax1x.com/2020/09/04/wFmuHf.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFmnDP.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFmmut.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFmZjI.md.jpg",
        ]
      },


      //菜名：杨桃蓝莓苹果果酱 用料：杨桃（2个），苹果（1个），蓝莓（一小碗），柠檬止（3勺）

      {
        name:"杨桃蓝莓苹果果酱",
        index_for_Food:17,
        foodRequired:["杨桃","苹果"],
        ingredient:["蓝莓（一小碗）","柠檬止（3勺）"],
        steps:[
          "https://s1.ax1x.com/2020/09/04/wFm2b6.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFmgDx.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFmcK1.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFmyvR.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFms29.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFmWVK.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFmh5D.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFmI8H.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFm5Pe.md.jpg",
          "https://s1.ax1x.com/2020/09/04/wFmfUO.md.jpg",
        ]
      },

      //菜名：杨桃苹果酸奶 用料：杨桃（1个），苹果（1个），酸奶（1杯）

      {
        name:"杨桃苹果酸奶",
        index_for_Food:18,
        foodRequired:["杨桃","苹果"],
        ingredient:["酸奶（1杯）"],
        steps:[
          "https://s1.ax1x.com/2020/09/04/wFncWQ.md.jpg",
        ]
      },
    ],
    
  },

  setValue_Food: function(e){
    console.log(e);
    var listRecord=new Array();
    var listRecord_twoStar_food=new Array();
    var recordMine1=0;
    var food_recordMine=getApp().globalData.list_food_mine_all;
    var listRecord_Page=getApp().globalData.list_food_page;
   console.log("1",getApp().globalData.list_food_page[0]);
    // var elementMine=this.data.elementMine;
    this.setData({
      food_recordMine_J: food_recordMine,
      listRecord_Page: this.data.listRecord_Page,
    })
    var counting1=getApp().globalData.list_food_page[0];
    console.log("Pay-Counting1",counting1);
    this.setData({
      counting: counting1
    })
    console.log("Pay Special Attention", this.data.counting);


    var array_listForFood=this.data.listForFood;
    for (let index = 0; index < food_recordMine.length; index++) {
      var food_temp=food_recordMine[index];
      for (let index2 = 0; index2 < array_listForFood.length; index2++) {
         var listTemp=array_listForFood[index2].foodRequired;
        // console.log("still in stage 2");
        for (let index3 = 0; index3 < listTemp.length; index3++) {
          var elementTemp = listTemp[index3];
          // console.log("still in stage 3");
          if (food_temp==elementTemp) {

            for (let index = 0; index < listRecord.length; index++) {
              if(listRecord[index]==array_listForFood[index2].index_for_Food)
              {
                // console.log("match step 2");
                 listRecord_twoStar_food.push(array_listForFood[index2].index_for_Food);
              }
            }

            listRecord.push(array_listForFood[index2].index_for_Food);    
            // console.log("Stage 4");
            // console.log(listRecord);
          }
        }
    }
  }
  //做两个判断 1-listRecord 2-listRecord_twoStar
      if (e==1) {
        return listRecord;
      }
      if (e==2) {
        return listRecord_twoStar_food;
      }
      else{
        return 0;
      }
    
  },
  onLoad: function(){
    listRecord_test=this.setValue_Food(1);
    listRecord_twoStar_food=this.setValue_Food(2);
    var listRecord_test_new= new Array();
    this.setData({
      maximum: this.data.maximum-listRecord_twoStar_food.length
    })
    for(i=0 ; i<this.data.maximum ; i++){
      listRecord_test_new[i]=listRecord_test[i];
    }
    console.log("The new List"+listRecord_test_new);
    this.setData({
      listRecord_OneStar: listRecord_test_new,
      listRecord_TwoStar:  listRecord_twoStar_food
    })

    for (let index = 0; index < listRecord_test.length; index++) {
      console.log(this.data.listRecord_OneStar[index]);
      console.log(this.data.listRecord_TwoStar.length)
    }
    
    console.log(this.data.listRecord_TwoStar);
  },


  

})