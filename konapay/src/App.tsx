import React from 'react';
import { IonApp, 
  IonHeader, 
  IonToolbar, 
  IonTitle, 
  IonContent, 
  IonFooter, 
  IonMenu,
  IonList,
  IonListHeader,
  IonMenuToggle,
  IonIcon,
  IonLabel,
  IonPage ,
  IonButtons,
  IonButton,
  IonItem,
  IonRouterOutlet
 } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';




/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
// import { Redirect, Route } from "react-router-dom";
// import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from "@ionic/react";
/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import './components/assets/css/main.css';


/* layout */
import Main from './components/layout/Main/Main'
import PayToCamera from './components/layout/PurchaseHistory/PurchaseHistory'
import Payment from './components/layout/Payment/Payment';
import Payment2 from './components/layout/Payment/Payment2';
import Payment3 from './components/layout/Payment/Payment3';
import Payment4 from './components/layout/Payment/Payment4';
import PurchaseHistory from './components/layout/PurchaseHistory/PurchaseHistory';
import Inout from './components/layout/inout/Layout'
import SendKSPC from './components/layout/SendKSPC/SendKSPC';
import BalanceInquiry from './components/layout/BalanceInquiry/BalanceInquiry';
import Board from './components/layout/Board/Board';
import SignUpPage1 from './components/layout/signUp/SignUpPage1';
import SignUpPage2 from './components/layout/signUp/SignUpPage2';
import SignUpPage3 from './components/layout/signUp/SignUpPage3';
import Layout from './components/layout/PayToCamera/PaytoCamera';
import Swap from './components/layout/swap/Layout'

const App: React.FC = () => (
	<IonApp>
		<IonReactRouter>
			<IonRouterOutlet>
				<Route exact path="/"> <Main /> </Route>

        <Route exact path="/signuppage1"> <SignUpPage1 /> </Route>
        <Route exact path="/signuppage2"> <SignUpPage2 /> </Route>
        <Route exact path="/signuppage3"> <SignUpPage3 /> </Route>

        <Route exact path="/scan"> <Layout /> </Route>

        <Route exact path="/purchasehistory"> <PurchaseHistory /> </Route>

        <Route exact path="/inout"> <Inout /> </Route>
        <Route exact path="/sendkspc"> <SendKSPC /> </Route>

        <Route exact path="/balanceinquiry"> <BalanceInquiry /> </Route>
        <Route exact path="/payment4"> <Payment4 /> </Route>

        <Route exact path="/board"> <Board /> </Route>

        <Route exact path="/swap"> <Swap /> </Route>

        <Route exact path="/payment"> <Payment /> </Route>
        <Route exact path="/payment2"> <Payment2 /> </Route>
        <Route exact path="/payment3"> <Payment3 /> </Route>
        <Route exact path="/payment4"> <Payment4 /> </Route>
			</IonRouterOutlet>
		</IonReactRouter>
	</IonApp>
);

export default App;