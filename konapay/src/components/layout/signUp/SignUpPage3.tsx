import "./SignUpPageLayout.css";
import React, { useState } from "react";

import SignUpHeaderGrid1 from "./SignUpHeaderGrid1";
import SignUpHeaderGrid2 from "./SignUpHeaderGrid2";
import SignUpInputBox from "./SignUpInputBox";
import { IonBackButton, IonButtons, IonHeader, IonIcon, IonItem, IonRouterLink, IonTitle, IonToolbar, useIonAlert, IonCheckbox, IonLabel, IonApp, IonPage, IonContent, useIonToast, IonButton, IonModal } from "@ionic/react";
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
  const [paste] = useIonAlert();
  const [present, dismiss] = useIonToast();



  const [registInfo, setRegistInfo] = useState({
    uid: "",
    password: "",
    passwordCheck: "",
    payPassword: "",
    name: "",
    email: "",
    emailAlarm: 0,
    messageAlarm: 0,
  });

  const [isDup, setIsDup] = useState({
    uid: false,
    email: false,
  });

  const locationFunction = () => {
    history.push({ pathname: "/login", state: {} });
  };

  const locationHome = () => {
    history.push({ pathname: "/", state: {} });
  };

  const regist = async () => {
    try {
      let { uid, password, name, email, payPassword, emailAlarm, messageAlarm } = registInfo;
      let userType = "B";
      let res = await Signup.signup(uid, password, name, email, userType, payPassword);
      return res;
    } catch (err) {
      // paste(err as any);
      return err;
    }
  };

  // let onlyEn = /^[A-Za-z][A-Za-z0-9]*$/;
  let regId = /^(?=.*[a-zA-z])(?=.*[0-9]).{3,15}$/;
  let regEmail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
  let korean = /^[???-???]+$/;

  const registButton = async () => {
    try {
      // if(!regId.test(registInfo.uid) || !onlyEn.test(registInfo.uid)){
      if (registInfo.uid === "") {
        throw "???????????? ????????? 3~15??? ?????? ?????? ??????????????? ?????????.";
      } else if (!isDup.uid) {
        throw "??????????????? ????????????.";
      }
      // else if(!regId.test(registInfo.password) || !onlyEn.test(registInfo.password)){
      else if (registInfo.password === "") {
        throw "??????????????? ????????? 3~15??? ?????? ?????? ??????????????? ?????????.";
      } else if (registInfo.password !== registInfo.passwordCheck) {
        throw "??????????????? ????????????.";
      } else if (registInfo.payPassword.length !== 6) {
        throw "?????????????????? 6????????? ??????????????????";
      } else if (registInfo.name === "") {
        throw "????????? ??????????????????";
      } else if (!regEmail.test(registInfo.email)) {
        throw "???????????? ??????????????????";
      } else if (!isDup.email) {
        throw "??????????????? ????????????.";
      } else {
        let res = await regist();
        if (!!res) {
          present('??????????????? ?????????????????????.', 1500)
          setTimeout(() => {
            const link = document.createElement("a");
            link.href = "/";
            document.body.appendChild(link);
            link.click();
            link.remove();
          }, 1500)
        }
      }
    } catch (err) {
      paste(err as "");
    }
  };

  const checkIsDup = async (part: string) => {
    if (part === "email" && !regEmail.test(registInfo.email)) {
      paste("???????????? ??????????????????");
      return;
      // } else if ((part === "uid" && !regId.test(registInfo.uid)) || !onlyEn.test(registInfo.uid)) {
    } else if (part === "uid" && false) {
      paste("???????????? ????????? 3~15??? ?????? ?????? ??????????????? ?????????.");
      return;
    }
    let res;
    try {
      res = await Signup[part as "uid"](registInfo[part as "uid"]);
    } catch (err) {
      res = undefined;
    }

    let text;
    if (part === "uid") {
      text = "?????????";
    } else {
      text = "?????????";
    }
    if (res) {
      setIsDup({ ...isDup, [part]: true });
      paste(`??????????????? ${text}?????????.`);
    } else {
      setIsDup({ ...isDup, [part]: false });
      paste(`????????? ???????????? ${text}?????????.`);
    }
  };

  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" text={''} color='dark' />
            </IonButtons>
            <IonTitle>????????????</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <div className="grid-init grid">
            <div className="box-init box" style={{ margin: "-3% 0" }}>
              <SignUpHeaderGrid1></SignUpHeaderGrid1>
              <SignUpHeaderGrid2 tag={"??? ???"}></SignUpHeaderGrid2>
            </div>
            <div className="box-init box" style={{ flexDirection: "column", justifyContent: "start" }}>
              <SignUpInputBox
                id="uid"
                name="?????????"
                checkValue={true}
                placeHolder="3-15 ??????/?????????????????? ??????"
                state={registInfo}
                setState={setRegistInfo}
                checkIsDup={checkIsDup}
                isDup={isDup}
              ></SignUpInputBox>
              <SignUpInputBox id="password" name="????????????" checkValue={false} placeHolder="3-15 ??????/?????????????????? ??????" state={registInfo} setState={setRegistInfo}></SignUpInputBox>
              <SignUpInputBox id="passwordCheck" name="???????????? ??????" checkValue={false} placeHolder="" state={registInfo} setState={setRegistInfo}></SignUpInputBox>
              <SignUpInputBox id="payPassword" name="?????? ????????????" checkValue={false} placeHolder="?????? ????????????" state={registInfo} setState={setRegistInfo}></SignUpInputBox>
              <SignUpInputBox id="name" name="??????" checkValue={false} placeHolder="??????15???, ?????? 30??? ?????? ??????" state={registInfo} setState={setRegistInfo}></SignUpInputBox>
              <SignUpInputBox id="email" name="?????????" checkValue={true} placeHolder="" state={registInfo} setState={setRegistInfo} checkIsDup={checkIsDup} isDup={isDup}></SignUpInputBox>

              {/* <div className="box-init" style={{ display: "flex", height: "5%", width: "100%", marginTop: "5%", justifyContent: "flex-start" }}>
                <IonItem className="signup_item" style={{ display: "flex", width: "100%" }}>
                  <IonCheckbox
                    name="personal"
                    checked={!!registInfo.emailAlarm}
                    onClick={() => {
                      setRegistInfo({ ...registInfo, emailAlarm: (registInfo.emailAlarm + 1) % 2 });
                    }}
                  />
                  <IonLabel style={{ marginLeft: "1%", fontSize: "65%" }}>??????/?????????/?????? ?????? ??? ???????????? ????????????(??????)</IonLabel>
                </IonItem>
                
              </div> */}

              {/* <div className="box-init" style={{ display: "flex", height: "5%", width: "100%", marginTop: "2%", justifyContent: "flex-start" }}>
                <IonItem className="signup_item" style={{ display: "flex", width: "100%" }}>
                  <IonCheckbox
                    name="personal"
                    checked={!!registInfo.messageAlarm}
                    onClick={() => {
                      setRegistInfo({ ...registInfo, messageAlarm: (registInfo.messageAlarm + 1) % 2 });
                    }}
                  />
                  <IonLabel style={{ marginLeft: "1%", fontSize: "65%" }}>??????/?????????/?????? ?????? ??? ????????????/????????? ????????????(??????)</IonLabel>
                </IonItem>
              </div> */}

              <div className="box-init" style={{ display: "flex", height: "70px", width: "100%", marginTop: "5%", flexDirection: "column", justifyContent: "flex-start" }}>

                <IonButton className="box-init" style={{ height: "50%", width: "65%", fontSize: "20px" }} onClick={registButton}>
                  ????????????
                </IonButton>

              </div>
            </div>
          </div>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default SignUpPage2;
