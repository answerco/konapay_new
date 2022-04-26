import "./Layout.css";
import React, { useEffect, useState } from "react";
import Header from "./Header";
import { IonBackButton, IonButton, IonButtons, IonHeader, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack } from "ionicons/icons";
import Point from "../../../model/user/point";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const Layout: React.FC = () => {
  const [point, setPoint]: any = useState(0);

  const getPoint = async () => {
    let res = await Point.view(sessionStorage.uid);
    if (res === null) {
      setPoint(0);
    } else {
      setPoint(res);
    }
  };

  useEffect(() => {
    getPoint();
  }, []);

  return (
    <div className="grid-init grid">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" icon={chevronBack} />
          </IonButtons>
          <IonTitle>환전</IonTitle>
        </IonToolbar>
      </IonHeader>

      <div className="box-init box" style={{ height: "7.5%", justifyContent: "flex-start", flexDirection: "column" }}></div>
      <div className="box-init box" style={{ height: "22.5%" }}>
        <div
          className="box-init card"
          style={{ width: "80%", height: "90%", backgroundColor: "white", borderRadius: "10px", boxShadow: "5px 5px 5px gray", justifyContent: "center", flexDirection: "column" }}
        >
          <div style={{ width: "100%", textAlign: "center" }}>
            <p style={{ width: "100%", height: "100%", color: "gray" }}>
              <span style={{ color: "black", marginRight: "5%" }}>{point}</span>KSP POINT
            </p>
          </div>
        </div>
      </div>
      <div className="box-init box" style={{ height: "25%", justifyContent: "flex-start", flexDirection: "column" }}>
        <div className="card2" style={{ width: "80%", height: "100%", textAlign: "center" }}>
          <input type="text" placeholder="수량을 입력해주세요." style={{ width: "90%", height: "20%", marginTop: "10%", borderRadius: "5px", border: "1px solid gray" }} />
        </div>
      </div>
      <div className="box-init box" style={{ height: "22.5%", justifyContent: "flex-start", flexDirection: "column" }}>
        <div className="card2" style={{ width: "90%", height: "100%", textAlign: "center" }}>
          <p style={{ color: "black", textAlign: "start", fontSize: "13px", marginBottom: "5%" }}>[유의사항]</p>
          <p style={{ color: "black", textAlign: "start", fontSize: "13px" }}>개인정보 입력에 유의해주세요.</p>
          <p style={{ color: "black", textAlign: "start", fontSize: "13px" }}>KSPC 이외의 주소로는 전송되지 않아요.</p>
          <p style={{ color: "black", textAlign: "start", fontSize: "13px" }}>KSPC를 전송할 경우에는 이더리움 가스비가 필요합니다.</p>
          <p style={{ color: "black", textAlign: "start", fontSize: "13px" }}>미리 이더리움을 충전해 놓으시기 바랍니다.</p>
        </div>
      </div>
      <div className="box-init box" style={{ height: "15%" }}>
        {/* <button style={{ width: "80%", height: "50%", border: "none", backgroundColor: "GrayText", borderRadius: "5px" }}>포인트 전환</button> */}
        <IonButton key={""} size="large">
          포인트 변환
        </IonButton>
      </div>
    </div>
  );
};

export default Layout;
