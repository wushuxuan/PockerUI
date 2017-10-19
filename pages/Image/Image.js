
Page({

  /**
   * 页面的初始数据
   */
  data: {
    imageList:[]
  },
  onLoad: function (options) {
      var that = this
      that.setData({
        savedFilePath: '../../images/Images.png'
      })
  },
  ChooseImage: function () {
    var that = this
    var Count=9
    wx.chooseImage({
      count: Count,
      success: function (res) {
        console.log(res.tempFilePaths)
        that.setData({
          imageList: res.tempFilePaths
        })
        console.log(res.tempFilePaths.length)
        if(res.tempFilePaths.length < Count){
          wx:wx.showModal({
            title: '提示',
            content: '您可以选择' + Count + '张图片',
          })
          wx.setStorageSync("imageList", res.tempFilePaths);
        }
      }
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