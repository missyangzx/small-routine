import { Base } from "../../utils/base.js"
class Recommend extends Base {
  constructor() {
    super()
  }
  getRecommend(id, callBack) {
    let params = {
      url: "index.php?s=api/v1/index",
      scallBack: res => {
        callBack && callBack(res);
      }
    }
    this.request(params)
  }
}
export { Recommend }