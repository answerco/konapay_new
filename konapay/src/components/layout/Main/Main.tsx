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
    IonItem 
} from '@ionic/react';

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


import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/core.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';



  
  
  
  
  
  const meta = document.createElement('meta');
  meta.name = "viewport";
  meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
  document.getElementsByTagName('head')[0].appendChild(meta);
  
  
  const Main: React.FC = () => {
    return (
    <IonApp>
        <IonMenu content-id="main-content">
        <IonHeader>
            <IonToolbar color="light" border-width="200%">
                <IonTitle>KONA PAY</IonTitle>
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
                            <IonIcon name="menu-outline" slot='start'></IonIcon>
                        </IonButton>
                    </IonMenuToggle>
                </IonButtons>

                <IonTitle>

                </IonTitle>

        </IonToolbar>
        </IonHeader>

        <IonContent className="ion-padding">
        asdasdasdsd
        </IonContent>

    </IonPage>
    </IonApp>
    );
  };
  
  export default Main;
  