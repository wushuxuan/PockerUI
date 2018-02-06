// pages/picker/picker.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show_masklayer:false,
    show_picker:false,
    show_multipicker:false,
    show_masklayer:false,
    multiArr:[],

    items: [{ id: '0', value: '不限', checked: true, },
    { id: '1', value: '中国', checked: false, },
    { id: '2', value: '巴西', checked: false, },
    { id: '3', value: '美国', checked: false, },
    { id: '4', value: '英国', checked: false, },
    { id: '5', value: '法国', checked: false, },
    { id: '6', value: '韩国', checked: false, },
    { id: '7', value: '俄罗斯', checked: false, },],
  },

  /**简单选择地区按钮 */
  chooseArea: function () {
    this.setData({
      show_PopupTip:true,
      show_masklayer:true
    })
  },
  /**多选地区按钮 */
  choosemultiArea:function() {
    this.setData({
      show_multipicker: true,
      show_masklayer: true
    })
  },
  /**确定按钮 */
  comfirm:function(e){
    this.setData({
      show_PopupTip: false,
      show_masklayer: false,
      show_multipicker:false,
    })
  },
  /**单选地区 */
  chooseRadio: function(e) {
    for (let i in this.data.items) {
      this.data.items[i].checked = false
    }
    this.data.items[e.currentTarget.dataset.id].checked = !this.data.items[e.currentTarget.dataset.id].checked
    console.log(this.data.items)
    this.setData({
      items: this.data.items,
      chooseName: ' : '+this.data.items[e.currentTarget.dataset.id].value,
    })
  },
  /**多选地区 */
  choosemultiRadio:function(e){
    if (e.currentTarget.dataset.id!=0){
      this.data.items[0].checked = false
      this.data.items[e.currentTarget.dataset.id].checked = !this.data.items[e.currentTarget.dataset.id].checked
      this.data.multiArr.push(e.currentTarget.dataset.id)
    }else{
      for (let i in this.data.items) {
        this.data.items[i].checked = false
      }
      this.data.items[0].checked = true
      this.data.multiArr = []
    }
    this.setData({
      items: this.data.items,
      MutiliChooseName: this.data.multiArr
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