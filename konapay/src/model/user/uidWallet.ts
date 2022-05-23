import CustomAxios from "../../common/customAxios";

export default class IsUidWallet {
  public static isUidWallet = async (uid: string) => {
    let res = await CustomAxios.get(`/user/select/${uid}`);
    return res.data.data;
  };
}
