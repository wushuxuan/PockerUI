// pages/Nav/Nav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    common_navs_list: ['全部订单', '待支付', '已完成'],
    common_title: ['这是全部订单', '这是待支付订单', '这是已完成订单'],
    id: 0,
    index: 0,
  },
  NavClick: function (e) {
    var id = e.currentTarget.dataset.id
    var that = this
    that.setData({
      id: id
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