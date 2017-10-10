Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    items: [
      { name: '中国', value: '中国' },
      { name: '美国', value: '美国' },
      { name: '巴西', value: '巴西' },
      { name: '日本', value: '日本' },
      { name: '英国', value: '英国' },
      { name: '法国', value: '法国' },
      { name: '韩国', value: '韩国' },
      { name: '俄罗斯', value: '俄罗斯' },]

  },
  onLoad: function (options) {
    var that = this
    that.setData({
      value:'show'
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    var that = this
    that.setData({
      value: e.detail.value
    })
    console.log(this.data.value)
  },
  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  freeBack:function(){
    var that = this
    if(this.data.value=='show'){
      wx.showModal({
        title: '提示',
        content: '你没有选择任何内容',
      })
    }
    that.setData({
      showDialog: !this.data.showDialog
    })
  },
  freetoBack: function () {
    var that = this
    wx.showModal({
      title: '提示',
      content: '你没有选择任何内容',
    })
    that.setData({
      showDialog: !this.data.showDialog,
      value:'show',
      checked: false,
    })
  },
})