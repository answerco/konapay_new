import "./QrReaderPage.css";
import { IonApp, IonBackButton, IonButton, IonButtons, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonInput, IonRow, IonTitle, IonToolbar, useIonToast } from "@ionic/react";
import axios from "axios";
import { chevronBack } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { QrReader } from "react-qr-reader";
import { useHistory } from "react-router";
import PayPassword from "../../../model/user/payPassword";

const PayPass: React.FC = () => {
  const history = useHistory();
  const [payPassword, setPayPassword] = useState<string>("");
  const [toast, dismiss] = useIonToast();

  const isValid = async () => {
    try {
      const res = await PayPassword.payPassword(sessionStorage.uid, payPassword)
      console.log(res[0].state)
      if (res[0].state) {
        history.push({ pathname: `/scan`, state: {} });
      }
      else {
        toast("결제 비밀번호가 틀렸습니다.", 2000)
      }
    } catch { }
  };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" text={""} color="dark" />
          </IonButtons>
          <IonTitle>결제 비밀번호</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div style={{ display: "flex", justifyContent: "center", height: "100%", alignItems: "center" }}>
          <div style={{ display: "flex", justifyContent: "center", height: "125px", width: "95%" }}>
            <IonCard style={{ heigth: "100%", width: "100%", padding: "0 20px" }} >
              <IonInput style={{ width: "100%", height: "100%", fontSize: "200%", letterSpacing: "30px" }} type="password" maxlength={6} inputmode="numeric" value={payPassword} onIonChange={(e: any) => setPayPassword(e.target.value)}></IonInput>
            </IonCard>
          </div>
        </div>
      </IonContent>
      <IonButton onClick={isValid}>비밀번호 인증</IonButton>

    </IonApp>
  );
};

export default PayPass;
