//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show:false
  },
  //事件处理函数
  bindViewTap: function () {
    
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
  },
  goCart(){
    console.log(1)
    wx.navigateTo({
      url: '../pay/pay'
    })
  }
})
