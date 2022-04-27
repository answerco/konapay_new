import {
  IonApp,
  IonBackButton,
  IonButtons,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCol,
  IonContent,
  IonFooter,
  IonGrid,
  IonHeader,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonText,
  IonTextarea,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { chevronBack, heart } from "ionicons/icons";
import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router";
import Board from "../../../model/board/board";
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
  const params = useParams();

  const date = "2022-04-20T10:47:20Z";
  const count = 2;
  const [likeCount, setLikeCount] = useState(0);
  const [postCategory, setPostCategory] = useState<string>("");
  const [postUid, setPostUid] = useState<string>("");
  const [postTitle, setPostTitle] = useState<string>("");
  const [postContent, setPostContent] = useState<string>("");
  const [postUpdatedAt, setPostUpdatedAt] = useState<string>("");
  const [postView, setPostView] = useState<number>(0);
  const setBoardData = async () => {
    // @ts-ignore
    const boardIdx: number = params["boardIdx"] as number;
    console.log("boardIdx : ", boardIdx);
    const boardData = await Board.getBoard(boardIdx);
    // boardData[`postUpdatedAt`] = `${boardData[`postUpdatedAt`].split("T")[0]} ${boardData[`postUpdatedAt`].split("T")[1].split(".")[0]}`;
    console.log(boardData);
    setPostCategory(boardData?.postType);
    setPostUid(boardData?.uid);
    setPostUpdatedAt(boardData?.postUpdatedAt);
    setPostTitle(boardData?.postTitle);
    setPostContent(boardData?.postContent);
    setPostView(boardData?.view);
  };

  useEffect(() => {
    setBoardData();
  }, []);
  return (
    <IonApp>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/"  text={''} color='dark'  />
            </IonButtons>
            <IonTitle>게시판</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            <IonCardHeader>
              <IonItem>{postCategory}</IonItem>
            </IonCardHeader>
            <IonCardContent>
              <IonItem>
                <IonGrid>
                  <IonRow>
                    <div style={{ width: "60px", height: "60px", backgroundColor: "black", borderRadius: "50%" }} />
                    <IonCol>
                      <IonRow>작성자 : {postUid}</IonRow>
                      <IonRow>수정일 : {postUpdatedAt}</IonRow>
                      <IonRow>조회수 : {postView}</IonRow>
                    </IonCol>
                  </IonRow>
                </IonGrid>
              </IonItem>
              <IonItem>
                <IonInput value={postTitle} readonly></IonInput>
              </IonItem>
              <IonItem>
                <div dangerouslySetInnerHTML={{ __html: postContent }}></div>
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
                      <IonText>value={postContent}</IonText>
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
