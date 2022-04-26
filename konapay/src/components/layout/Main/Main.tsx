import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  //   IonFooter,
  IonMenu,
  IonList,
  IonListHeader,
  IonMenuToggle,
  IonIcon,
  IonLabel,
  IonPage,
  IonButtons,
  IonButton,
  IonItem,
  // IonImg,
  //   IonNote,
  //   IonCardContent,
  //   IonCardTitle,
  IonCardHeader,
  IonCard,
  // IonCardSubtitle,
  //   IonBackButton,
  IonRouterLink,
  IonCardContent,
  IonText,
  // IonThumbnail,
  // useIonAlert,
  IonAlert,
} from "@ionic/react";

import React, { useEffect, useState } from "react";
// import Sidebar from "../../assets/img/sideMenu.png";
// import Myinfo from "../../assets/img/myInfo.png";
// import Setting from "../../assets/img/setting.png";
// import Home from "../../assets/img/home.png";
// import Banner from "../../assets/img/bannerImg.png";
// import MainCard from "../../assets/img/mainCard.png";
// import CardSelectBar from "../../assets/img/cardSelectBar.png";
// import FooterMenu_Home from "../../assets/img/footerMenu_home.png";
// import FooterMenu_Pay from "../../assets/img/footerMenu_pay.png";
// import FooterMenu_Benefit from "../../assets/img/footerMenu_benefit.png";

import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";
import "@ionic/react/css/core.css";
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

import {
  homeOutline,
  settingsOutline,
  personCircleOutline,
  logoUsd,
  giftOutline,
  removeOutline,
  cardOutline,
  documentTextOutline,
  searchCircleOutline,
  sendOutline,
  cashOutline,
  diamondOutline,
  chatbubblesOutline,
  alertCircleOutline,
} from "ionicons/icons";

