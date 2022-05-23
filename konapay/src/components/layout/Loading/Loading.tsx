import {
    IonApp,
    IonPage,
  } from "@ionic/react";
  
  import React, { useEffect, useState } from "react";
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
  
  import "./main.css";
  
  const meta = document.createElement("meta");
  meta.name = "viewport";
  meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
  document.getElementsByTagName("head")[0].appendChild(meta);
  
  const Loading: React.FC = () => {
  
    return (
      <IonApp>
        {/* <IonPage  style={{zIndex:"10px", height:"100vh", width:"100vw", background:'linear-gradient(lightCyan, skyBlue, deepSkyBlue)'}}> */}
        <IonPage  >
        
        </IonPage>
      </IonApp>
    );
  };
  
  export default Loading;
  