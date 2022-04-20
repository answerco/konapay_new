import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonContent,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTextarea,
  IonTitle,
} from "@ionic/react";
import { chevronBack, star } from "ionicons/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";

const BoardWirte: React.FC = () => {
  const history = useHistory();
  const [category, setCategory] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>();
  const [image, setImage] = useState<File>();
  return (
    <IonPage>
      <IonHeader>
        <IonItem>
          <IonItem button onClick={() => history.goBack()}>
            <IonIcon icon={chevronBack}></IonIcon>
          </IonItem>
          <IonTitle>게시물 작성</IonTitle>
        </IonItem>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <IonSelect value={category} placeholder="Category Select!" onIonChange={(e) => setCategory(e.detail.value!)}>
              <IonSelectOption value="게시판">게시판1</IonSelectOption>
              <IonSelectOption value="게시판">게시판2</IonSelectOption>
            </IonSelect>
          </IonCardContent>
          <IonCardContent>
            <IonInput placeholder="Title here!" value={title} onIonChange={(e) => setTitle(e.detail.value!)}></IonInput>
          </IonCardContent>
          <IonCardContent>
            <IonTextarea rows={10} placeholder="Content here!" value={content} onIonChange={(e) => setContent(e.detail.value!)}></IonTextarea>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardContent>
            <IonButton color="success" size="default" slot="end">
              사진 등록
            </IonButton>
          </IonCardContent>
          <IonCardContent>
            <img src="" alt="img_1" />
          </IonCardContent>
        </IonCard>
        <IonList>
          <IonItem>
            <IonButton color="danger" size="default" slot="start">
              취소
            </IonButton>
            <IonButton color="success" size="default" slot="end">
              등록
            </IonButton>
          </IonItem>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default BoardWirte;
