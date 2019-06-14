//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show:false
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
  },
  //打开详情页弹框
  onClickButton(){
    this.setData({
      show:true
    })
  },
  //关闭详情页弹框
  close(){
    this.setData({
      show:false
    })
  }
})
