// pages/home/home.js
import {Home} from "./home-model.js"
let home=new Home();
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: 0,
    carousel: [],
    recommend: [],
    ranking: [],
    guessgoods: [],
    setNav: "",
    setHeight: wx.getSystemInfoSync().windowHeight   //视口高度
  },
  getBanner(){
    let id=1;
    home.getGoods(id, res => {
      this.setData({
        carousel: res.data.carousel,
        recommend: res.data.recommend,
        ranking: res.data.ranking,
        guessgoods: res.data.guessgoods
      })
      // console.log(res.data)
    })
  },
  scroll(e) {
    if (e.detail.scrollTop >= 200) {
      this.setData({
        setNav: "#278c58"
      })
    } else {
      this.setData({
        setNav: ""
      })
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.getBanner();
  },
  //点击跳转详情
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