// pages/mine/mine.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  //跳转到我的订单
  goOrder(){
    wx.navigateTo({
      url: '../order/order',
    })
    wx.setNavigationBarTitle({
      title: '我的订单',
    })
  },
  //跳转到优惠券
  goCoupon() {
    wx.navigateTo({
      url: '../coupon/coupon',
    })
    wx.setNavigationBarTitle({
      title: '我的优惠券',
    })
  },
  //跳转到商品收藏
  goCollect() {
    wx.navigateTo({
      url: '../collect/collect',
    })
    wx.setNavigationBarTitle({
      title: '商品收藏',
    })
  },
  //跳转到历史浏览
  goHistory() {
    wx.navigateTo({
      url: '../history/history',
    })
    wx.setNavigationBarTitle({
      title: '历史浏览',
    })
  },
  //跳转到退款售后
  goSale() {
    wx.navigateTo({
      url: '../sale/sale',
    })
    wx.setNavigationBarTitle({
      title: '退款/售后',
    })
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