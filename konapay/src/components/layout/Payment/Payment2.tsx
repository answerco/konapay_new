import {
  IonApp,
  IonHeader,
  IonTitle,
  IonContent,
  IonLabel,
  IonPage,
  IonItem,
  IonGrid,
  IonRow,
  IonCol,
  IonCheckbox,
  IonModal,
  useIonAlert,
  IonButton,
  IonToolbar,
  IonButtons,
  IonBackButton,
} from "@ionic/react";

import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";
import QRCode from "react-qr-code";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/core.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";
import "./payment.css";
import { chevronBack } from "ionicons/icons";
import Sell from "../../../model/sell/sell";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const Payment2: React.FC = () => {
  const history = useHistory();
  const location: any = useLocation();
  const [sellIdx, setSellIdx]: any = useState("");
  const [paste] = useIonAlert();

  const prevHistoryFunction = () => {
    setIsOpen(false);
    history.push({ pathname: "/", state: {} });
  };

  const successPayment = () => {
    setIsOpen(false);
    history.push({ pathname: "/payment3", state: {} });
  };

  const registPay = async () => {
    const { product, price, id } = location.state;
    const uid = sessionStorage.uid;
    let resSellIdx = await Sell.sell(uid, product, price, "설명", id, 100);
    setSellIdx(resSellIdx);
  };

  const [check, setCheck] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const requirePay = async () => {
    try {
      await registPay();
      setIsOpen(true);
    } catch (err) {
      paste(err as any);
    }
  };

  const completePayment = async () => {
    try {
      let res = await Sell.checkSell(sellIdx);
      if (res === "F") {
        paste("거래가 완료되었습니다.");
        successPayment();
      } else if (res === "R") {
        paste("상대방이 거래를 취소하였습니다.");
        prevHistoryFunction();
      } else {
        throw "아직 거래되지 않았습니다.";
      }
    } catch (err) {
      paste(err as any);
    }
  };

  return (
    <IonApp>
      <IonPage className="ion-page" id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" icon={chevronBack} />
            </IonButtons>
            <IonTitle>판매</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div style={{ padding: "0px 2%" }}>
            <div style={{ margin: "7% 0px", display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontSize: "20px", color: "gray", fontWeight: "bold" }}>KONA PAY</div>
              <div style={{ fontWeight: "bold", color: "lightgray" }}>● ○ ● ●</div>
            </div>

            <IonGrid className="table_text">
              <IonRow className="table_th">
                <IonCol>상품명</IonCol>
                <IonCol>금액</IonCol>
                <IonCol size="4">구매자 아이디</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>{location.state && location.state.product}</IonCol>
                <IonCol>{location.state && location.state.price}</IonCol>
                <IonCol size="4">{location.state && location.state.id}</IonCol>
              </IonRow>
            </IonGrid>

            <IonGrid className="total_text">
              <IonRow className="table_total">
                <IonCol>합 계</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>{location.state && location.state.price}</IonCol>
              </IonRow>
            </IonGrid>

            <IonItem lines="none" className="payment_check">
              <IonCheckbox slot="start" color="dark" checked={check} onClick={(e) => setCheck(!check)} />
              <IonLabel>결제 정보를 구매자에게 발송</IonLabel>
            </IonItem>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {/* <IonButton className='payment_button' color="light" size='large'>결제 요청</IonButton> */}
              <button style={{ width: "75%", fontSize: "18px", padding: "10px", borderRadius: "10px" }} onClick={requirePay} disabled={!check}>
                결제 요청
              </button>

              <IonModal isOpen={isOpen}>
                <IonContent>
                  <div style={{ display: "flex", justifyContent: "center", alignContent: "center", alignItems: "center", height: "100vh", flexDirection: "column" }}>
                    {/* {sellIdx.map((el: any) => {
                     console.log(el,222222)
                     return ( */}
                    <QRCode style={{ margin: "10%" }} value={sellIdx.toString()}></QRCode>
                    <div style={{ width: "100%", display: "flex", justifyContent: "center", height: "8%" }}>
                      <IonButton style={{ width: "40%", height: "100%", fontSize: "130%" }} color="warning" onClick={prevHistoryFunction}>
                        결제 대기
                      </IonButton>
                      <IonButton style={{ width: "40%", height: "100%", fontSize: "130%" }} color="success" onClick={completePayment}>
                        결제 완료
                      </IonButton>
                    </div>

                    {/* )
                    })}
                     */}
                  </div>
                </IonContent>
              </IonModal>
              <div></div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Payment2;
