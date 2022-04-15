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

      <div className="box-init box" style={{ height: "30%" }}>
        <div
          className="box-init"
          style={{
            backgroundColor: "chocolate",
            height: "90%",
            width: "90%",
          }}
        ></div>
      </div>

      <div className="box-init box" style={{ height: "55%", flexDirection: "column" }}>
        <div
          className="box-init"
          style={{
            width: "100%",
            backgroundColor: "whitesmoke",
            flexDirection: "column",
            justifyContent: "flex-start",
            height: "70%",
          }}
        >
          <div
            className="box-init"
            style={{
              marginBottom: "5%",
              width: "90%",
              height: "15%",
              backgroundColor: "yellowgreen",
              justifyContent: "flex-start",
            }}
          >
            <div style={{ height: "100%", lineHeight: "100%", backgroundColor: "purple", marginLeft: "2.5%", marginRight: "2.5%" }}>
              <input type="checkbox" id="모두" />
            </div>
            <div>
              <label htmlFor="모두" style={{ fontSize: "20px" }}>
                모두 동의하기
              </label>
            </div>
          </div>
          <div
            className="box-init"
            style={{
              marginBottom: "5%",
              height: "12.5%",
              width: "90%",
              backgroundColor: "ButtonShadow",
              alignItems: "center",
              justifyContent: "flex-start",
            }}
          >
            <input type="radio" id="TEST" style={{ marginLeft: "2.5%", marginRight: "2.5%" }} />
            <label
              htmlFor="TEST"
              style={{
                fontSize: "14px",
                textAlign: "left",
                background: "black",
                width: "70%",
              }}
            >
              [필수] 서비스 이용약관 동의
            </label>
            <div style={{ backgroundColor: "green" }}>
              <p style={{ fontSize: "14px", textAlign: "end" }}>
                <a>[상세보기]</a>
              </p>
            </div>
          </div>
        </div>
        <div className="box-init" style={{ height: "40%", width: "100%", backgroundColor: "gray", flexDirection: "column", justifyContent: "flex-start" }}>
          <button className="box-init" style={{ height: "40%", width: "65%" }}>
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default Layout;
