import { Base } from "../../utils/base.js"
class Cart extends Base {
  constructor() {
    super()
  }
  getCart(id, callBack) {
    let params = {
      url: "index.php?s=api/v1/index",
      scallBack: res => {
        callBack && callBack(res);
      }
    }
    this.request(params)
  }
}
export { Cart }