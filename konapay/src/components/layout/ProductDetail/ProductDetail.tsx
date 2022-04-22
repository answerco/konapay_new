import "./ProductDetail.css";
import { IonApp, IonButton, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonImg, IonItem, IonPage, IonRow, IonTitle, useIonAlert } from "@ionic/react";
import axios from "axios";
import { chevronBack, chevronForward } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";

const ProductDetail: React.FC = () => {
  const history = useHistory();
  const param = useParams();
  const [present] = useIonAlert();
  const [rowItem, setRowItem] = useState<any[][]>();
  const [payload, setPayload] = useState();
  // @ts-ignore
  const { productIdx } = param;
  const purchaseConfirmation = async () => {
    const APIURL = `http://localhost:3200/api/sell/${productIdx}/update`;
    // @ts-ignore
    const item = Object.assign(payload);
    // @ts-ignore
    item.sellStatus = "F";
    console.log("payload : ", payload);
    console.log("item : ", item);
    const result = await axios.patch(APIURL, payload);
    console.log("result : ", result);
    history.push({ pathname: "/" });
  };
  useEffect(() => {
    const axiosFunction = async () => {
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
          const htmlMapProductInformation = [
            ["상품번호", item.sellIdx],
            ["상품명", item.productName],
            ["판매가", item.productPrice],
            ["판매자", item.buyerUid],
            ["구매자", item.sellerUid],
            ["판매상태", item.sellStatus],
            ["판매글 올린 날짜", item.sellDate],
          ];

          setPayload(item);
          setRowItem(htmlMapProductInformation);
        }
      } catch (error) {
        console.log(error);
      }
    };

    axiosFunction();
  }, [param]);
  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonItem className="background">
            <IonButton className="background" onClick={() => history.goBack()}>
              <IonIcon icon={chevronBack}></IonIcon>
            </IonButton>
            <IonTitle>필요할까?</IonTitle>
          </IonItem>
        </IonHeader>
        <IonContent>
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
                {rowItem?.map((item) => {
                  console.log("html item : ", item);
                  return (
                    <IonRow>
                      <IonCol size="4">{item[0]}</IonCol>
                      <IonCol>{item[1]}</IonCol>
                    </IonRow>
                  );
                })}
              </IonGrid>
            </IonCardContent>
          </IonCard>
        </IonContent>
        <IonButton
          size="large"
          expand="block"
          onClick={() => {
            present({
              cssClass: "my-css",
              header: "상품구매 확인",
              message: "구매 하시겠습니까?",
              buttons: ["취소", { text: "구매", handler: purchaseConfirmation }],
            });
          }}
        >
          구매하기
        </IonButton>
      </IonPage>
    </IonApp>
  );
};

export default ProductDetail;