import {
  IonApp,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonLabel,
  IonPage,
  IonButtons,
  IonButton,
  IonItem,
  IonBackButton,
  IonSegment,
  IonSegmentButton,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  useIonViewWillEnter,
  IonThumbnail,
  IonIcon,
} from "@ionic/react";

import React, { useState } from "react";

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
import "./Board.css";
import { chevronBack } from "ionicons/icons";
import { useHistory } from "react-router";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const Board: React.FC = () => {
  const history = useHistory();
  const [data, setData] = useState<string[]>([]);
  const pushData = () => {
    const max = data.length + 20;
    const min = max - 20;
    const newData = [];
    for (let i = min; i < max; i++) {
      newData.push("Item" + i);
    }

    setData([...data, ...newData]);
  };

  const loadData = (ev: any) => {
    setTimeout(() => {
      pushData();
      console.log("Loaded data");
      ev.target.complete();
    }, 500);
  };

  useIonViewWillEnter(() => {
    pushData();
  });

  return (
    <IonApp>
      <IonPage className="ion-page" id="main-content">
        <IonContent className="ion-padding">
          <IonHeader>
            <IonItem>
              <IonItem button onClick={() => history.push({ pathname: "/" })}>
                <IonIcon icon={chevronBack}></IonIcon>
              </IonItem>
              <IonTitle>구매내역</IonTitle>
            </IonItem>
          </IonHeader>

          <div>
            <div style={{ margin: "7% 0px", display: "flex", justifyContent: "space-between" }}>
              <div style={{ fontSize: "20px", color: "gray", fontWeight: "bold" }}>KONA PAY</div>
              <IonButton onClick={() => history.push({ pathname: "/board/write" })}>글작성</IonButton>
            </div>
            <IonItem>
              <IonSegment value="favorite" color="white">
                <IonSegmentButton value="call" className="balance">
                  <IonLabel>공지사항</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="favorite" className="balance">
                  <IonLabel>이벤트</IonLabel>
                </IonSegmentButton>
                <IonSegmentButton value="map" className="balance">
                  <IonLabel>커뮤니티</IonLabel>
                </IonSegmentButton>
              </IonSegment>
            </IonItem>

            <IonItem>
              <IonSegment className="balance" value="favorite" color="white">
                <IonSegmentButton value="call">
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
                  <IonItem
                    key={index}
                    onClick={() => {
                      history.push({ pathname: `/board/page/${item.length}`, state: {} });
                    }}
                  >
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
                    <IonButton slot="end">
                      32
                      <br />
                      댓글
                    </IonButton>
                  </IonItem>
                );
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
