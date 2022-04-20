import "./SignUpPageLayout.css";
import React, { useState } from "react";
import SignUpHeader from "./SignUpHeader";
import Header from "./Header";
import SignUpHeaderGrid1 from "./SignUpHeaderGrid1";
import SignUpHeaderGrid2 from "./SignUpHeaderGrid2";
import SignUpInputBox from "./SignUpInputBox";
import { IonBackButton, IonButtons, IonHeader, IonIcon, IonItem, IonRouterLink, IonTitle, IonToolbar } from "@ionic/react";
import { useHistory, useLocation } from "react-router";
import { chevronBack } from "ionicons/icons";
import Signup from "../../../model/user/signup";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const SignUpPage2: React.FC = () => {
  const history = useHistory();
  const location = useLocation();

  const [registInfo, setRegistInfo] = useState({
    uid: "",
    password: "",
    passwordCheck: "",
    name: "",
    email: "",
    emailAlarm: 0,
    messageAlarm: 0,
  });

  const locationFunction = () => {
    history.push({ pathname: "/", state: {} });
  };

  const regist = async () => {
    try {
      let { uid, password, name, email, emailAlarm, messageAlarm } = registInfo;
      let userType = location.state;
      Signup.signup(uid, password, name, email, userType as "");
    } catch (err) {
      console.log(err);
    }
  };

  const registButton = async () => {
    if (registInfo.uid !== "" && registInfo.password !== "" && registInfo.name !== "" && registInfo.email !== "" && location.state !== undefined) {
      await regist();
      // locationFunction()
    }
  };

  return (
    <div className="grid-init grid">
      <IonHeader>
        <IonItem>
          <IonItem button onClick={() => history.goBack()}>
            <IonIcon icon={chevronBack}></IonIcon>
          </IonItem>
          <IonTitle>회원가입</IonTitle>
        </IonItem>
        {/* <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" icon={chevronBack} />
          </IonButtons>
        </IonToolbar> */}
      </IonHeader>
      <div className="box-init box" style={{ height: "7.5%" }}>
        <SignUpHeaderGrid1></SignUpHeaderGrid1>
        <SignUpHeaderGrid2 tag={"● ● ○"}></SignUpHeaderGrid2>
      </div>
      <div className="box-init box" style={{ height: "85%", flexDirection: "column", justifyContent: "start" }}>
        <SignUpInputBox id="uid" name="아이디" checkValue={true} placeHolder="3-15 영문/숫자조합으로 입력" state={registInfo} setState={setRegistInfo}></SignUpInputBox>
        <SignUpInputBox id="password" name="비밀번호" checkValue={false} placeHolder="3-15 영문/숫자조합으로 입력" state={registInfo} setState={setRegistInfo}></SignUpInputBox>
        <SignUpInputBox id="passwordCheck" name="비밀번호확인" checkValue={false} placeHolder="" state={registInfo} setState={setRegistInfo}></SignUpInputBox>
        <SignUpInputBox id="name" name="이름" checkValue={false} placeHolder="한글15자, 영어 30자 까지 가능" state={registInfo} setState={setRegistInfo}></SignUpInputBox>
        <SignUpInputBox id="email" name="이메일" checkValue={true} placeHolder="" state={registInfo} setState={setRegistInfo}></SignUpInputBox>
        <div className="box-init" style={{ height: "5%", width: "90%", marginTop: "2%", justifyContent: "flex-start" }}>
          <input type="checkbox" name="" id="checkBox1" style={{ marginLeft: "1.25%" }} />
          <label htmlFor="checkBox1" style={{ color: "black", fontSize: "12px", marginLeft: "2.5%" }}>
            쿠폰/이벤트/혜택 발생 시 이메일로 알림받기(선택)
          </label>
        </div>
        <div className="box-init" style={{ height: "5%", width: "90%", marginTop: "2%", justifyContent: "flex-start" }}>
          <input type="checkbox" name="" id="checkBox2" style={{ marginLeft: "1.25%" }} />
          <label htmlFor="checkBox2" style={{ color: "black", fontSize: "12px", marginLeft: "2.5%" }}>
            쿠폰/이벤트/혜택 발생 시 카카오톡/문자로 알림받기(선택)
          </label>
        </div>
        <div className="box-init" style={{ height: "27.5%", width: "100%", marginTop: "10%", flexDirection: "column", justifyContent: "flex-start" }}>
          <button className="box-init" style={{ height: "25%", width: "65%", color: "gray", border: "none", fontSize: "20px" }} onClick={registButton}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage2;
