// pages/navigation/navigation.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    common_navs_list:['全部订单','待支付','未收货','待收货','已完成'],
    common_title: ['这是全部订单', '这是待支付订单', '这是未收货订单', '这是待收货订单', '这是已完成订单'],
    id:0,
    index:0,
    Step:0
  },
  /*上一步*/
  previousStep:function(e){
    var index = this.data.index-1
    if (index < 0) {
      wx.showToast({
        title: '已经是第一步了',
      })
    } else {
      var that = this
      that.setData({
        index: index
      })
    }
  },
    /*下一步*/
  nextStep:function(e){
    var index = this.data.index + 1
    if (index > 2){
    wx.showToast({
      title: '已经是最后一步了',
    })
    }else{
      var that = this
      that.setData({
        index: index
      })
    }
  },

  /*竖直上一步*/
  vertical_previousStep: function (e) {
    var Step = this.data.Step - 1
    if (Step < 0) {
      wx.showToast({
        title: '已经是第一步了',
      })
    } else {
      var that = this
      that.setData({
        Step: Step
      })
    }
  },
  /*竖直下一步*/
  vertical_nextStep: function (e) {
    var Step = this.data.Step + 1
    if (Step > 2) {
      wx.showToast({
        title: '已经是最后一步了',
      })
    } else {
      var that = this
      that.setData({
        Step: Step
      })
    }
  },

  NavClick:function(e){
    var id = e.currentTarget.dataset.id
    var that = this
    that.setData({
        id:id
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})