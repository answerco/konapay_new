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
    return res;
  };
  public static getkscp = async (wallet: string, symbol: string) => {
    // let payload = { uid };
    let res = await CustomAxios.get(`/${wallet}/getbalance/${symbol}`);
    return res;
  };

  public static getPoint = async (uid: string) => {
    let res = await CustomAxios.get(`point/balance/${uid}`);

    return res;
  };
}
