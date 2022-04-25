import axios from "axios";

export default class ProductManager {
  public static urlBase = "http://localhost:3200";

  public static async getList(_productIdx: number) {
    const APIURL = this.urlBase + `/api/sell/select/${_productIdx}`;
    const productInformation = await axios.get(APIURL);

    if (productInformation.status === 200) {
      const item = productInformation.data.data;
      const itemArr = Object.entries(item);
      item[`sellDate`] = item[`sellDate`].split("T")[0];
      const htmlMapProductInformation = [
        ["상품번호", item.sellIdx],
        ["상품명", item.productName],
        ["판매가", item.productPrice],
        ["판매자", item.buyerUid],
        ["구매자", item.sellerUid],
        ["판매상태", item.sellStatus],
        ["판매글 올린 날짜", item.sellDate],
      ];
      console.log("htmlMapProductInformation : ", htmlMapProductInformation);
      return htmlMapProductInformation;
    }

    return null;
  }

  public static async getSellInformation(sellerId: string, status: string, _limit: any, _offset: number) {
    const APIURL = this.urlBase + `/api/sell/list?sellerUid=${sellerId}&status=${status}&limit=${_limit}&offset=${_offset}`;
    const axiosOption = { withCredentials: true };

    const sellInformation = await axios.get(APIURL);
    const sellItem = sellInformation.data.data.rows;
    return sellItem;
  }
}
