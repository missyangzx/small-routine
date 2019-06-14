// pages/recommend/recommend.js
Page({
  /**
   * 页面的初始数据
   */
  data: {
    loadingApp:true,
    dataes:[]
  },
  getData() {
    wx.request({
      url: "http://mobile.yangkeduo.com/proxy/api/api/alexa/v1/goods?&page=1&size=20",
      header: {
        "content-type": "application/json"
      },
      success: res => {
        let list = res.data.goods_list;
        this.setData({
          dataes: list
        })
        console.log(this.data.dataes)
      }
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '新品',
    })
    setTimeout(()=>{
      this.setData({
        loadingApp: false
      })
    },2000)
    this.getData();
  },
  jump(){
    wx.navigateTo({
      url: '../detail/detail',
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