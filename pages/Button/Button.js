// pages/Button/Button.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  getPhoneNumber:function(e){
    console.log(e.detail.errMsg)
    console.log(e.detail.iv)
    console.log(e.detail.encryptedData)
  },
  disabledChange:function(){
    var that = this
    that.setData({
      disabled:true
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
    return{
      title:'PockerUI-转发分享',
      path:'../index/index',
      imageUrl:'http://scimg.jb51.net/allimg/160604/77-160604095Q1Y7.jpg',
      success:function(res){
        wx.showToast({
          title: '转发成功',
          icon:'success',
          duration:1500
        })
      }
      
    }
  }
})