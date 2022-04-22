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
    IonSegment,
    IonSegmentButton,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    useIonViewWillEnter,
    IonAvatar,
    IonThumbnail
} from '@ionic/react';

import React, { useState } from 'react';
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
import './Board.css'


  
  
  
  
  
  const meta = document.createElement('meta');
  meta.name = "viewport";
  meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
  document.getElementsByTagName('head')[0].appendChild(meta);
  
  
  const Board: React.FC = () => {

        const [data, setData] = useState<string[]>([]);
        
        const pushData = () => {
          const max = data.length + 20;
          const min = max - 20;
          const newData = [];
          for (let i = min; i < max; i++) {
            newData.push('Item' + i);
          }
          
          setData([
            ...data,
            ...newData
          ]);
        }

        const loadData = (ev: any) => {
          setTimeout(() => {
            pushData();
            console.log('Loaded data');
            ev.target.complete();
          }, 500);
        }  
        
        useIonViewWillEnter(() => {
          pushData();
        });

    return (
    <IonApp>
        

    <IonPage className="ion-page" id="main-content">
        

        <IonContent className="ion-padding">
        <IonHeader >
        <IonToolbar >
            <IonButtons slot="start">
            <IonBackButton  defaultHref= "/" />
            </IonButtons>

            <IonTitle>게시판</IonTitle>

        </IonToolbar>
        </IonHeader>
            <div style={{padding:'0px 2%'}}>
                
                <div style={{margin:'7% 0px', display:'flex', justifyContent:'space-between'}}>
                    <div style={{fontSize:'20px', color:'gray', fontWeight:'bold'}}>KONA PAY</div>
                </div>
                <IonItem>
                    <IonSegment value="favorite" color='white'>
                        <IonSegmentButton value="call" >
                            <IonLabel>공지사항</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="favorite" >
                            <IonLabel>이벤트</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="map" >
                            <IonLabel>커뮤니티</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </IonItem>
                
                <IonItem>
                    <IonSegment className='balance' value="favorite" color='white'>
                        <IonSegmentButton value="call" >
                            <IonLabel>인기</IonLabel>
                        </IonSegmentButton>
                        <IonSegmentButton value="favorite">
                            <IonLabel>인기댓글</IonLabel>
                        </IonSegmentButton>
                    </IonSegment>
                </IonItem>
                
        
                <IonList>
                  {data.map((item, index) => {
                    return (
                      <IonItem key={index}>
                        <IonLabel>
                            <h2>잘 구매한 물건들 입니다.</h2>
                            <div>   
                                <p>00:35</p>
                                <p>조회 130회</p>
                            </div>
                        </IonLabel>
                        <IonThumbnail>
                            <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y" />
                        </IonThumbnail>
                        <IonButton style={{height:'80%', width:'15%' }} className="showComment" slot="end">32<br/>댓글</IonButton>
                      </IonItem>
                    )
                  })}
                </IonList>
              
                <IonInfiniteScroll onIonInfinite={loadData} threshold="100px">
                    <IonInfiniteScrollContent loadingSpinner="bubbles" loadingText="Loading more data..." />
                </IonInfiniteScroll>

            </div>
        </IonContent>

    </IonPage>
    </IonApp>
    );
  };
  
  export default Board;
  


