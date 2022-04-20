import CustomAxios from "../../common/customAxios"

export default class Signup {
    public static signup = async (uid: string, password: string, name: string, email: string, userType: string) => {
        let payload = {uid :uid, password :password, name: name, email: email, userType: userType}
        let res =  await CustomAxios.post(`/user/regist`, payload)
        console.log(res)
    }
}