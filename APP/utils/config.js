class Config {
  constructor(){

  }
}
Config.restUrl ="http://www.puzhentec.com/www/api/public/"
export {Config}
//封装wx.request：运用ES6中的Class类，
// 第一步：进行基础地址的封装,在config.js中定义静态属性
// 第二步：创建一个基类，引入基础地址，封装wx.request，通过传参的方式来配置wx.request里的属性，然后进行抛出
// 第三步：在每一个页面里面封装一个添加获取数据的js，如home-model.js
    // 引入基类，继承基类，使用基类的方法，传入相应参数获取数据，如：接口地址，请求方式以及参数，抛出home类
// 第四步：在页面逻辑的js中，引入home-model.js并实例化，调用home里的方法，传入真正的参数，如id，和回调函数，获得数据并绑定数据，在页面渲染