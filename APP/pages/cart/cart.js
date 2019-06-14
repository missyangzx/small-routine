// pages/shoppingCart/shoppingCart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    isShow: true,
    data: [
      {
        image: "../image/aa1.jpg",
        title: "狼牙枕",
        price: 238.00,
        color: "白色",
        count: 1,
        checked: false
      },
      {
        image: "../image/aa2.jpg",
        title: "狼牙枕",
        price: 238.00,
        color: "白色",
        count: 2,
        checked: false
      },
      {
        image: "../image/aa3.jpg",
        title: "狼牙枕",
        price: 238.00,
        color: "白色",
        count: 3,
        checked: false
      }
    ],
    allCheck: false,
    totalPrice: 0
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
    this.data.allCheck = !!e.detail.value[0]
    this.data.data.forEach(item => {
      item.checked = !!e.detail.value[0]
    })
    this.setData({
      allCheck: this.data.allCheck,
      data: this.data.data
    })
    this.total()
  },
  //商品选中按钮的bindchang事件
  changeItem(e) {
    this.data.data[e.currentTarget.dataset.index].checked = !!e.detail.value[0]
    let isChecked = this.data.data.some(item => {
      return item.checked == false
    })
    this.setData({
      allCheck: !isChecked,
    })
    this.setData({
      data: this.data.data
    })
    this.total()
  },
  //求总价格的一个方法
  total() {
    this.data.totalPrice = 0
    this.data.data.forEach(item => {
      if (item.checked) {
        this.data.totalPrice += item.count * item.price
      }
    })
    this.setData({
      totalPrice: this.data.totalPrice
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: '购物车'
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
