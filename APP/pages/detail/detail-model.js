import {Base} from "../../utils/base.js"
class Detail extends Base {
  constructor(){
    super()
  }
  getDetail(id, callBack) {
    let params = {
      url: "index.php?s=api/v1/detail/"+id,
      scallBack: res => {
        callBack && callBack(res);
      }
    }
    this.request(params)
  }
}
export {Detail}