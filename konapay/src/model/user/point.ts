import CustomAxios from "../../common/customAxios"

export default class Point {
    public static view = async (uid : string) => {
        let res = await CustomAxios.get(`/point/balance/${uid}`)
        console.log(res.data.data)
        return res
    }
}