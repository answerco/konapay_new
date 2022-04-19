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



  
  
  
  
  
  const meta = document.createElement('meta');
  meta.name = "viewport";
  meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
  document.getElementsByTagName('head')[0].appendChild(meta);
  
  
  const Payment: React.FC = () => {
    return (
    <IonApp>
        

    <IonPage className="ion-page" id="main-content">
        

        <IonContent className="ion-padding">
        <IonHeader >
        <IonToolbar >
            
                <IonButtons slot="start">
                <IonBackButton  defaultHref= "/" />
                </IonButtons>
            

            <IonTitle>
      
            
      
                상품, 대금 정보 입력
            </IonTitle>

        </IonToolbar>
        </IonHeader>
            <div style={{padding:'0px 2%'}}>
                <div style={{margin:'7% 0px', display:'flex', justifyContent:'space-between'}}>
                    <div style={{fontSize:'20px', color:'gray', fontWeight:'bold'}}>KONA PAY</div>
                    <div style={{fontWeight:'bold', color:'lightgray'}}>○ ● ● ●</div>
                </div>
                <div style={{border:'2px solid lightgray', padding:'15px 20px', borderRadius:'10px', margin:'1.5% 0px' }}>
                    <div style={{margin:'0px 0px 10px 0px'}}>상품</div>
                    <input style={{width:'100%', height:'30px'}} type="text"></input>
                </div>
                <div style={{border:'2px solid lightgray', padding:'15px 20px', borderRadius:'10px', margin:'1.5% 0px' }}>
                    <div style={{margin:'0px 0px 10px 0px'}}>가격</div>
                    <input style={{width:'100%', height:'30px'}} type="text"></input>
                </div>
                <div style={{border:'2px solid lightgray', padding:'15px 20px', borderRadius:'10px', margin:'1.5% 0px' }}>
                    <div style={{margin:'0px 0px 10px 0px'}}>구매자 아이디</div>
                    <input style={{width:'100%', height:'30px'}} type="text"></input>
                </div>
                <div style={{fontSize:'80%', margin:'15% 0px'}}>
                    [유의사항]
                    <br />
                    <br />
                    개인정보 입력에 유의해 주세요.
                    <br />
                    KSPC 이외의 주소로는 전송되지 않아요.
                    <br />
                    KSPC를 전송할 경우에는 이더리움 가스비가 필요합니다.
                    <br />
                    미리 이더리움을 충전해 놓으시기 바랍니다.
                </div>
                <IonRouterLink href="/payment2">
                    <div style={{display:'flex', justifyContent:'center'}}>
                        <button style={{width:'75%', fontSize:'18px', padding:'10px', borderRadius:'10px'}}>승인 요청</button>
                    </div>
                </IonRouterLink>
            </div>
        </IonContent>

    </IonPage>
    </IonApp>
    );
  };
  
  export default Payment;
  


