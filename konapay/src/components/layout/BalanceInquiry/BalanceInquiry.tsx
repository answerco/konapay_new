import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonPage, IonButtons, IonBackButton, IonCard, IonItem, IonIcon } from "@ionic/react";

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
import "./BalanceInquiry.css";
import { useHistory } from "react-router";
import { chevronBack } from "ionicons/icons";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const BalanceInquiry: React.FC = () => {
  const history = useHistory();
  return (
    <IonApp>
      <IonPage className="ion-page" id="main-content">
        <IonContent className="ion-padding">
          <IonHeader>
            <IonItem>
              <IonItem button onClick={() => history.goBack()}>
                <IonIcon icon={chevronBack}></IonIcon>
              </IonItem>
              <IonTitle>구매내역</IonTitle>
            </IonItem>
          </IonHeader>
          <div style={{ padding: "0px 2%" }}>
            <div className="balance_subtitle">TOTAL PORTFOUO VALUE</div>

            <IonCard className="balance_card">
              <div className="balanceDate">22.01.03</div>
              <div className="balance">33,000</div>
              <div className="balance_category">KSPC</div>
            </IonCard>

            <IonCard className="balance_card">
              <div className="balanceDate">22.01.03</div>
              <div className="balance">33,000</div>
              <div className="balance_category">ETH</div>
            </IonCard>

            <IonCard className="balance_card">
              <div className="balanceDate">22.01.03</div>
              <div className="balance">33,000</div>
              <div className="balance_category">KSP POINT</div>
            </IonCard>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default BalanceInquiry;
