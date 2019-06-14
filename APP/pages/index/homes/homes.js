// pages/index/homes/homes.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 这里定义了innerText属性，属性值可以在组件使用时指定
    inner: {
      type: Object,
      value: { item: 'default Value' },
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    banners: [],
    activitiesWrapWidth: '0',
    activitiesItemWidth: '0',
    activities: [],
    indicatorLineWidth: '0',
    indicatorMarginLeft: '0',
    products: [],
    current: 0,
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
      }
    ]
  },
  ready: function () {
    let that = this

    this.setData({
      banners: this.getBanners(),
      products: this.getProducts()
    })
    wx.getSystemInfo({
      success: function (res) {
        const lineShowNum = 5
        let floatPercent = 10 / lineShowNum / 10
        that.setData({
          activitiesItemWidth: res.windowWidth * floatPercent + 'px',
          activitiesWrapWidth: res.windowWidth * floatPercent * (that.data.activities.length / 2) + 'px',
          indicatorLineWidth: lineShowNum / (that.data.activities.length / 2) * 100 + '%'
        })
      }
    })
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
    onChange(e){
      console.log(e)
      this.setData({
        current: e.detail.current
      })
      console.log(this.data.current)
    },
    customMethod: function () {
      console.log(this.data.someData.item)
      console.log(this.properties.inner)
    },

    bindscroll: function (e) {
      this.setData({
        indicatorMarginLeft: e.detail.scrollLeft / e.detail.scrollWidth * 100 + '%'
      })
    },

    getBanners: function () {
      return [
        {
          imgUrl: 'https://images.unsplash.com/photo-1551334787-21e6bd3ab135?w=640',
          linkUrl: '/pages/test/test'
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1551214012-84f95e060dee?w=640',
          linkUrl: '/pages/test/test'
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
          linkUrl: '/pages/test/test'
        },
      ]
    },
    getProducts(){
      return [
        {
          imgUrl: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
          price: 20,
          sell: 220,
          goods: '我爱的绝地反击打飞机啊的',
          nameUrl:[
            'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
            'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
          ]
        },
        {
          imgUrl: 'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
          price: 20,
          sell: 220,
          goods: '我爱的绝地反击打飞机啊的',
          nameUrl: [
            'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
            'https://images.unsplash.com/photo-1551446591-142875a901a1?w=640',
          ]
        }
      ]
    }
  }
})
