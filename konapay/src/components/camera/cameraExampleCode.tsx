// import "./Layout.css";
import React, { useState } from "react";
import { IonButton, IonContent, IonHeader, IonIcon, IonPage, IonToolbar } from "@ionic/react";

// camera Test
import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";
import { camera } from "ionicons/icons";
import { takePhoto, takePictures } from "./TakePicture";
const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const Layout: React.FC = () => {
  // const takePictures = async () => {
  //   await Camera.getPhoto({
  //     resultType: CameraResultType.Base64,
  //     source: CameraSource.Camera,
  //     quality: 100,
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // };
  // const takePhoto = async () => {
  //   await Camera.getPhoto({
  //     quality: 90,
  //     allowEditing: false,
  //     resultType: CameraResultType.Uri,
  //     source: CameraSource.Photos,
  //   }).catch((err) => {
  //     console.log(err);
  //   });
  // };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ margin: "15px" }}>
        사진 가져오기
        <span>
          <IonButton
            onClick={() => {
              takePhoto();
            }}
          ></IonButton>
        </span>
      </div>
      <div style={{ margin: "15px" }}>
        사진 찍기
        <span>
          <IonButton
            onClick={() => {
              takePictures();
            }}
          ></IonButton>
        </span>
      </div>
    </div>
  );
};

export default Layout;
