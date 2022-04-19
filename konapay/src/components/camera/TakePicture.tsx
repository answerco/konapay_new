import { Camera, CameraResultType, CameraSource } from "@capacitor/camera";

export const takePictures = async () => {
  await Camera.getPhoto({
    resultType: CameraResultType.Base64,
    source: CameraSource.Camera,
    quality: 100,
  }).catch((err) => {
    console.log(err);
  });
};
export const takePhoto = async () => {
  await Camera.getPhoto({
    quality: 90,
    allowEditing: false,
    resultType: CameraResultType.Uri,
    source: CameraSource.Photos,
  }).catch((err) => {
    console.log(err);
  });
};
