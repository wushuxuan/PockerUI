// pages/Video/Video.js
/*随机生成颜色*/ 
function getRandomColor() {
  let rgb = []
  for (let i = 0; i < 3; ++i) {
    let color = Math.floor(Math.random() * 256).toString(16)
    color = color.length == 1 ? '0' + color : color
    rgb.push(color)
  }
  return '#' + rgb.join('')
}
Page({
    /**
   * 页面的初始数据
   */
  data: {
    /*hidden为0时，弹幕不显示，反之亦然*/
    hidden:1,

    
    VideoList:[{
      src:'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
      image: '../../images/VideoImage'
    }]
  },
  inputValue: '',
    VideoDanmuSubmit:function(e){
      console.log(e.detail.value.VideoDanmu)
      this.inputValue = e.detail.value.VideoDanmu
    },
    bindSendDanmu: function () {
      this.videoContext.sendDanmu({
        text: this.inputValue,
        color: getRandomColor()
      })
    },
  onLoad: function (options) {
    this.videoContext = wx.createVideoContext('myVideo')
  },
})