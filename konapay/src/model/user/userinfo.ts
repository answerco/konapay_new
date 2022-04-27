import CustomAxios from "../../common/customAxios";

export default class userInfo {
  //   public static email = async (email: string) => {
  //     let payload = { email: email };
  //     let res = await CustomAxios.post(`/user/regist/emailcheck`, payload);
  //     return res.data.data[0].state;
  //   };

  public static getUser = async (uid: string) => {
    // let payload = { uid };
    let res = await CustomAxios.get(`/user/select/${uid}`);
    return res.data.data;
  };
  public static getCoin = async (wallet: string, symbol: string) => {
    // let payload = { uid };
    let res = await CustomAxios.get(`/${wallet}/getbalance/${symbol}`);
    let coin = res.data.data;
    return coin;
  };

  public static getPoint = async (uid: string) => {
    let res = await CustomAxios.get(`point/balance/${uid}`);
    let totalPoint = res.data.data.totalPoint;
    if (totalPoint === null) {
      return 0;
    }
    return totalPoint;
  };
}
