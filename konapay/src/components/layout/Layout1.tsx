import "./Layout1.css";
import React from "react";
import { IonContent, IonButton, IonIcon } from "@ionic/react";
import { star } from "ionicons/icons";
const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const Layout1: React.FC = () => {
  return (
    <div className="box-init" style={{ flexDirection: "column", backgroundColor: "gray" }}>
      {/*-- Default --*/}
      <IonButton>Default</IonButton>

      {/*-- Anchor --*/}
      <IonButton href="#">Anchor</IonButton>

      {/*-- Colors --*/}
      <IonButton color="primary">Primary</IonButton>
      <IonButton color="secondary">Secondary</IonButton>
      <IonButton color="tertiary">Tertiary</IonButton>
      <IonButton color="success">Success</IonButton>
      <IonButton color="warning">Warning</IonButton>
      <IonButton color="danger">Danger</IonButton>
      <IonButton color="light">Light</IonButton>
      <IonButton color="medium">Medium</IonButton>
      <IonButton color="dark">Dark</IonButton>

      {/*-- Expand --*/}
      <IonButton expand="full">Full Button</IonButton>
      <IonButton expand="block">Block Button</IonButton>

      {/*-- Round --*/}
      <IonButton shape="round">Round Button</IonButton>

      {/*-- Fill --*/}
      <IonButton expand="full" fill="outline">
        Outline + Full
      </IonButton>
      <IonButton expand="block" fill="outline">
        Outline + Block
      </IonButton>
      <IonButton shape="round" fill="outline">
        Outline + Round
      </IonButton>

      {/*-- Icons --*/}
      <IonButton>
        <IonIcon slot="start" icon={star} />
        Left Icon
      </IonButton>

      <IonButton>
        Right Icon
        <IonIcon slot="end" icon={star} />
      </IonButton>

      <IonButton>
        <IonIcon slot="icon-only" icon={star} />
      </IonButton>

      {/*-- Sizes --*/}
      <IonButton size="large">Large</IonButton>
      <IonButton>Default</IonButton>
      <IonButton size="small">Small</IonButton>
    </div>
  );
};

export default Layout1;
