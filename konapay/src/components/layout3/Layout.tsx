import "./Layout.css";
import React from "react";
import { IonGrid, IonRow, IonCol, IonContent } from "@ionic/react";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

interface ContainerProps {
  name: string;
}

const Layout: React.FC<ContainerProps> = () => {
  return (
    <div className="grid-init grid">
      <div className="box-init box" style={{ height: "7.5%" }}>
        <div
          style={{
            backgroundColor: "green",
            margin: "5%",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </div>

      <div className="box-init box" style={{ height: "7.5%" }}>
        <div
          style={{
            margin: "5%",
            backgroundColor: "green",
            height: "100%",
            width: "100%",
          }}
        ></div>
        <div
          style={{
            margin: "5%",
            backgroundColor: "green",
            height: "100%",
            width: "100%",
          }}
        ></div>
      </div>

      <div className="box-init box" style={{ height: "85%", flexDirection: "column", justifyContent: "flex-start" }}>
        <div className="box-init inputLayout" style={{ width: "90%", flexDirection: "column", height: "12.5%", marginTop: "1.25%" }}>
          <div className="box-init" style={{ height: "50%", width: "100%" }}>
            <div className="box-init" style={{ width: "50%", height: "90%", backgroundColor: "yellow" }}></div>
            <div className="box-init" style={{ width: "50%", height: "90%", backgroundColor: "yellowgreen" }}></div>
          </div>
          <div className="box-init" style={{ width: "100%", height: "50%" }}>
            <input type="text" style={{ width: "100%", height: "100%" }} />
          </div>
        </div>
        <div className="box-init textLayout" style={{ backgroundColor: "black", width: "90%", height: "3.625%", marginTop: "1.25%" }}>
          <div className="box-init" style={{ marginLeft: "2.5%", width: "100%", justifyContent: "flex-start" }}>
            <input type="checkbox" name="" id="" style={{ marginRight: "2.5%" }} />
            <label htmlFor="" style={{ fontSize: "12px" }}>
              쿠폰/이벤트/혜택 발생 시 이메일로 알림받기(선택)
            </label>
          </div>
        </div>
        <div className="box-init" style={{ width: "90%", height: "6.25%", marginTop: "5%" }}>
          <button className="box-init" style={{ fontSize: "24px", width: "75%", height: "100%" }}>
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
