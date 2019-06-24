import { Base } from '../../utils/base.js'

class Home extends Base{
  constructor(){
    super()
  }
  //goods
  getGoods(id, callback){ // callBack   回调函数
    var params = {
      url: 'index.php?s=api/v1/index',
      scallBack: res=>{
        callback && callback(res)
      }
    }
    this.request(params)
  }
  //ratings
  getBanner(id, callback){
    var params = {
      url: 'ratings',
      scallBack: res => {
        callback && callback(res)
      }
    }
    this.request(params)
  }
}
export {Home}