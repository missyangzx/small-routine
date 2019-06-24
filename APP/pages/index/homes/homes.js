// pages/index/homes/homes.js
import { Home } from '../index-model.js'
let home = new Home()
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    inner: {
      type: Object,
      value: { item: 'default Value' },
    },
    listData: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    banners: [], //首页轮播
    recommend: [], //推荐商品
    guessgoods: [], //猜你喜欢
    ranking: [], //排行榜
    products: [],
    current: 0,
    swiperColor: "#9d9d9d", //轮播图圆点颜色
    swiperActiveIndex: "#535353",//轮播图当前圆点颜色
    autoplay: true, //轮播图是否自动播放
    bgImage:{
      swiper: '../image/zhang-kaiyv-661828-unsplash.jpg',
      title: '../image/title.png'
    },
    portrait:[
      {
        name: '12',
        portrait: true,
      },
      {
        name: '12',
        portrait: true,
      },
      {
        name: '12',
        portrait: false,
      },
      {
        name: '12',
        portrait: false,
      },
      {
        name: '12',
        portrait: false,
      }
    ],
    portraits: [
      {
        name: '12',
        portrait: true,
        imgUrl: 'https://img.alicdn.com/imgextra/i3/2201306665630/O1CN01SOmNL81rSaO9NoUFi_!!2201306665630.jpg'
      },
      {
        name: '12',
        portrait: true,
        imgUrl: 'https://img.alicdn.com/imgextra/i3/2201306665630/O1CN01fsOF1q1rSaO7p7RCw_!!2201306665630.jpg'
      },
      {
        name: '12',
        portrait: false,
        imgUrl: 'https://img.alicdn.com/imgextra/i4/2201306665630/O1CN01ErSVgq1rSaO5xY63p_!!2201306665630.jpg'
      },
      {
        name: '12',
        portrait: false,
        imgUrl: 'https://img.alicdn.com/imgextra/i2/2201306665630/O1CN01H9kyBC1rSaO7p9aEv_!!2201306665630.jpg'
      }
    ]
  },
  ready: function () {
    let that = this
    this.getData()
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    godetail(){
      wx.navigateTo({
        url: '../detail/detail',
      })
    },
    onChange(e){ //轮播改变
      this.setData({
        current: e.detail.current
      })
    },
    customMethod: function () {
      console.log(this.data.someData.item)
      console.log(this.properties.inner)
    },
    getData() {
      let id = 1;
      home.getGoods(id, res => {
        this.setData({
          banners: res.data.carousel,
          recommend: res.data.recommend,
          guessgoods: res.data.guessgoods,
          ranking: res.data.ranking,
        })
        console.log(res.data)
        console.log(this.data.banners)
        console.log(this.data.guessgoods)
        console.log(this.data.ranking)
        console.log(this.data.recommend)
      })
    },
  }
})
