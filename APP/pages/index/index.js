//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    currentSortId: 1,
    scrollLeft: 0,
    windowWidth: 0,
    imgUrl:[
      'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
      'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
      'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640'
    ],
    indicatorActiveColor: "#fff",
    indicatorDots: true, //是否显示指示器
  },
  onLoad: function () {
   
  },
  onReady: function () {
    let that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          windowWidth: res.windowWidth
        })
      }
    })
  },
  changeSortId: function (e) {
    if (e.target.id < 6) {
      this.setData({
        currentSortId: parseInt(e.target.id),
        scrollLeft: 0
      })
    } else {
      this.setData({
        currentSortId: parseInt(e.target.id),
        scrollLeft: (parseInt(e.target.id) - 4.5) * (this.data.windowWidth / 7)
      })
    }
  },
})
