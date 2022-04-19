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
    IonItemDivider,
    IonInput,
    IonBackButton,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle
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
import './BalanceInquiry.css'

  
  
  
  
  
  const meta = document.createElement('meta');
  meta.name = "viewport";
  meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
  document.getElementsByTagName('head')[0].appendChild(meta);
  
  
  const BalanceInquiry: React.FC = () => {
    return (
    <IonApp>
        <IonPage className="ion-page" id="main-content">
            <IonContent className="ion-padding">
                <IonHeader >
                    <IonToolbar >
                        <IonButtons slot="start">
                            <IonBackButton  defaultHref= "" />
                        </IonButtons>
                        <IonTitle> 잔고조회</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <div style={{padding:'0px 2%'}}>
                    <div className='balance_subtitle'>
                        TOTAL PORTFOUO VALUE
                    </div>

                    <IonCard className='balance_card'>
                        <div className='balanceDate'>22.01.03</div>
                        <div className='balance'>33,000</div>
                        <div className='balance_category'>KSPC</div>
                    </IonCard>

                    <IonCard className='balance_card'>
                        <div className='balanceDate'>22.01.03</div>
                        <div className='balance'>33,000</div>
                        <div className='balance_category'>ETH</div>
                    </IonCard>
                    
                    <IonCard className='balance_card'>
                        <div className='balanceDate'>22.01.03</div>
                        <div className='balance'>33,000</div>
                        <div className='balance_category'>KSP POINT</div>
                    </IonCard>
                </div>
            </IonContent>
        </IonPage>
    </IonApp>
    );
  };
  
  export default BalanceInquiry;
  


