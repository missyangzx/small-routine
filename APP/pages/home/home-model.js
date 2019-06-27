import { Base } from "../../utils/base.js"
class Home extends Base {
  constructor(){
    super()
  }
  getGoods(id,callBack){
    let params={
      url: "index.php?s=api/v1/index",
      scallBack: res => {
        callBack && callBack(res);
      }
    }
    this.request(params)
  }
}
export {Home}