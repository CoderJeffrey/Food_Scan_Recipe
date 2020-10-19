Page({
  data:{
    food_mine: new Array(),
    index:0,
  },
  onLoad: function(){
    var tester=new Array();
    tester[0]="";
    this.setData({
    food_mine: tester+this.data.food_mine
  })
  console.log(this.data.food_mine);
  },
  

})
