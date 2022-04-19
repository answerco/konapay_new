// import { Redirect, Route } from "react-router-dom";
// import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from "@ionic/react";
import { IonApp, setupIonicReact } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import Layout from "./components/layout/Layout1";
import SignUpPage1 from "./components/signUp/SignUpPage2";
import SwapPage from "./components/swap/Layout";
import InOutPage from "./components/inout/Layout";
import CameraPage from "./components/camera/Layout";
setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      {/* <Layout></Layout> */}
      {/* <SignUpPage1 /> */}
      {/* <SwapPage></SwapPage> */}
      {/* <InOutPage></InOutPage> */}
      <CameraPage></CameraPage>
    </IonReactRouter>
  </IonApp>
);

export default App;
