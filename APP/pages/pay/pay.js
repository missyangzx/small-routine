// pages/pay/pay.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    radio: '1',
    show: false,
    data: [],
    price: 0
  },
  onClose() {
    this.setData({ show: false });
  },
  onSubmit(){
    this.setData({ show: true });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '确认订单',
    })
    console.log(options)
    if(options.dataList){
      this.setData({
        data: JSON.parse(options.dataList),
        price: options.price
      })
    }
    console.log(this.data.price)
  },
  onGotUserInfo: function (e) {
    
  },
  onChange(event) {
    this.setData({
      radio: event.detail
    });
  },
  onClick(event) {
    const { name } = event.currentTarget.dataset;
    this.setData({
      radio: name
    });
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },
  //跳转到优惠券
  myCoupon(){
    wx.navigateTo({
      url: '../coupon/coupon',
    })
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