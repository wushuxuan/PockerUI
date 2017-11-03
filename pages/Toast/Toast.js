// pages/Toast/Toast.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showToast:false
  },

  ShowTitleToast:function(){
    wx.showModal({
      content: '这是一个模态弹窗',
      success: function (res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  toggleToast:function(){
    var that = this
    that.setData({
      showToast: !this.data.showToast
    })
  },
  freetoBackRight:function() {
    var that = this
    that.setData({
      showToast: !this.data.showToast
    })
  },
  freeBackRight: function () {
    var that = this
    that.setData({
      showToast: !this.data.showToast
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