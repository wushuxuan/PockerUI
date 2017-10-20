// pages/Music/Music.js
Page({
  data: {
    MusicList:[{
      url: 'https://raw.githubusercontent.com/wushuxuan/Resources/master/Music/Music.mp3',
      image:'https://y.gtimg.cn/music/photo_new/T002R300x300M000002ZXwUj3RlnVN.jpg?max_age=2592000',
      name:'勋章',
      author:'鹿晗',
    }],
    progress:0
  }, 
  MusicStart:function(e){
    var progress = parseInt((e.detail.currentTime / e.detail.duration) * 100)
    var that = this
    that.setData({
      progress: progress
    })
    console.log(progress+'%')
  },
  MusicEnd:function(){
    wx.showModal({
      title: '提示',
      content: '音乐已播放完毕',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   
  },
})