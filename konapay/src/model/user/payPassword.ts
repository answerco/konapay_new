import CustomAxios from "../../common/customAxios";

export default class PayPassword {
  public static payPassword = async (uid: string, payPassword: string) => {
    let payload = { uid: uid, payPassword: payPassword };
    let res = await CustomAxios.post(`/user/confirm/pay`, payload);
    return res.data.data;
  };
}
