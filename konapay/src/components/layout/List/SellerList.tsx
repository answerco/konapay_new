import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
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
  useIonAlert,
  useIonViewWillEnter,
} from "@ionic/react";
import { chevronBack, closeCircle, closeOutline, closeSharp, flag, qrCodeOutline } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import QRCode from "react-qr-code";
import axios from "axios";

const SellerList: React.FC = () => {
  const history = useHistory();
  const [sellData, setSellData] = useState<any>([]);
  //   const [date, setDate] = useState(new Date().toDateString());
  const [productIdx, setProductIdx] = useState<number>(0);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  const [qrIsValid, setQrIsValid] = useState<boolean>(false);
  const [detailIsValid, setDetailIsValid] = useState<boolean>(false);
  const [rowItem, setRowItem] = useState<any[][]>();

  // Axios sellListGetHandler
  /*
        로그인 이후 아이디값 sellerUid 값으로 변경 필요
  */
  const pushSellDataHandler = async () => {
    try {
      const limit = sellData.length + 20;
      const offset = limit == 0 ? 0 : limit - 20;
      const APIURL = `http://localhost:3200/api/sell/list?sellerUid=${"joy"}&status=${"S"}&limit=${limit}&offset=${offset}`;
      console.log("APIURL : ", APIURL);
      const axiosOption = { withCredentials: true };

      const sellInformation = await axios.get(APIURL);
      const sellItem = sellInformation.data.data.rows;
      console.log("sellInformation : ", sellItem);
      setSellData([...sellData, ...sellItem]);
    } catch (error) {
      console.error(error);
      console.trace();
    }
  };

  useEffect(() => {
    const axiosFunction = async () => {
      console.log("useEffect productIdx : ", productIdx);
      try {
        const APIURL = `http://localhost:3200/api/sell/select/${productIdx}`;
        const productInformation = await axios.get(APIURL);
        console.log("productInformation : ", productInformation);
        console.log("productInformation.status : ", productInformation.status);

        if (productInformation.status === 200) {
          const item = productInformation.data.data;
          const itemArr = Object.entries(item);
          console.log("item : ", item);
          console.log("itemArr : ", itemArr);
          item[`sellDate`] = item[`sellDate`].split("T")[0];
          const htmlMapProductInformation = [
            ["상품번호", item.sellIdx],
            ["상품명", item.productName],
            ["판매가", item.productPrice],
            ["판매자", item.buyerUid],
            ["구매자", item.sellerUid],
            ["판매상태", item.sellStatus],
            ["판매글 올린 날짜", item.sellDate],
          ];
          console.log("htmlMapProductInformation : ", htmlMapProductInformation);
          setRowItem(htmlMapProductInformation);
        }
      } catch (error) {
        console.log(error);
      }
    };

    axiosFunction();
  }, [detailIsValid]);

  useIonViewWillEnter(() => {
    pushSellDataHandler();
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

      <IonPage>
        <IonHeader>
          <IonItem>
            <IonItem button onClick={() => history.goBack()}>
              <IonIcon icon={chevronBack}></IonIcon>
            </IonItem>
            <IonTitle>판매 리스트</IonTitle>
          </IonItem>
        </IonHeader>
        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Blank</IonTitle>
            </IonToolbar>
          </IonHeader>

          {/* <IonButton onClick={() => setInfiniteDisabled(!isInfiniteDisabled)} expand="block">
            Toggle Infinite Scroll
          </IonButton> */}
          <IonList>
            <IonItem>
              <IonGrid>
                <IonRow>
                  <IonCol>판매상품</IonCol>
                  <IonCol>구매자</IonCol>
                  <IonCol>판매가격</IonCol>
                  <IonCol>QR생성</IonCol>
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
                        <IonCol>{item[`buyerUid`]}</IonCol>
                        <IonCol>{item[`productPrice`]}</IonCol>
                        <IonCol>
                          <IonButton
                            onClick={() => {
                              openQRModal(item[`sellIdx`]);
                            }}
                          >
                            <IonIcon icon={qrCodeOutline}></IonIcon>
                          </IonButton>
                        </IonCol>
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
    </>
  );
};

export default SellerList;
