// pages/WaterfallFlow/WaterfallFlow.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    images: [
      {
        id: '1',
        src: '../../images/pubuliu/01.jpg',
        name: '照片01',
        data: '2017/11/1'
      }, {
        id: '2',
        src: '../../images/pubuliu/02.jpg',
        name: '照片02',
        data: '2017/11/2'
      }, {
        id: '3',
        src: '../../images/pubuliu/03.jpg',
        name: '照片03',
        data: '2017/11/3'
      }, {
        id: '4',
        src: '../../images/pubuliu/04.jpg',
        name: '照片04',
        data: '2017/11/4'
      }, {
        id: '5',
        src: '../../images/pubuliu/05.jpg',
        name: '照片05',
        data: '2017/11/5'
      }, {
        id: '6',
        src: '../../images/pubuliu/06.jpg',
        name: '照片06',
        data: '2017/11/6'
      }, {
        id: '7',
        src: '../../images/pubuliu/07.jpg',
        name: '照片07',
        data: '2017/11/7'
      }, {
        id: '8',
        src: '../../images/pubuliu/08.jpg',
        name: '照片08',
        data: '2017/11/8'
      }, {
        id: '9',
        src: '../../images/pubuliu/07.jpg',
        name: '照片09',
        data: '2017/11/9'
      }, {
        id: '10',
        src: '../../images/pubuliu/08.jpg',
        name: '照片10',
        data: '2017/11/10'
      }, {
        id: '11',
        src: '../../images/pubuliu/04.jpg',
        name: '照片11',
        data: '2017/11/11'
      }, {
        id: '12',
        src: '../../images/pubuliu/05.jpg',
        name: '照片12',
        data: '2017/11/12'
      }, {
        id: '13',
        src: '../../images/pubuliu/06.jpg',
        name: '照片13',
        data: '2017/11/13'
      }, {
        id: '14',
        src: '../../images/pubuliu/07.jpg',
        name: '照片14',
        data: '2017/11/14'
      }, {
        id: '15',
        src: '../../images/pubuliu/05.jpg',
        name: '照片15',
        data: '2017/11/15'
      }, {
        id: '16',
        src: '../../images/pubuliu/07.jpg',
        name: '照片16',
        data: '2017/11/16'
      }, {
        id: '17',
        src: '../../images/pubuliu/06.jpg',
        name: '照片17',
        data: '2017/11/17'
      },

    ]
  },
  ImageLoad:function(e){
    console.log(e)
    console.log(e.detail.height)
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