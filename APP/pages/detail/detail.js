//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    show:false,
    goodsImg:'',
    goods:'',
    ratings:'',
    sliderImg:[]
  },
  //事件处理函数
 
  bindViewTap: function () {
    
  },
  //请求接口数据
  onLoad: function (options) {
    wx.request({
      url: 'http://www.puzhentec.com/www/api/public/index.php?s=api/v1/detail/72',
      success: (res) => {
        this.setData({
          goodsImg: res.data.data.gallery,
          goods: res.data.data.goods,
          ratings: res.data.data.comment,
          sliderImg: [res.data.data.goods.goods_thumb],
        })
      }
    })
  },
  //打开详情页弹框
  onClickButton(){
    this.setData({
      show:true
    })
  },
  //关闭详情页弹框
  close(){
    this.setData({
      show:false
    })
  },
  goCart(){
    console.log(1)
    wx.navigateTo({
      url: '../pay/pay'
    })
  }
})
