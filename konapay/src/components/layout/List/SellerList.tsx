import {
  IonApp,
  IonBackButton,
  IonButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonGrid,
  IonHeader,
  IonIcon,
  IonImg,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonList,
  IonModal,
  IonPage,
  IonRow,
  IonText,
  IonTitle,
  IonToolbar,
  useIonViewWillEnter,
} from "@ionic/react";
import { chevronBack, closeCircle, closeOutline, closeSharp, flag, qrCodeOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import QRCode from "react-qr-code";
import axios from "axios";

import BuySellList from "../../../model/buySell/seller";

const SellerList: React.FC = () => {
  const history = useHistory();
  const [sellData, setSellData] = useState<any>([]);
  //   const [date, setDate] = useState(new Date().toDateString());
  const [productIdx, setProductIdx] = useState<number>(0);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  const [qrIsValid, setQrIsValid] = useState<boolean>(false);
  const [detailIsValid, setDetailIsValid] = useState<boolean>(false);

  const setSellDataHandler = async () => {
    const limit = sellData.length + 20;
    const offset = limit == 0 ? 0 : limit - 20;
    let _limit = limit;
    let _offset = offset;
    const sellerUid = window.sessionStorage.uid;
    let status = "";
    const sellList = await BuySellList.sellList(sellerUid, status, _limit, _offset);
    console.log(typeof sellList);
    setSellStatusFormatingHandler(sellList);
    setSellData([...sellData, ...sellList]);
  };

  const setSellStatusFormatingHandler = (sellList: any) => {
    for (let sellItem of sellList) {
      switch (sellItem[`sellStatus`]) {
        case "S":
          sellItem[`sellStatus`] = "구매요청";
          break;
        case "F":
          sellItem[`sellStatus`] = "판매완료";
          break;
        case "C":
          sellItem[`sellStatus`] = "판매취소";
          break;
        case "R":
          sellItem[`sellStatus`] = "구매요청 거절";
          break;
      }
    }
  };

  useIonViewWillEnter(() => {
    setSellDataHandler();
  });

  const openQRModal = (idx: any) => {
    setQrIsValid(true);
    setProductIdx(idx);
  };

  const openDetailModal = (idx: any) => {
    setDetailIsValid(true);
    setProductIdx(idx);
  };
  return (
    <>
      <IonModal isOpen={detailIsValid}>
        <IonContent>
          <IonHeader>
            <IonButton
              onClick={() => {
                setDetailIsValid(false);
              }}
            >
              <IonIcon icon={closeSharp}></IonIcon>
            </IonButton>
          </IonHeader>

          {/* <IonCard>
            <IonCardHeader>상품 사진</IonCardHeader>
            <IonCardContent>
              <IonImg src="https://placeimg.com/320/100/any/grayscale"></IonImg>
            </IonCardContent>
          </IonCard> */}
          <IonCard>
            <IonCardHeader>
              <IonTitle>상품 확인서</IonTitle>
            </IonCardHeader>

            {sellData
              .filter((item: any) => {
                return item[`sellIdx`] === productIdx;
              })
              .map((item: any) => {
                console.log("detail Item : ", item);
                return (
                  <IonCardContent key={item[`sellIdx`]}>
                    <IonGrid key={item[`sellIdx`]}>
                      <IonRow>
                        <IonCol>상품번호</IonCol>
                        <IonCol>{item[`sellIdx`]}</IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>판매상태</IonCol>
                        <IonCol>{item[`sellStatus`]}</IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>상품명</IonCol>
                        <IonCol>{item[`productName`]}</IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>구매자</IonCol>
                        <IonCol>{item[`buyerUid`]}</IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>판매가격</IonCol>
                        <IonCol>{item[`productPrice`]}</IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>구매일</IonCol>
                        <IonCol>{item[`buyDate`]}</IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>txHash</IonCol>
                        <IonCol>{item[`txHash`]}</IonCol>
                      </IonRow>
                    </IonGrid>
                    {item[`sellStatus`] === "구매요청" ? <IonButton>판매취소</IonButton> : <IonButton disabled>판매취소</IonButton>}
                  </IonCardContent>
                );
              })}
          </IonCard>
        </IonContent>
      </IonModal>
      <IonModal isOpen={qrIsValid} swipeToClose={true} presentingElement={undefined}>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonButton
                onClick={() => {
                  setQrIsValid(false);
                }}
              >
                <IonIcon icon={closeSharp}></IonIcon>
              </IonButton>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <QRCode value={productIdx.toString()}></QRCode>
              </IonItem>
              <IonText>{productIdx.toString()}</IonText>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonModal>
      <IonApp>
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton defaultHref="/" icon={chevronBack} />
              </IonButtons>
              <IonTitle>판매내역</IonTitle>
            </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
            {/* <IonButton onClick={() => setInfiniteDisabled(!isInfiniteDisabled)} expand="block">
            Toggle Infinite Scroll
          </IonButton> */}
            <IonList>
              <IonItem>
                <IonGrid>
                  <IonRow>
                    <IonCol size="4">판매상품</IonCol>
                    <IonCol size="3">판매상태</IonCol>
                    <IonCol size="3">판매가격</IonCol>
                    <IonCol size="2">QR</IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonList>
            <IonList>
              {
                // @ts-expect-error
                sellData.map((item) => {
                  item[`sellDate`] = item[`sellDate`].split("T")[0];

                  return (
                    <IonItem key={item[`sellIdx`]}>
                      <IonGrid>
                        <IonRow>
                          <IonCol size="4">
                            <IonText
                              onClick={() => {
                                openDetailModal(item[`sellIdx`]);
                              }}
                            >
                              {item[`productName`]}
                            </IonText>
                          </IonCol>
                          <IonCol size="3">{item[`sellStatus`]}</IonCol>
                          <IonCol size="3">{item[`productPrice`]}</IonCol>
                          <IonCol size="2">
                            {item[`sellStatus`] !== "F" ? (
                              <IonButton
                                onClick={() => {
                                  openQRModal(item[`sellIdx`]);
                                }}
                              >
                                <IonIcon icon={qrCodeOutline}></IonIcon>
                              </IonButton>
                            ) : (
                              <></>
                            )}
                          </IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonItem>
                  );
                })
              }
            </IonList>

            <IonInfiniteScroll onIonInfinite={setSellDataHandler} threshold="100px" disabled={isInfiniteDisabled}>
              <IonInfiniteScrollContent loadingSpinner="bubbles" loadingText="Loading more data..."></IonInfiniteScrollContent>
            </IonInfiniteScroll>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export default SellerList;
