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
import { chevronBack, closeSharp, personCircle, search } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import BuySellList from "../../../model/buySell/seller";

const BuyerList: React.FC = () => {
  const history = useHistory();

  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  const [buyData, setBuyData] = useState<any>([]);
  const [productIdx, setProductIdx] = useState<number>(0);
  const [detailIsValid, setDetailIsValid] = useState<boolean>(false);

  const pushBuyDataHandler = async () => {
    const limit = buyData.length + 20;
    const offset = limit == 0 ? 0 : limit - 20;
    let _limit = limit;
    let _offset = offset;
    const buyerUid = window.sessionStorage.uid;
    let status = "";
    const buyList = await BuySellList.buyList(buyerUid, status, _limit, _offset);
    setSellStatusFormatingHandler(buyList);
    console.log("buyList : ", buyList);
    setBuyData([...buyData, ...buyList]);
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

  const cancelPurchaseHandler = () => {};
  const r = () => {};

  useIonViewWillEnter(() => {
    pushBuyDataHandler();
  });

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
            {buyData
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
                        <IonCol>판매자</IonCol>
                        <IonCol>{item[`sellerUid`]}</IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>판매가격</IonCol>
                        <IonCol>{item[`productPrice`]}</IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>판매시작일</IonCol>
                        <IonCol>{item[`sellDate`]}</IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>구매일</IonCol>
                        <IonCol>{item[`buyDate`]}</IonCol>
                      </IonRow>
                      <IonRow>
                        <IonCol>txHash</IonCol>
                        <IonCol>{item[`txHash`]}</IonCol>
                      </IonRow>
                      {item[`sellStatus`] === "구매요청" ? (
                        <IonRow>
                          <IonCol>
                            <IonButton>구매취소</IonButton>
                          </IonCol>
                          <IonCol>
                            <IonButton>구매진행</IonButton>
                          </IonCol>
                        </IonRow>
                      ) : (
                        <IonRow>
                          <IonCol>
                            <IonButton disabled>구매취소</IonButton>
                          </IonCol>
                          <IonCol>
                            <IonButton disabled>구매진행</IonButton>
                          </IonCol>
                        </IonRow>
                      )}
                    </IonGrid>
                  </IonCardContent>
                );
              })}
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
              <IonTitle>구매내역</IonTitle>
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
                    <IonCol size="4">구매상품</IonCol>
                    <IonCol>구매일자</IonCol>
                    <IonCol>판매자</IonCol>
                    <IonCol>구매가격</IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
            </IonList>
            <IonList>
              {
                // @ts-expect-error
                buyData.map((item) => {
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
                          <IonCol>{item[`sellDate`]}</IonCol>
                          <IonCol>{item[`sellerUid`]}</IonCol>
                          <IonCol>{item[`productPrice`]}</IonCol>
                        </IonRow>
                      </IonGrid>
                    </IonItem>
                  );
                })
              }
            </IonList>

            <IonInfiniteScroll onIonInfinite={pushBuyDataHandler} threshold="100px" disabled={isInfiniteDisabled}>
              <IonInfiniteScrollContent loadingSpinner="bubbles" loadingText="Loading more data..."></IonInfiniteScrollContent>
            </IonInfiniteScroll>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export default BuyerList;
