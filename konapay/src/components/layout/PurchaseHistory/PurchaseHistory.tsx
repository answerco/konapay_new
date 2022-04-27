import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonPage, IonButtons, IonBackButton, IonGrid, IonRow, IonCol } from "@ionic/react";

import React from "react";

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
import "../Payment/payment.css";
import { chevronBack } from "ionicons/icons";
import { useHistory } from "react-router";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const PurchaseHistory: React.FC = () => {
  const history = useHistory();
  return (
    <IonApp>
      <IonPage className="ion-page" id="main-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/"  text={''} color='dark'  />
            </IonButtons>
            <IonTitle>집계</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent className="ion-padding">
          <div style={{ padding: "0px 2%" }}>
            <div style={{ margin: "7% 0px", display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontSize: "20px", color: "gray", fontWeight: "bold" }}>KONA PAY</div>
            </div>

            {/* <div style={{ display: "flex", justifyContent: "center" }}>
              <span style={{ border: "1px solid gray", padding: "7px", borderRadius: "10px" }}>2022.08-01</span>
            </div> */}

            <div style={{ margin: "10% 0" }}>
              <IonLabel>발생건수/금액통계</IonLabel>
              <IonGrid className="payment_table_text">
                <IonRow className="table_th">
                  <IonCol>구분</IonCol>
                  <IonCol>월 합계</IonCol>
                  <IonCol>누적 합계</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>발생건수</IonCol>
                  <IonCol>1</IonCol>
                  <IonCol>2</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>발생금액</IonCol>
                  <IonCol>1,6600</IonCol>
                  <IonCol>1,6600</IonCol>
                </IonRow>
              </IonGrid>
            </div>

            <div style={{ margin: "10% 0" }}>
              <IonLabel>결제수단별 통계</IonLabel>
              <IonGrid className="payment_table_text">
                <IonRow className="table_th">
                  <IonCol>결제수단</IonCol>
                  <IonCol>건수</IonCol>
                  <IonCol>금액</IonCol>
                </IonRow>
                <IonRow>
                  <IonCol>코나페이</IonCol>
                  <IonCol>1</IonCol>
                  <IonCol>33,000</IonCol>
                </IonRow>
              </IonGrid>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default PurchaseHistory;
