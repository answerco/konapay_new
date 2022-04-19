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
    IonGrid,
    IonRow,
    IonCol,
    IonRouterLink
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
import './payment.css'


  
  
  
  
  
  const meta = document.createElement('meta');
  meta.name = "viewport";
  meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
  document.getElementsByTagName('head')[0].appendChild(meta);
  
  
  const Payment3: React.FC = () => {
    return (
    <IonApp>
        

    <IonPage className="ion-page" id="main-content">
        

        <IonContent className="ion-padding">
        <IonHeader >
        <IonToolbar >
            <IonButtons slot="start">
            <IonBackButton  defaultHref= "/payment" />
            </IonButtons>

            <IonTitle>
                결제 요청
            </IonTitle>

        </IonToolbar>
        </IonHeader>
            <div style={{padding:'0px 2%'}}>
                <div style={{margin:'7% 0px', display:'flex', justifyContent:'space-between'}}>
                    <div style={{fontSize:'20px', color:'gray', fontWeight:'bold'}}>KONA PAY</div>
                    <div style={{fontWeight:'bold', color:'lightgray'}}>● ● ○ ●</div>
                </div>

                <div>
                    지불 승인이 완료 되었습니다.
                </div>

                <IonGrid className='total_text'>
                    <IonRow className='table_total'>
                        <IonCol>사용금액</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>33,000</IonCol>
                    </IonRow>
                </IonGrid>

                <IonGrid className='total_text'>
                    <IonRow className='table_total'>
                        <IonCol>사용가능 금액</IonCol>
                    </IonRow>
                    <IonRow>
                        <IonCol>0</IonCol>
                    </IonRow>
                </IonGrid>
                <IonRouterLink href="/payment4">
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <button style={{width:'75%', fontSize:'18px', padding:'10px', borderRadius:'10px'}}>매출조회</button>
                    </div>
                </IonRouterLink>
            </div>
        </IonContent>

    </IonPage>
    </IonApp>
    );
  };
  
  export default Payment3;
  


