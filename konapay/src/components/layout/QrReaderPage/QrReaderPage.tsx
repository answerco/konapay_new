import { IonApp, IonBackButton, IonButtons, IonContent, IonHeader, IonIcon, IonItem, IonRow, IonTitle, IonToolbar } from "@ionic/react";
import { chevronBack, chevronBackOutline } from "ionicons/icons";
import React, { useState } from "react";
import { QrReader } from "react-qr-reader";
import { useHistory } from "react-router";
const QrReaderPage: React.FC = () => {
  const [data, setData] = useState("No result");
  const [isValidData, setIsValidData] = useState(false);
  const history = useHistory();

  const locationFunction = () => {
    history.goBack();
  };
  return (
    <IonApp>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/" icon={chevronBack} />
          </IonButtons>
          <IonTitle></IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <QrReader
          onResult={(result, error) => {
            if (!!result) {
              setData(result?.getText());
              setIsValidData(true);
              setTimeout(() => {
                setIsValidData(false);
              }, 2000);
            }

            if (!!error) {
              console.log(error);
            }
          }}
          constraints={{
            facingMode: "environment",
          }}
        ></QrReader>
        <p>{data}</p>
      </IonContent>
    </IonApp>
  );
};

export default QrReaderPage;
