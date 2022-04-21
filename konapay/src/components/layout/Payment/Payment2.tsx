import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonPage, IonButtons, IonItem, IonBackButton, IonGrid, IonRow, IonCol, IonCheckbox, IonIcon } from "@ionic/react";

import React, { useState } from "react";
import { useHistory, useLocation } from "react-router";

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

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const Payment2: React.FC = () => {
  const history = useHistory();
  const location: any = useLocation();

  const prevHistoryFunction = () => {
    history.push({ pathname: "/payment3", state: {} });
  };

  const [check, setCheck] = useState(false);

  return (
    <IonApp>
      <IonPage className="ion-page" id="main-content">
        <IonContent className="ion-padding">
          <IonHeader>
            <IonItem>
              <IonItem button onClick={() => history.goBack()}>
                <IonIcon icon={chevronBack}></IonIcon>
              </IonItem>
              <IonTitle>결제요청</IonTitle>
            </IonItem>
          </IonHeader>

          <div style={{ padding: "0px 2%" }}>
            <div style={{ margin: "7% 0px", display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontSize: "20px", color: "gray", fontWeight: "bold" }}>KONA PAY</div>
              <div style={{ fontWeight: "bold", color: "lightgray" }}>● ○ ● ●</div>
            </div>

            <IonGrid className="table_text">
              <IonRow className="table_th">
                <IonCol>브랜드명</IonCol>
                <IonCol>상품명</IonCol>
                <IonCol>금액</IonCol>
                <IonCol size="4">구매자 아이디</IonCol>
              </IonRow>
              <IonRow>
                <IonCol>이마트</IonCol>
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
                <IonCol>33,000</IonCol>
              </IonRow>
            </IonGrid>

            <IonItem lines="none" className="payment_check">
              <IonCheckbox slot="start" color="dark" checked={check} onClick={(e) => setCheck(!check)} />
              <IonLabel>결제 정보를 구매자에게 발송</IonLabel>
            </IonItem>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {/* <IonButton className='payment_button' color="light" size='large'>결제 요청</IonButton> */}
              <button style={{ width: "75%", fontSize: "18px", padding: "10px", borderRadius: "10px" }} onClick={prevHistoryFunction} disabled={!check}>
                결제 요청
              </button>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default Payment2;
