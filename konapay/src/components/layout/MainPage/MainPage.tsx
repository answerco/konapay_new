import { 
  IonApp, 
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
  IonItem } from '@ionic/react';
import './MainPage.css';
import React from 'react';
import Sidebar from '../../assets/img/sideMenu.png';
import Myinfo from '../../assets/img/myInfo.png';
import Setting from '../../assets/img/setting.png';
import Home from '../../assets/img/home.png';
import Banner from '../../assets/img/bannerImg.png';
import MainCard from '../../assets/img/mainCard.png';
import CardSelectBar from '../../assets/img/cardSelectBar.png';
import FooterMenu_Home from '../../assets/img/footerMenu_home.png';
import FooterMenu_Pay from '../../assets/img/footerMenu_pay.png';
import FooterMenu_Benefit from '../../assets/img/footerMenu_benefit.png';
import Menu from '../SideMenu/Menu';



const meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName('head')[0].appendChild(meta);


const MainPage: React.FC = () => {
  return (
    <IonApp>
    <IonMenu content-id="main-content">
    <IonHeader>
      <IonToolbar color="primary">
        <IonTitle>Menu</IonTitle>
      </IonToolbar>
    </IonHeader>

    <IonContent>
      <IonList>
        <IonListHeader>
          Navigate
        </IonListHeader>
        <IonMenuToggle auto-hide="false">
          <IonItem button>
            <IonIcon slot="start" name='home'></IonIcon>
            <IonLabel>
              Home
            </IonLabel>
          </IonItem>
        </IonMenuToggle>
      </IonList>
    </IonContent>
  </IonMenu>

  <IonPage className="ion-page" id="main-content">
    <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonMenuToggle>
            <IonButton>
              <IonIcon slot="icon-only" name='menu'></IonIcon>
            </IonButton>
          </IonMenuToggle>
        </IonButtons>
        <IonTitle>Header</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent className="ion-padding">
      <h1>Main Content</h1>
      <p>Click the icon in the top left to toggle the menu.</p>
    </IonContent>
  </IonPage>
  </IonApp>
  );
};

export default MainPage;
