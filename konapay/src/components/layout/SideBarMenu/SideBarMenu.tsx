import React from "react";
import { IonContent, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonListHeader, IonMenu, IonMenuToggle, IonRouterLink, IonTitle, IonToolbar } from "@ionic/react";
import {
  alertCircleOutline,
  cardOutline,
  cashOutline,
  chatbubblesOutline,
  diamondOutline,
  documentTextOutline,
  logoUsd,
  logOutOutline,
  newspaperOutline,
  personCircleOutline,
  qrCodeOutline,
  receiptOutline,
  removeOutline,
  searchCircleOutline,
  sendOutline,
  settingsOutline,
  statsChart,
} from "ionicons/icons";

const SideBarMenu: React.FC = () => {
  return (
    <IonMenu content-id="main-content">
      <IonHeader>
        <IonToolbar color="light">
          <IonTitle style={{ color: "gray" }}>KONA PAY</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent content-id="main-content">
        <IonList>
          <IonListHeader>
            <a style={{ fontWeight: "bold", color: "black" }}>지갑</a>
            <IonIcon src={removeOutline}></IonIcon>
          </IonListHeader>
          <IonMenuToggle auto-hide="false">
            <IonRouterLink href="/purchasehistory">
              <IonItem button>
                <IonIcon src={cardOutline} slot="start" name="home"></IonIcon>
                <IonLabel>내지갑</IonLabel>
              </IonItem>
            </IonRouterLink>
            <IonRouterLink href="/purchasehistory">
              <IonItem button>
                <IonIcon src={newspaperOutline} slot="start" name="home"></IonIcon>
                <IonLabel>판매</IonLabel>
              </IonItem>
            </IonRouterLink>
            <IonRouterLink href="/purchasehistory">
              <IonItem button>
                <IonIcon src={receiptOutline} slot="start" name="home"></IonIcon>
                <IonLabel>판매내역</IonLabel>
              </IonItem>
            </IonRouterLink>
            <IonRouterLink href="/purchasehistory">
              <IonItem button>
                <IonIcon src={statsChart} slot="start" name="home"></IonIcon>
                <IonLabel>판매집계</IonLabel>
              </IonItem>
            </IonRouterLink>
            <IonRouterLink href="/purchasehistory">
              <IonItem button>
                <IonIcon src={qrCodeOutline} slot="start" name="home"></IonIcon>
                <IonLabel>구매</IonLabel>
              </IonItem>
            </IonRouterLink>
            <IonRouterLink href="/purchasehistory">
              <IonItem button>
                <IonIcon src={receiptOutline} slot="start" name="home"></IonIcon>
                <IonLabel>구매내역</IonLabel>
              </IonItem>
            </IonRouterLink>
            <IonItem button>
              <IonIcon src={statsChart} slot="start" name="home"></IonIcon>
              <IonLabel>구매집계</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>

        <IonList>
          <IonListHeader>
            <a style={{ fontWeight: "bold", color: "black" }}>금융</a>
            <IonIcon src={removeOutline}></IonIcon>
          </IonListHeader>
          <IonMenuToggle auto-hide="false">
            {/* <IonRouterLink href="/payment4"> */}
            <IonRouterLink href="/balanceinquiry">
              <IonItem button>
                <IonIcon src={searchCircleOutline} slot="start" name="home"></IonIcon>
                <IonLabel>매출조회</IonLabel>
              </IonItem>
            </IonRouterLink>
            <IonRouterLink href="/swap">
              <IonItem button>
                <IonIcon src={logoUsd} slot="start" name="home"></IonIcon>
                <IonLabel>환전</IonLabel>
              </IonItem>
            </IonRouterLink>
            <IonRouterLink href="/inout">
              <IonItem button>
                <IonIcon src={sendOutline} slot="start" name="home"></IonIcon>
                <IonLabel>송금</IonLabel>
              </IonItem>
            </IonRouterLink>
            <IonItem button>
              <IonIcon src={cashOutline} slot="start" name="home"></IonIcon>
              <IonLabel>적립</IonLabel>
            </IonItem>
          </IonMenuToggle>
        </IonList>

        <IonList>
          <IonListHeader>
            <a style={{ fontWeight: "bold", color: "black" }}>생활</a>
            <IonIcon src={removeOutline}></IonIcon>
          </IonListHeader>
          <IonMenuToggle auto-hide="false">
            <IonRouterLink href="/board">
              <IonItem button>
                <IonIcon src={diamondOutline} slot="start" name="home"></IonIcon>
                <IonLabel>이벤트</IonLabel>
              </IonItem>
            </IonRouterLink>
            <IonRouterLink href="/board">
              <IonItem button>
                <IonIcon src={chatbubblesOutline} slot="start" name="home"></IonIcon>
                <IonLabel>게시판</IonLabel>
              </IonItem>
            </IonRouterLink>
            <IonRouterLink href="/board">
              <IonItem button>
                <IonIcon src={chatbubblesOutline} slot="start" name="home"></IonIcon>
                <IonLabel>게시판</IonLabel>
              </IonItem>
            </IonRouterLink>
          </IonMenuToggle>
        </IonList>

        <IonList>
          <IonListHeader>
            <a style={{ fontWeight: "bold", color: "black" }}></a>
            <IonIcon src={removeOutline}></IonIcon>
          </IonListHeader>

          <IonMenuToggle auto-hide="false">
            <IonRouterLink href="/board">
              <IonItem button>
                <IonIcon src={logOutOutline} slot="start" name="home"></IonIcon>
                <IonLabel>로그아웃</IonLabel>
              </IonItem>
            </IonRouterLink>
          </IonMenuToggle>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default SideBarMenu;
