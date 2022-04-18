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
    IonItem, 
    IonImg,
    IonNote,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCard,
    IonCardSubtitle
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

import { 
    homeOutline,
    settingsOutline,
    personCircleOutline,
    logoUsd,
    giftOutline
} 
from 'ionicons/icons';

import './main.css'

  
  
  
  
  
  const meta = document.createElement('meta');
  meta.name = "viewport";
  meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
  document.getElementsByTagName('head')[0].appendChild(meta);
  

  
  

  
  
  const Main: React.FC = () => {
 

      
    return (
    <IonApp>
        <IonMenu content-id="main-content">
        <IonHeader>
            <IonToolbar color="light">
                <IonTitle>KONA PAY</IonTitle>
            </IonToolbar>
        </IonHeader>


        <IonContent content-id="main-content">
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


    <IonPage className="ion-page" >
        <IonHeader>
            <IonToolbar>

                    <IonButtons slot="start" id="main-content">
                        <IonMenuToggle>
                            <IonButton>
                                <IonIcon name="menu-sharp" slot='start'></IonIcon>
                            </IonButton>
                        </IonMenuToggle>
                    </IonButtons>

                    <IonButtons slot="end" id="myinfo" >
                        <IonMenuToggle>
                            <IonButton>
                                <IonIcon src={personCircleOutline} ></IonIcon>
                            </IonButton>
                        </IonMenuToggle>
                    </IonButtons>

                    <IonButtons slot="end" id="setting" >
                        <IonMenuToggle>
                            <IonButton>
                                <IonIcon src={settingsOutline} ></IonIcon>
                            </IonButton>
                        </IonMenuToggle>
                    </IonButtons>

                    <IonButtons slot="end" id="home" >
                        <IonMenuToggle>
                            <IonButton>
                                <IonIcon src={homeOutline} ></IonIcon>
                            </IonButton>
                        </IonMenuToggle>
                    </IonButtons>

            </IonToolbar>
        </IonHeader>

        <IonContent className="background"></IonContent>
        <IonLabel className="bannerText" >KONA PAY</IonLabel>
        <IonLabel className="bannerText2" >언제 어디서든 간편 한 결제</IonLabel>


        <IonCard className="walletCard">
            <IonCardHeader>
                <IonLabel className="cardHeader">
                    카드선택
                </IonLabel>
            </IonCardHeader>
            <IonImg src={MainCard} className="mainCard"/>
            
            <IonCardSubtitle>
                <IonLabel className="cardSub">
                    ● ○ ○ ○ 
                </IonLabel>
            </IonCardSubtitle>
        </IonCard>
        
        <IonButton color="medium" className="pwdBtn" ><a style={{color:'white'}}>비밀번호</a></IonButton>
        <IonLabel className="scanTopay">
            스캔으로 결제하세요
        </IonLabel>

            <IonToolbar className="mainFooter" style={{backgroundColor:'rgb(230, 230, 230)', height:'15%' ,paddingTop:'3%'}}>


                <IonButtons slot="start" id="home" style={{marginLeft:'10%'}}>
                    <IonMenuToggle>
                        <IonButton>
                            <a>
                                <IonIcon src={homeOutline} ></IonIcon>
                                <div><IonLabel>홈</IonLabel></div>
                            </a>
                        </IonButton>
                    </IonMenuToggle>
                </IonButtons>


                <IonButtons slot="start" style={{marginLeft:'20%'}}>
                    <IonMenuToggle>
                        <IonButton>
                            <a>
                                <IonIcon src={logoUsd}></IonIcon>
                                <div style={{height:'100%'}}><IonLabel>결제요청</IonLabel></div>
                            </a>
                        </IonButton>
                    </IonMenuToggle>
                </IonButtons>

                <IonButtons slot="start" style={{marginLeft:'20%'}}>
                    <IonMenuToggle>
                        <IonButton>
                            <a>
                                <IonIcon src={giftOutline}></IonIcon>
                                <div><IonLabel>혜택</IonLabel></div>
                            </a>
                        </IonButton>
                    </IonMenuToggle>
                </IonButtons>
            </IonToolbar>


            


    </IonPage>

    </IonApp>
    );
  };
  
  export default Main;
  