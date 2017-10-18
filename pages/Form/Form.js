// pages/Form/Form.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    region: ['广东省', '广州市', '海珠区'],
    items: [
      { name: '0', value: '女' },
      { name: '1', value: '男' },
    ]
  },
  Free_form_picker:function(e){
      var that = this
      that.setData({
        region: e.detail.value
      })
      console.log(e.detail.value[1])
  },
  idChange:function(e){
    var id = e.currentTarget.dataset.id
    var that = this
    that.setData({
      id: id
    })
    if(id==0){
      that.setData({
        sex:'女'
      })
    }else{
      that.setData({
        sex: '男'
      })
    }
  },
  AjaxTel:function(e){
    console.log(e.detail.value)
    var telnumber = e.detail.value
    if (telnumber==''){
      wx.showModal({
        title: '提示',
        content: '手机号不能为空',
      })
    } else if (telnumber.length<11){
      wx.showModal({
        title: '提示',
        content: '请输入长度11位的电话号',
      })
    }
  },
  Submit:function(e){
    var telnumber = e.detail.value.telnumber
    if (telnumber == '') {
      wx.showModal({
        title: '提示',
        content: '手机号不能为空',
      })
    } else if (telnumber.length < 11) {
      wx.showModal({
        title: '提示',
        content: '请输入长度11位的电话号',
      })
    }
    console.log(e.detail.value)
    console.log(this.data.sex)
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