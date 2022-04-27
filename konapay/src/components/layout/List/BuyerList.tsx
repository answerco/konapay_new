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
import { chevronBack, closeSharp } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import ProductManager from "./productManager";

const BuyerList: React.FC = () => {
  const history = useHistory();

  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  const [sellData, setSellData] = useState<any>([]);
  const [productIdx, setProductIdx] = useState<number>(0);
  const [detailIsValid, setDetailIsValid] = useState<boolean>(false);
  const [rowItem, setRowItem] = useState<any[][]>();

  useEffect(() => {
    const axiosFunction = async () => {
      console.log("useEffect productIdx : ", productIdx);
      try {
        const htmlMapProductInformation = await ProductManager.getList(productIdx);

        if (htmlMapProductInformation != null) {
          setRowItem(htmlMapProductInformation);
        } else {
          throw new Error("....");
        }
      } catch (error) {
        console.log(error);
      }
    };

    axiosFunction();
  }, [detailIsValid]);
  // Axios sellListGetHandler
  /*
        로그인 이후 아이디값 sellerUid 값으로 변경 필요
  */
  const pushSellDataHandler = async () => {
    const limit = sellData.length + 20;
    const offset = limit == 0 ? 0 : limit - 20;
    const APIURL = `${process.env.REACT_APP_SERVER}/sell/list?sellerUid=${"joy"}&status=${"S"}&limit=${limit}&offset=${offset}`;
    console.log("APIURL : ", APIURL);
    const axiosOption = { withCredentials: true };

    let _limit = limit;
    let _offset = offset;
    let sellerId = "joy";
    let status = "S";

    const sellItem = await ProductManager.getSellInformation(sellerId, status, _limit, _offset);
    console.log("sellInformation : ", sellItem);
    setSellData([...sellData, ...sellItem]);
  };

  useIonViewWillEnter(() => {
    pushSellDataHandler();
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
              <IonIcon icon={closeSharp}  color='dark'></IonIcon>
            </IonButton>
          </IonHeader>

          <IonCard>
            <IonCardHeader>상품 사진</IonCardHeader>
            <IonCardContent>
              <IonImg src="https://placeimg.com/320/100/any/grayscale"></IonImg>
            </IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardHeader>
              <IonTitle>상품 확인서</IonTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonGrid>
                {detailIsValid ? (
                  rowItem?.map((item, index) => {
                    return (
                      <IonRow key={index}>
                        <IonCol size="4">{item[0]}</IonCol>
                        <IonCol>{item[1]}</IonCol>
                      </IonRow>
                    );
                  })
                ) : (
                  <IonTitle>상품을 불러오지 못했습니다.</IonTitle>
                )}
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </IonContent>
      </IonModal>
      <IonApp>
        <IonPage>
          <IonHeader>
            <IonToolbar>
              <IonButtons slot="start">
                <IonBackButton defaultHref="/"  text={''} color='dark'  />
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

            <IonInfiniteScroll onIonInfinite={pushSellDataHandler} threshold="100px" disabled={isInfiniteDisabled}>
              <IonInfiniteScrollContent loadingSpinner="bubbles" loadingText="Loading more data..."></IonInfiniteScrollContent>
            </IonInfiniteScroll>
          </IonContent>
        </IonPage>
      </IonApp>
    </>
  );
};

export default BuyerList;
