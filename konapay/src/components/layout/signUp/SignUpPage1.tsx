import "./SignUpPageLayout.css";
import React, { useState } from "react";
import Header from "./Header";
import SignUpHeaderGrid1 from "./SignUpHeaderGrid1";
import SignUpHeaderGrid2 from "./SignUpHeaderGrid2";
import SignUpTextArea from "./SignUpTextArea";
import SignUpCheckBox1 from "./SignUpCheckBox1";
import SignUpCheckBox2 from "./SignUpCheckBox2";
import { IonApp, IonBackButton, IonButton, IonButtons, IonCheckbox, IonCol, IonContent, IonGrid, IonHeader, IonItem, IonLabel, IonPage, IonRouterLink, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";
import { chevronBackOutline } from "ionicons/icons";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const SignUpPage1: React.FC = () => {

  const history = useHistory()

  const locationFunction = () => {
    history.push({pathname:"/signuppage2" ,state:{}})
  };

  const [check, setCheck] = useState({
    service: false,
    personal: false,
    alarm: false
  })

  const onChange = (e:any) => {
    setCheck({...check,[e.target.name]:e.detail.checked})
  }

  return (
    <div className="grid-init grid">
      {/* <div className="box-init box" style={{ height: "7.5%" }}>
        <Header name="회원가입"></Header>
      </div> */}
      <IonHeader >
        <IonToolbar >
            
                <IonButtons slot="start">
                        <IonBackButton  defaultHref= "/" icon="chevron-back-outline" />
                </IonButtons>
            

            <IonTitle>
            회원가입
            </IonTitle>

        </IonToolbar>
        </IonHeader>
      <div className="box-init box" style={{ height: "7.5%" }}>
        <SignUpHeaderGrid1></SignUpHeaderGrid1>
        <SignUpHeaderGrid2></SignUpHeaderGrid2>
      </div>
      <div className="box-init" style={{ height: "30%" }}>
        <SignUpTextArea></SignUpTextArea>
      </div>
      <div className="box-init box" style={{ height: "55%", flexDirection: "column" }}>
        <div
          className="box-init"
          style={{
            width: "100%",

            flexDirection: "column",
            justifyContent: "flex-start",
            height: "70%",
          }}
        >
          {/* <SignUpCheckBox1></SignUpCheckBox1> */}

            <IonItem  style={{display:'flex', width: '90%', marginBottom:'3%', marginRight:'5%'}}>
              <IonCheckbox checked={check.service && check.personal && check.alarm} onIonChange={()=>setCheck({ service: true, personal: true, alarm: true})} />
              <IonLabel style={{marginLeft:'3%', fontSize: '100%'}}>모두 동의하기</IonLabel>
            </IonItem>

          <div style={{display:'flex', width:'100%', justifyContent:'space-around'}}>
            <IonItem className="signup_item" style={{display:'flex', width: '70%'}}>
              <IonCheckbox name="service" checked={check.service} onIonChange={onChange} />
              <IonLabel style={{marginLeft:'3%', fontSize: '85%'}}>[필수] 서비스 이용약관 동의</IonLabel>
            </IonItem>
            <a style={{ fontSize: "14px", textAlign: "center", marginRight:"5%", alignSelf:'center' }} href="http://www.naver.com" target="_blank">[상세보기]</a>
          </div>

          <div style={{display:'flex', width:'100%', justifyContent:'space-around'}}>
            <IonItem className="signup_item" style={{display:'flex', width: '70%'}}>
              <IonCheckbox name="personal" checked={check.personal} onIonChange={onChange} />
              <IonLabel style={{marginLeft:'3%', fontSize: '85%'}}>[필수] 개인정보 수집 및 이용 동의</IonLabel>
            </IonItem>
            <a style={{ fontSize: "14px", textAlign: "center", marginRight:"5%", alignSelf:'center' }} href="http://www.naver.com" target="_blank">[상세보기]</a>
          </div>

          <div style={{display:'flex', width:'100%', justifyContent:'space-around'}}>
            <IonItem className="signup_item" style={{display:'flex', width: '70%'}}>
              <IonCheckbox name="alarm" checked={check.alarm} onIonChange={onChange} />
              <IonLabel style={{marginLeft:'3%', fontSize: '85%'}}>[선택] 마케팅정보 알람 동의</IonLabel>
            </IonItem>
            <a style={{ fontSize: "14px", textAlign: "center", marginRight:"5%", alignSelf:'center' }} href="http://www.naver.com" target="_blank">[상세보기]</a>
          </div>


{/*           
          <SignUpCheckBox2 forId="checkBox1" check="필수" description="서비스 이용약관 동의"></SignUpCheckBox2>
          <SignUpCheckBox2 forId="checkBox2" check="필수" description="개인정보 수집 및 이용 동의"></SignUpCheckBox2>
          <SignUpCheckBox2 forId="checkBox3" check="선택" description="마케팅정보 알람 동의"></SignUpCheckBox2> */}
        </div>
        <div className="box-init" style={{ height: "40%", width: "100%", flexDirection: "column", justifyContent: "flex-start" }}>
          <button className="box-init" style={{ height: "25%", width: "65%", color: "gray", border: "none" }} onClick={locationFunction}>
            다음
          </button> 
        </div>
      </div>
    </div>
  );
};

export default SignUpPage1;
