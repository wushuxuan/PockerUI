Page({

  /**
   * 页面的初始数据
   */
  data: {
    show:false,
    RightArrow:'../../images/RightArrow.png',
    indexList: [
      {
        name: 'Card 卡片',
        url: '../Card/Card'
      },
      {
        name: 'Map 地图',
        url: '../Map/Map'
      }, {
        name: 'Form 表单',
        url: '../Form/Form'
      },{
      name:'Button 按钮',
      url:'../Button/Button'
      },{
        name: 'Badege 徽章',
        url: '../Badege/Badege'
      },{
        name: 'Capsule 胶囊',
        url: '../Capsule/Capsule'
      },{
        name: 'Articles 长文章省略',
        url: '../Articles/Articles'
      },{
        name: 'Image 上传图片',
        url: '../Image/Image'
      },{
      name: 'Progress 进度条',
      url: '../progress/progress'
      },{
        name: 'Picker 自定义选择器',
        url: '../Picker/Picker'
      },
      {
        name: 'SearchMore 查看更多',
        url: '../SearchMore/SearchMore'
      },
      {
        name: 'navigation 分栏导航',
        url: '../navigation/navigation'
      },
    ]
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