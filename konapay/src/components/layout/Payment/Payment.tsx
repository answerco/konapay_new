import { IonApp, IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonMenu,IonList,IonListHeader,IonMenuToggle,IonIcon,IonLabel,IonPage ,IonButtons,IonButton,IonItem, IonItemDivider,IonInput,IonBackButton,IonRouterLink} from '@ionic/react';

import React, { useState } from 'react';

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
import { useHistory } from "react-router";  
import { chevronBackOutline } from 'ionicons/icons';

  const meta = document.createElement('meta');
  meta.name = "viewport";
  meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
  document.getElementsByTagName('head')[0].appendChild(meta);
  
  const Payment: React.FC = () => {

    const [content, setContent] = useState({
        product : "",
        price : "",
        id : ""
    })

    const onChange = (e: any) => {
        setContent({...content,[e.target.name]: e.target.value})
    }

    const history = useHistory()

    const locationFunction = () => {
      history.push({pathname:"/payment2" ,state:content})
    };

    return (
    <IonApp>
        

    <IonPage className="ion-page" id="main-content">
        

        <IonContent>
        <IonHeader >
        <IonToolbar >
            
                <IonButtons slot="start">
                        <IonBackButton  defaultHref= "/" icon={chevronBackOutline} />
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
                    <input style={{width:'100%', height:'30px'}} type="text" name="product" value={content.product} onChange={onChange} ></input>
                </div>
                <div style={{border:'2px solid lightgray', padding:'15px 20px', borderRadius:'10px', margin:'1.5% 0px' }}>
                    <div style={{margin:'0px 0px 10px 0px'}}>가격</div>
                    <input style={{width:'100%', height:'30px'}} type="number" name="price" value={content.price} onChange={onChange}></input>
                </div>
                <div style={{border:'2px solid lightgray', padding:'15px 20px', borderRadius:'10px', margin:'1.5% 0px' }}>
                    <div style={{margin:'0px 0px 10px 0px'}}>구매자 아이디</div>
                    <input style={{width:'100%', height:'30px'}} type="text" name="id" value={content.id} onChange={onChange}></input>
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
                <div style={{display:'flex', justifyContent:'center'}}>
                    <button style={{width:'75%', fontSize:'18px', padding:'10px', borderRadius:'10px'}} disabled={content.product==="" || content.price==="" || content.id===""} onClick={locationFunction} >승인 요청</button>
                </div>
            </div>
        </IonContent>

    </IonPage>
    </IonApp>
    );
  };
  
  export default Payment;
  


