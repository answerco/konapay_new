import CustomAxios from "../../common/customAxios";

export default class BuySellList {
  public static sellList = async (sellerUid: string, status: string, _limit: number, _offset: number) => {
    let res = await CustomAxios.get(`/sell/list?sellerUid=${sellerUid}&status=${status}&limit=${_limit}&offset=${_offset}`);
    console.log("seller list : ", res);

    return res.data.data.rows;
  };

  public static buyList = async (buyerUid: string, status: string, _limit: number, _offset: number) => {
    let res = await CustomAxios.get(`/buy/list?buyerUid=${buyerUid}&status=${status}&limit=${_limit}&offset=${_offset}`);
    console.log("buyer list : ", res);

    return res.data.data.rows;
  };

  public static buyUpdate = async (sellIdx: number) => {
    const payload = { sellIdx };
    let res = await CustomAxios.patch(`/buy/${sellIdx}/reject`, payload);

    return res;
  };

  // ???
  public static async getSellInformation(sellerId: string, status: string, _limit: any, _offset: number) {
    let payload = { sellerId, status, _limit, _offset };
    let res = await CustomAxios.post(`/sell/list?sellerUid=${sellerId}&status=${status}&limit=${_limit}&offset=${_offset}`, payload);
    console.log("seller list : ", res);

    return res;
  }
}
