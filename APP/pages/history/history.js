// pages/history/history.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
    info: [],
    latitude:0,
    longitude:0
  },
  onAuthLocation(){
    wx.openSetting({
      success: res => {
        console.log(res.authSetting)
      }
    })
  },
  authLocation(){
    wx.authorize({
      scope: 'scope.record',
      success() {
        // 用户已经同意小程序使用录音功能，后续调用 wx.startRecord 接口不会弹窗询问
        wx.startRecord()
      }
    })
  },
  //获取用户信息
  onGotUserInfo(e) {
    console.log(e.detail.userInfo)
    this.setData({
      info: e.detail.userInfo
    })
  },
  //获取位置 
  getLocation(e){
    wx.getLocation({
      type: 'gcj02', //返回可以用于wx.openLocation的经纬度
      success(res) {
        console.log(res)
        const latitude = res.latitude
        const longitude = res.longitude
        wx.openLocation({
          latitude,
          longitude,
          scale: 18
        })
      }
    })
  },
  getlocation(){
    wx.getLocation({
      success: res => {
        this.setData({
          latitude: res.latitude,
          longitude: res.longitude,
          markers: [{
            iconPath: "../image/aa1.jpg",
            id: 0,
            latitude: res.latitude,
            longitude: res.longitude,
            width: 50,
            height: 50
          }],
          polyline: [{
            points: [{
              latitude: res.latitude,
              longitude: res.longitude
            }],
            color: "#FF0000DD",
            width: 2,
            dottedLine: true
          }]
        })
      }
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