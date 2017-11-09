Page({

  /**
   * 页面的初始数据
   */
  data: {
    showDialog: false,
    showDialogRight:false,
    items: [
      { name: '0', value: '中国', checked: false,},
      { name: '1', value: '美国', checked: false,},
      { name: '2', value: '巴西', checked: false,},
      { name: '3', value: '日本', checked: false,},
      { name: '4', value: '英国', checked: false,},
      { name: '5', value: '法国', checked: false,},
      { name: '6', value: '韩国', checked: false,},
      { name: '7', value: '俄罗斯', checked: false,},],
  },
  click:function(e){
    console.log(e)
    var id = e.currentTarget.dataset.id
    var that = this
    that.setData({
      id: id
    })
  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e)
    var that = this
    that.setData({
      value: e.detail.value
    })
    console.log(this.data.value)
    var items = this.data.items;
    console.log(this.data.items)
    var checkArr = e.detail.value;
    console.log(e.detail.value)
    for (var i = 0; i < items.length; i++) {
      if (checkArr.indexOf(i + "") != -1) {
        items[i].checked = true;
      } else {
        items[i].checked = false;
      }
    }
    this.setData({
      items: items
    })  
  },




























  /**普通picker */
  toggleDialog() {
    this.setData({
      showDialog: !this.data.showDialog
    });
  },
  freeBack: function () {
    var that = this
    if (this.data.value == 'show') {
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
      value: 'show',
      checked: false,
    })
  },
  /**侧面picker */
  toggleDialogRight(){
    this.setData({
      showDialogRight: !this.data.showDialogRight
    });
  },
  freeBackRight: function () {
    var that = this
    if (this.data.value == 'show') {
      wx.showModal({
        title: '提示',
        content: '你没有选择任何内容',
      })
    }
    that.setData({
      showDialogRight: !this.data.showDialogRight
    })
  },
  freetoBackRight: function () {
    var that = this
    wx.showModal({
      title: '提示',
      content: '你没有选择任何内容',
    })
    that.setData({
      showDialogRight: !this.data.showDialogRight,
      value: 'show',
      checked: false,
    })
  },
  
})