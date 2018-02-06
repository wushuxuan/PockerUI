// pages/Form/Form.js
var util = require("../../utils/check.js");
var interval = null
Page({

  /**
   * 页面的初始数据
   */
  data: {
    date: '请选择籍贯',
    items: [
      { name: 'man', value: '男' },
      { name: 'woman', value: '女', checked: 'true' },
    ],
    textMaxLen:150,
    textareaNum:0,
    formNum:0,
    sendMsg:'发送验证码',
  },
  bindDateChange: function (e) {
    this.setData({
      pickerInput:true,
      date: e.detail.value
    })
  },
  textareaIn:function(e){
    this.setData({
      textareaNum:e.detail.cursor
    })
  },
  /**购买数量的加减 */
  AddformNum:function(){
    this.setData({
      formNum: this.data.formNum+1
    })
  },
  MinusformNum: function () {
    if (this.data.formNum>0){
      this.setData({
        formNum: this.data.formNum - 1
      })
    }else{
      
    }
  },
  /**验证手机号 */
  checkphone:function(e){
    var checkphone = util.checkPhone(e.detail.value);
    this.data.checkphone = checkphone;
    if (!checkphone){
      wx.showToast({
        title: '手机号格式错误',
      })
    }
  },
  /**发送验证码动态 ( 要先判断手机号是否为空 )    
   * 如使用发送验证码动态，请把if（!this.data.checkphone）改成if（this.data.checkphone）
   * */
  sendMsg:function(){
    console.log(this.data.checkphone)
    if (!this.data.checkphone){
      this.setData({
        sendMsg:'60 秒'
      })
      var currentTime = 60
      var that = this
      interval = setInterval(function () {
        currentTime--;
        that.setData({
          sendMsg: currentTime + ' 秒'
        })
        if (currentTime <= 0) {
          clearInterval(interval)
          currentTime = 61
          that.setData({
            sendMsg: '重新发送',
          })
        }
      }, 1000)  
    }
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