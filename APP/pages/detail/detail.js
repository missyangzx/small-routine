// pages/detail/detail.js
import {Detail} from "./detail-model.js"
let detail=new Detail()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data: [],
    show: false,
    num: 1,
    setNav: "",
    dataList:[],
    curIndex: "",
    size: ["60*40cm","58*36cm"],
    color: ["白色","红色","粉色"],
    curSize: "",
    curColor: ""
  },
  selectSize(e){
    this.setData({
      curSize: e.currentTarget.dataset.size
    })
  },
  selectColor(e){
    this.setData({
      curColor: e.currentTarget.dataset.color
    })
  },
  scroll(e) {
    if (e.detail.scrollTop >= 190) {
      this.setData({
        setNav: "#278c58"
      })
    } else {
      this.setData({
        setNav: ""
      })
    }
  },
  //点击隐藏弹框
  onClose() {
    this.setData({ show: false });
  },
  //点击显示弹框
  onClickButton(e){
    console.log(e.currentTarget.dataset.index)
    this.setData({
      show: true,
      curIndex: e.currentTarget.dataset.index
    })
  },
  //获取数据
  getData(id){
    detail.getDetail(id,res => {
      this.setData({
        data: res.data.goods
      })
      console.log(res.data.goods)
    })
  },
  //++
  add() {
    this.data.num++;
  },
  //--
  even() {
    this.data.num--;
    if (this.data.num <= 1) {
      this.data.num = 1
    }
  },
  //点击跳转结算页面
  goPay(e){
    let curs=this.data.size[this.data.curSize];
    let curc=this.data.color[this.data.curColor];
    if(Number(this.data.curIndex)){
      if(curs && curc){
        var goodsId = e.currentTarget.dataset.id;
        var goods = this.data.data;
        goods.check = false;
        goods.count = 1;
        var count = this.data.data.count;
        // 获取购物车的缓存数组（没有数据，则赋予一个空数组）  
        var arr = wx.getStorageSync('cart') || [];
        if (arr.length > 0) {
          // 遍历购物车数组  
          for (var j in arr) {
            // 判断购物车内的item的id，和事件传递过来的id，是否相等  
            if (arr[j].goods_id == goodsId) {
              // 相等的话，给count+1（即再次添加入购物车，数量+1）  
              arr[j].count = arr[j].count + 1;
              // 最后，把购物车数据，存放入缓存
              try {
                wx.setStorageSync('cart', arr)
              } catch (e) {
                console.log(e)
              }
              //关闭窗口
              wx.showToast({
                title: '加入购物车成功！',
                icon: 'success',
                duration: 2000
              });
              return;
            }
          }
          arr.push(goods);
        } else {
          arr.push(goods);
        }
        // 最后，把购物车数据，存放入缓存  
        try {
          wx.setStorageSync('cart', arr)
          wx.showToast({
            title: '加入购物车成功！',
            icon: 'success',
            duration: 2000
          });
          return;
        } catch (e) {
          console.log(e)
        }
        wx.setNavigationBarTitle({
          title: '购物车',
        })
      }
    }else{
      if(curs && curc){
        this.setData({
          dataList: []
        })
        this.data.dataList.push(this.data.data);
        if (this.data.totalPrice !== "00.00") {
          wx.navigateTo({
            url: `../pay/pay?dataList=${JSON.stringify(this.data.dataList)}&price=${this.data.totalPrice}`,
          })
          wx.setNavigationBarTitle({
            title: '确认订单',
          })
        }
      }
    }
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    this.getData(options.id);
  },
  goBack(){
    wx.navigateBack({
      
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