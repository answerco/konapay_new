import { IonApp, IonCard, IonCardContent, IonCardHeader, IonCol, IonContent, IonFooter, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonRow, IonText, IonTitle } from "@ionic/react";
import { chevronBack, heart } from "ionicons/icons";
import React, { useState } from "react";
import { useHistory } from "react-router";
import Menu from "./menu";
interface BoardReadInterface {
  boderId: number | string;
  category: string;
  title: string;
  content: string;
  reply: ReplyInformationInterface;
  like: LikeInformationInterface;
}

interface ReplyInformationInterface {
  replyId: number | string;
  userId: number | string;
  replyContent: string;
}

interface LikeInformationInterface {
  boderId: number | string;
  likeCount: number;
}

// const BoardRead: React.FC<BoardReadInterface> = ({ boderId, category, content, like, reply, title }) => {
const BoardRead: React.FC = () => {
  const history = useHistory();
  const category = "test category";
  const title = "test title";
  const content = `조금 긴 글을 쓰고 싶은데 할말은 없고 퍼블리싱은 어렵고 집갈 생각하니 벌써부터 토가나오네 어휴 ,, 이거 어떻게 해야하나...조금 긴 글을 쓰고 싶은데 할말은 없고 퍼블리싱은 어렵고 집갈 생각하니 벌써부터 토가나오네 어휴 ,, 이거 어떻게 해야하나...조금 긴 글을 쓰고 싶은데 할말은 없고 퍼블리싱은 어렵고 집갈 생각하니 벌써부터 토가나오네 어휴 ,, 이거 어떻게 해야하나...조금 긴 글을 쓰고 싶은데 할말은 없고 퍼블리싱은 어렵고 집갈 생각하니 벌써부터 토가나오네 어휴 ,, 이거 어떻게 해야하나...조금 긴 글을 쓰고 싶은데 할말은 없고 퍼블리싱은 어렵고 집갈 생각하니 벌써부터 토가나오네 어휴 ,, 이거 어떻게 해야하나...조금 긴 글을 쓰고 싶은데 할말은 없고 퍼블리싱은 어렵고 집갈 생각하니 벌써부터 토가나오네 어휴 ,, 이거 어떻게 해야하나...`;
  const date = "2022-04-20T10:47:20Z";
  const count = 2;
  const [likeCount, setLikeCount] = useState(0);
  return (
    <IonApp>
      <Menu></Menu>
      <IonPage>
        <IonContent>
          <IonHeader>
            <IonItem>
              <IonItem button onClick={() => history.goBack()}>
                <IonIcon icon={chevronBack}></IonIcon>
              </IonItem>
              <IonTitle>게시판</IonTitle>
            </IonItem>
          </IonHeader>
          <IonCard>
            <IonCardHeader>
              <IonItem>{category}</IonItem>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonGrid>
                  <IonRow>
                    <div style={{ width: "60px", height: "60px", backgroundColor: "black", borderRadius: "50%" }} />
                    <IonCol>
                      <IonRow>작성자</IonRow>
                      <IonRow>{date}</IonRow>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
              <IonItem>
                <IonInput value={title} readonly></IonInput>
              </IonItem>
              <IonItem>
                {/* <IonTextarea rows={10} value={content} readonly></IonTextarea> */}
                <IonText>{content}</IonText>
              </IonItem>
            </IonCardContent>
            <IonFooter>
              <IonItem>
                <IonIcon icon={heart} color="danger" onClick={() => setLikeCount(likeCount + 1)}></IonIcon>
                <IonText>{likeCount}</IonText>
              </IonItem>
            </IonFooter>
          </IonCard>
          <IonCard>
            <IonCardHeader>답변 {count}</IonCardHeader>

            <IonCard class="뎃글 카드 시작점">
              <IonItem>
                <IonGrid>
                  <IonRow>
                    <div style={{ width: "60px", height: "60px", backgroundColor: "black", borderRadius: "50%" }} />
                    <IonCol>
                      <IonRow>작성자</IonRow>
                      <IonRow>{date}</IonRow>
                    </IonCol>
                  </IonRow>
                  <IonItem>
                    <IonCol>
                      {/* <IonTextarea autoGrow value={content} readonly></IonTextarea> */}
                      <IonText>value={content}</IonText>
                    </IonCol>
                  </IonItem>
                </IonGrid>
              </IonItem>
              <IonItem>
                <IonIcon icon={heart} color="danger" onClick={() => setLikeCount(likeCount + 1)}></IonIcon>
                <IonText>{likeCount}</IonText>
              </IonItem>
            </IonCard>
          </IonCard>
        </IonContent>
      </IonPage>
    </IonApp>
  );
};

export default BoardRead;
