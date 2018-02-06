// pages/live/live.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  },
  onLoad: function (options) {

  },
  ChooseImage: function () {
    var that = this
    var Count = 9
    wx.chooseImage({
      count: Count,
      success: function (res) {
        console.log(res.tempFilePaths)
        var i = 0;
        var imageList = {};
        for (i; i <= res.tempFilePaths.lengh;i++){
            
        }
        that.setData({
          imageList: res.tempFilePaths
        })
      }
    })
  },
  deleteImg:function(e){
    console.log(e.currentTarget.dataset.index)
    this.data.imageList.splice(e.currentTarget.dataset.index,1)
    this.setData({
      imageList: this.data.imageList
    })
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