import "./main.css";
import userInfo from "../../../model/user/userinfo";
import SideBarMenu from "../SideBarMenu/SideBarMenu";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const Main: React.FC = () => {
  const [walletAddress, setWalletAddress] = useState<string>("");
  const [viewAddress, setViewAddress] = useState<string>("");
  const [ethAmount, setEthAmount] = useState<string>("");
  const [kspcAmount, setKspcAmount] = useState<string>("");
  const [copySucess, setCopySucess] = useState<boolean>(false);

  const amountHandler = async () => {
    if (walletAddress !== "") {
      const eth = await userInfo.getkscp(walletAddress, "ETH");
      const kspc = await userInfo.getkscp(walletAddress, "KSPC");
      setEthAmount(eth.data.data);
      setKspcAmount(kspc.data.data);
    }
  };

  const getWalletAddressHandler = async () => {
    const uid = sessionStorage?.uid;
    const result = await userInfo.getUser(uid);
    const user = result.data.data;
    console.log("user : ", user);
    const walletAddress: string = user.address;
    let first = walletAddress.substring(0, 8);
    let last = walletAddress.substring(walletAddress.length - 8, walletAddress.length);
    const setAddress = `${first}...${last}`;
    setWalletAddress(user.address);
    setViewAddress(setAddress);
    console.log(viewAddress);
  };

  const addressCopy = async (e: any) => {
    console.log(walletAddress);
    let clipboardText;
    // @ts-ignore
    const writePermission = await navigator.permissions.query({ name: "clipboard-write" });
    console.log("writePermission : ", writePermission);
    if (writePermission.state == "granted") {
      clipboardText = await navigator.clipboard.writeText(walletAddress);
      setCopySucess(true);
    } else {
      // 권한 거절 'denied'
      // 권한 요청 중 'prompt'
      console.log("지갑주소 복사 실패");
    }
  };

  useEffect(() => {
    if (!sessionStorage.uid) {
      const link = document.createElement("a");
      link.href = "/login";
      document.body.appendChild(link);
      link.click();
      link.remove();
    }
  }, []);

  useEffect(() => {
    console.log(sessionStorage.uid);
    if (!sessionStorage.uid) {
      getWalletAddressHandler();
    }
  }, []);

  useEffect(() => {
    if (!sessionStorage.uid) {
      console.log("walletAddress2 : ", walletAddress);
      amountHandler();
    }
  }, [walletAddress]);

  return (
    <IonApp>
      <IonAlert
        isOpen={copySucess}
        subHeader={"지갑주소 복사"}
        message={walletAddress}
        buttons={[
          {
            text: "확인",
            handler: () => {
              setCopySucess(false);
            },
          },
        ]}
      ></IonAlert>
      <SideBarMenu></SideBarMenu>
      <IonPage className="ion-page">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start" id="main-content">
              <IonMenuToggle>
                <IonButton>
                  <IonIcon name="menu-sharp" slot="start"></IonIcon>
                </IonButton>
              </IonMenuToggle>
            </IonButtons>

            <IonButtons slot="end" id="myinfo">
              <IonRouterLink href="/signuppage1">
                <IonButton>
                  <IonIcon src={personCircleOutline}></IonIcon>
                </IonButton>
              </IonRouterLink>
            </IonButtons>

            <IonButtons slot="end" id="setting">
              <IonMenuToggle>
                <IonButton>
                  <IonIcon src={settingsOutline}></IonIcon>
                </IonButton>
              </IonMenuToggle>
            </IonButtons>

            <IonButtons slot="end" id="home">
              <IonMenuToggle>
                <IonButton>
                  <IonIcon src={homeOutline}></IonIcon>
                </IonButton>
              </IonMenuToggle>
            </IonButtons>
          </IonToolbar>
        </IonHeader>

        <IonContent className="background"></IonContent>
        <IonLabel className="bannerText">KONA PAY</IonLabel>
        <IonLabel className="bannerText2">언제 어디서든 간편 한 결제</IonLabel>

        <IonCard className="walletCard">
          <IonCardHeader>
            <IonLabel className="cardHeader">카드선택</IonLabel>
          </IonCardHeader>

          {/* <IonImg src={MainCard}></IonImg> */}
          <IonCardContent className="background">
            <IonText
              onClick={(e) => {
                addressCopy(e);
              }}
              className="card-text1 selectable"
            >
              {viewAddress}
            </IonText>
            <br />
            <IonLabel className="card-text2">ETH : {ethAmount}</IonLabel>
            <br />
            <IonLabel className="card-text3">KSPC : {kspcAmount}</IonLabel>
          </IonCardContent>

          {/* <IonCardSubtitle>
            <IonLabel className="cardSub">● ○ ○ ○</IonLabel>
          </IonCardSubtitle> */}
        </IonCard>

        <IonButton color="medium" className="pwdBtn">
          <a style={{ color: "white" }}>비밀번호</a>
        </IonButton>
        <IonRouterLink href="/scan">
          <IonLabel className="scanTopay">스캔으로 결제하세요</IonLabel>
        </IonRouterLink>

        <IonToolbar className="mainFooter" style={{ backgroundColor: "rgb(230, 230, 230)", height: "15%", paddingTop: "3%" }}>
          <IonButtons slot="start" id="home" style={{ marginLeft: "10%" }}>
            <IonMenuToggle>
              <IonButton>
                <a>
                  <IonIcon src={homeOutline}></IonIcon>
                  <div>
                    <IonLabel>홈</IonLabel>
                  </div>
                </a>
              </IonButton>
            </IonMenuToggle>
          </IonButtons>

          <IonButtons slot="start" style={{ marginLeft: "20%" }}>
            <IonButton>
              <IonRouterLink href="/payment">
                <IonIcon src={logoUsd}></IonIcon>
                <div style={{ height: "100%" }}>
                  <IonLabel>결제요청</IonLabel>
                </div>
              </IonRouterLink>
            </IonButton>
          </IonButtons>

          <IonButtons slot="start" style={{ marginLeft: "20%" }}>
            <IonMenuToggle>
              <IonButton>
                <a>
                  <IonIcon src={giftOutline}></IonIcon>
                  <div>
                    <IonLabel>혜택</IonLabel>
                  </div>
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
