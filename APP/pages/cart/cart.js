// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    data: [],
    totalPrice: "00.00",
    checked: false,
    icon: {
      normal: '//img.yzcdn.cn/icon-normal.png',
      active: '//img.yzcdn.cn/icon-active.png'
    }
  },
  //设置缓存
  setCookie(){
    wx.setStorage({
      key: "data",
      data: this.data.data
    })
  },
  //获取数据
  getData(){
    wx.request({
      url: "http://mobile.yangkeduo.com/proxy/api/api/alexa/v1/goods?&page=1&size=20",
      header: {
        "content-type": "application/json"
      },
      success: res => {
        let list = res.data.goods_list;
        console.log(0)
        list.forEach(item => {
          item.count = 1;
          item.check = false;
        })
        this.setData({
          data: list
        })
      }
    }) 
  },
  //++
  add(e) {
    this.data.data[e.currentTarget.dataset.index].count++;
    this.setData({
      data: this.data.data
    })
    this.total()
  },
  //--
  even(e) {
    this.data.data[e.currentTarget.dataset.index].count--;
    if (this.data.data[e.currentTarget.dataset.index].count <= 1) {
      this.data.data[e.currentTarget.dataset.index].count = 1
    }
    this.setData({
      data: this.data.data
    })
    this.total()
  },
  //全选按钮的bindchang事件
  change(e) {
    this.data.data.forEach(item => {
      item.check = !!e.detail
    })
    
    this.setData({
      checked: e.detail,
      data: this.data.data
    })
    this.total()
  },
  //商品选中按钮的bindchang事件
  changeItem(e) {
    this.data.data[e.currentTarget.dataset.index].check = !!e.detail
    let isChecked = this.data.data.some(item => {
      return item.check == false
    })
    this.setData({
      data: this.data.data,
      checked: !isChecked
    })
    this.total()
  },
  //求总价格的一个方法
  total() {
    this.data.totalPrice = 0
    this.data.data.forEach(item => {
      if (item.check) {
        this.data.totalPrice += item.count * item.market_price
      }
    })
    this.setData({
      totalPrice: this.data.totalPrice
    })
  },
  //删除指定的一项
  remove(e){
    wx.showModal({
      title: '提示',
      content: '确定删除吗？',
      success: res => {
        if (res.confirm) {
          console.log('确定')
          let index = e.currentTarget.dataset.index;
          this.data.data.splice(index, 1);
          this.setData({
            data: this.data.data
          })
          wx.showToast({
            title: '删除成功',
            icon: 'success',
            duration: 2000
          })
          this.setCookie();
        } else if (res.cancel) {
          console.log('取消')
        }
      }
    })
  },
  //跳转到结算页面
  goPay(){
    if (this.data.totalPrice!=="00.00"){
      wx.navigateTo({
        url: '../pay/pay',
      })
      wx.setNavigationBarTitle({
        title: '确认订单',
      })
    }
  },
  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车'
    })
    wx.getStorage({
      key: "data",
      success: res => {
        console.log(res.data)
        this.data.data=res.data
        this.setData({
          data: this.data.data
        })
      }
    })
    if (this.data.data) {
      this.setData({
        isShow: false
      })
    } else {
      this.setData({
        isShow: false
      })
    }
  },
  goPay(){
    wx.navigateTo({
      url: '../pay/pay',
    })
  }
})
