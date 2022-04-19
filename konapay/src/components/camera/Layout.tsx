// import "./Layout.css";
import React from "react";

import { IonButton, IonContent, IonHeader, IonPage, IonToolbar } from "@ionic/react";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const Layout: React.FC = () => {
  const openScanner = async () => {};
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>Tab 1</IonToolbar>
        <IonButton onClick={openScanner}>Scan barcode</IonButton>
      </IonHeader>
      <IonContent></IonContent>
    </IonPage>
  );
};

export default Layout;
