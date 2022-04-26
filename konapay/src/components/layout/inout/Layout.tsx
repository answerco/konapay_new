import { IonIcon, IonRouterLink, IonHeader, IonToolbar, IonButtons, IonBackButton, IonTitle, IonRow, IonItem, IonApp } from "@ionic/react";
import { addOutline, chevronBack, searchOutline, statsChartOutline } from "ionicons/icons";
import "./Layout.css";
import React from "react";
import { useHistory } from "react-router";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const Layout: React.FC = () => {
  const history = useHistory();
  return (
    <div className="grid-init grid">
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" icon={chevronBack} />
          </IonButtons>
          <IonTitle>송금</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* <div className="box-init box" style={{ height: "7.5%" }}>
        <Header name="스왑"></Header>
      </div> */}
      <div className="box-init box" style={{ height: "5%", justifyContent: "flex-start", flexDirection: "column" }}>
        <p style={{ color: "#E3E3E3", fontSize: "14px", width: "75%" }}>TOTAL PORTFOLIO VALUE</p>
      </div>
      <div className="box-init box" style={{ height: "20%" }}>
        <div
          className="box-init card"
          style={{ width: "80%", height: "90%", backgroundColor: "white", borderRadius: "10px", boxShadow: "5px 5px 5px gray", justifyContent: "center", flexDirection: "column" }}
        >
          <div className="box-init" style={{ width: "100%", height: "60%", flexDirection: "column", marginLeft: "25%" }}>
            <p style={{ width: "100%", color: "black", fontSize: "18px" }}>김철수 고객님 계좌의</p>
            <p style={{ width: "100%", color: "black", fontSize: "18px" }}>
              <span style={{ fontWeight: "bold", fontSize: "22px" }}>총출금가능</span> 금액은
            </p>
          </div>
          <div style={{ width: "100%", height: "40%", textAlign: "center" }}>
            <p style={{ width: "100%", height: "100%", color: "gray", fontSize: "18px" }}>
              <span style={{ color: "black", marginRight: "5%", fontSize: "30px", textShadow: "2px 2px 2px gray" }}>33,000</span>
              <span style={{ fontWeight: "bold", fontSize: "18px" }}>KSPC</span>입니다.
            </p>
          </div>
        </div>
      </div>
      <div className="box-init box" style={{ margin: "0 auto", height: "12.5%", width: "80%", flexDirection: "row", justifyContent: "space-between" }}>
        <div className="box-init" style={{ width: "30%", height: "100%" }}>
          <IonIcon icon={addOutline} style={{ width: "100%", fontSize: "48px", color: "#A1A1A1" }}></IonIcon>
        </div>
        <div className="box-init" style={{ width: "30%", height: "100%" }}>
          <IonIcon icon={searchOutline} style={{ width: "100%", fontSize: "48px", color: "#A1A1A1" }}></IonIcon>
        </div>
        <div className="box-init" style={{ width: "30%", height: "100%" }}>
          <IonIcon icon={statsChartOutline} style={{ width: "100%", fontSize: "48px", color: "#A1A1A1" }}></IonIcon>
        </div>
      </div>
      <div className="box-init box" style={{ margin: "0 auto", width: "80%", height: "17.5%", justifyContent: "space-between", flexDirection: "row" }}>
        <div className="box-init" style={{ width: "47.5%", height: "100%", borderRadius: "10px", flexDirection: "column", boxShadow: "5px 5px 5px black" }}>
          <div className="box-init" style={{ width: "90%", flexDirection: "column", height: "60%" }}>
            <div className="box-init" style={{ width: "100%" }}>
              <p style={{ fontSize: "14px", fontWeight: "bold", textAlign: "start", width: "100%", color: "black" }}>KSPC</p>
            </div>
            <div className="box-init" style={{ width: "100%" }}>
              <p style={{ fontSize: "28px", textAlign: "start", width: "100%", color: "black", marginTop: "10%" }}>33,000</p>
            </div>
          </div>
          <div className="box-init" style={{ marginTop: "5%", width: "90%", height: "40%" }}>
            <IonRouterLink href="/sendkspc">
              <button style={{ width: "100%", height: "75%", borderRadius: "30px", border: "none", backgroundColor: "gray" }}>보내기</button>
            </IonRouterLink>
          </div>
        </div>
        <div className="box-init" style={{ width: "47.5%", height: "100%", borderRadius: "10px", flexDirection: "column", boxShadow: "5px 5px 5px black" }}></div>
      </div>
      <div
        className="box-init box"
        style={{
          margin: "0 auto",
          width: "80%",
          minHeight: "37.5%",
          height: "37.5%",
          maxHeight: "auto",
          justifyContent: "flex-end",
          flexDirection: "column",
          borderBottom: "1px dashed black",
          borderRadius: "0px",
        }}
      >
        <div className="box-init" style={{ width: "100%", height: "25%", borderTop: "1px dashed black", borderRadius: "none" }}>
          <div className="box-init" style={{ width: "27.5%", height: "100%" }}>
            <p style={{ color: "black", fontSize: "18px" }}>EMART</p>
          </div>
          <div className="box-init" style={{ width: "30%", height: "100%" }}>
            <p style={{ color: "black", fontSize: "18px" }}>22.01.03</p>
          </div>
          <div className="box-init" style={{ width: "27.5%", height: "100%" }}>
            <p style={{ color: "black", fontSize: "18px" }}>33,000</p>
          </div>
          <div className="box-init" style={{ width: "15%", height: "100%" }}>
            <p style={{ color: "black", fontSize: "14px", width: "100%" }}>KSPC</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
