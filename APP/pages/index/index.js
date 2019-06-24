//index.js
//获取应用实例
const app = getApp()
import {Config} from '../../utils/config.js'
import {Home} from './index-model.js'
let home = new Home()
Page({
  data: {
    currentSortId: 1,
    scrollLeft: 0,
    windowWidth: 0,
    indicatorActiveColor: "#fff", //指示器颜色
    indicatorDots: true, //是否显示指示器
    listData: [],
    setNav: "", //nav背景色
    setHeight: wx.getSystemInfoSync().windowHeight //窗口高度
  },
  onLoad: function () {
    this.getData();
  },
  onReady: function () {
    
  },
  
  getData(){
    let id = 1;
    home.getGoods(id, res => {
      this.setData({
        listData: res.data
      })
      console.log(res.data)
    })
    
  },
  scroll(e){
    if (e.detail.scrollTop>=190){
      this.setData({
        setNav: "#278c58"
      })
    }else {
      this.setData({
        setNav: ""
      })
    }
  }
})
