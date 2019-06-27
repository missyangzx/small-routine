// pages/recommend/recommend.js
import { Recommend } from "./recommend-model.js"
let recommend = new Recommend()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    loadingApp: true
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    setTimeout(() => {
      this.setData({
        loadingApp: false
      })
    }, 2000)
    this.getData()
  },
  getData(){
    let id = 1;
    recommend.getRecommend(id, res => {
      this.setData({
        data: res.data.guessgoods
      })
      console.log(res.data)
    })
  },
  goDetail(e){
    let id=e.currentTarget.dataset.id;
    wx.navigateTo({
      url: `../detail/detail?id=${id}`,
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