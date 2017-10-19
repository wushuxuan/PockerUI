// pages/ScrollView/ScrollView.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  scrolltolower: function (e) {
    console.log(e.detail.scrollLeft)
  },
  //滚动到顶部/左边
  Scrolltoupper:function(e){
    console.log('最左边了')
    console.log(e)
  },
  //滚动到底部/右边
  Scrolltolower:function(e){
    console.log('最右边了')
    console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

})