// pages/cart/cart.js
import {Cart} from "./cart-model.js"
let cart=new Cart()
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
    },
    dataList: []
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
    let list = wx.getStorageSync('cart');
    list.forEach(item => {
      item.count=1;
      item.check=false;
    })
    this.setData({
      data: list
    })
    console.log(wx.getStorageSync('cart'));
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
        this.data.totalPrice += item.count * item.shop_price
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
    this.setData({
      dataList: []
    })
    this.data.data.forEach(item => {
      if(item.check==true){
        this.data.dataList.push(item)
      }
    })
    // console.log(this.data.dataList)
    if (this.data.totalPrice !== "00.00") {
      wx.navigateTo({
        url: `../pay/pay?dataList=${JSON.stringify(this.data.dataList)}&price=${this.data.totalPrice}`,
      })
      wx.setNavigationBarTitle({
        title: '确认订单',
      })
    }
  },
  //点击跳转商品详情
  goDetail(e){
    let id = e.currentTarget.dataset.id;
    console.log(e, id)
    wx.navigateTo({
      url: `../detail/detail?id=${id}`,
    })
  },
  // /**
  //  * 生命周期函数--监听页面加载
  //  */
  onLoad: function (options) {
    this.getData()
    wx.setNavigationBarTitle({
      title: '购物车'
    })
    wx.getStorage({
      key: "data",
      success: res => {
        // console.log(res.data)
        this.data.data=res.data
        this.setData({
          data: this.data.data,
          totalPrice: this.data.totalPrice
        })
      }
    })
  }
})


// 项目经理与产品确定需求，进行团队，产品前端后端设计测试运营
// 研究讨论确定框架需求以及所用技术

// 设计部门出设计稿

// 前端按照设计稿百分百还原页面并实现逻辑

// 后端出接口

// 前端拿到接口进行数据联调

// 2部门合作、1.在需求不明确的情况下，与产品进行沟通，并确定具体实施方案
//     2.在设计稿上，设计效果与需求不相符，有的地方标注不明确，有的地方状态显示不全面，与设计部门进行沟通解决
//     3.与后端合作，接口无法获取，数据获取不全面，获取到的图片地址不对，与后端人员进行数据联调

// 三、不能合作时遇到冲突：设计稿图标不明确，需要与设计部进行沟通得以解决；接口问题，

// 四、前端问题：购物车逻辑，获取后台接口，

// 三、工作安排：例会，做什么，每周换组长，自己作为组长如何分配工作，日报、周报

// 组员内部任务进度慢，再次如何重新分配工作，遇到问题团队如何解决

// 收获：

// 查看接口文档，自己测试接口；调取接口，遇到问题及时与后台沟通解决；目前完成的首页和详情各一部分接口

// 工作配合：配合领导的所有工作安排；配合各部门的工作（配合运营部淘宝设计修改，配合产品完成项目及需求修改）；

// 协同开发：使用git版本管理工具管理整个项目，实现协同开发，大大提高了项目完成效率

// 遇到的问题：git上的问题（合并）

// 分享：小程序框架的分享（vant-weapp，element-ui），UI框架的学习与分享

// 项目完成：音乐播放器，智能家居生态馆，粥品香坊