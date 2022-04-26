import "./Board.css";
import { IonButton, IonButtons, IonCard, IonCardContent, IonContent, IonHeader, IonIcon, IonInput, IonItem, IonPage, IonSelect, IonSelectOption, IonTitle, useIonAlert } from "@ionic/react";
import { chevronBack, chevronForward } from "ionicons/icons";
import React, { useMemo, useRef, useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useHistory } from "react-router";
import axios from "axios";

const BoardWirte: React.FC = () => {
  const history = useHistory();
  const quillRef = useRef<ReactQuill>();
  const [present] = useIonAlert();
  const [category, setCategory] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [content, setContent] = useState<string>("");
  const [thumnail, setThumnail] = useState<string>("");
  const [imgCheck, setImgCheck] = useState<boolean>(false);

  // Axios boardUpload
  const boardUploadHandler = async () => {
    if (!category || !title || !content) {
      present({
        cssClass: "my-css",
        header: "글 등록 실패",
        message: "빈칸이 남았습니다.",
        buttons: ["확인"],
      });
      return;
    }
    try {
      const APIURL = `/api/board/post`;
      const payload = {
        uid: "",
        postType: category,
        postTitle: title,
        postContent: content,
        postThumnail: thumnail,
      };
      const axiosOption = { withCredentials: true };
      console.log(payload);
      const result = await axios.post(APIURL, payload);
      console.log("boardUpload Sucess : ", result);
      history.push({ pathname: "/board?key=c" });
    } catch (error) {
      console.error(error);
    }
  };
  // reactQuill Image HTML Text Formatting Handler
  const imageHandler = () => {
    const input: any = document.createElement("input");
    input.setAttribute("type", "file");
    input.setAttribute("accept", "image/*");
    input.click();

    input.addEventListener("change", async () => {
      const file = input.files[0];
      const formData = new FormData();
      formData.append("img", file);
      console.log("input.files : ", input.files[0]);
      console.log("file : ", file);

      try {
        const apiUrl = `${process.env.REACT_APP_SERVER}/board/img`;
        const result = await axios.post(apiUrl, formData, { headers: { "Content-Type": `multipart/form-data` } });
        console.log("result : ", result);
        console.log("result.data.IMG_URL : ", result.data.IMG_URL);

        const IMG_URL = result.data.IMG_URL;
        console.log("IMG_URL : ", IMG_URL);
        console.log("quillRef : ", quillRef.current);
        console.log("quillRef.editor : ", quillRef.current?.getEditor());
        console.log("quillRef.editor.getSelection : ", quillRef.current?.getEditor().getSelection());

        const editor = quillRef.current?.getEditor();
        const range = editor?.getSelection();
        editor?.insertEmbed(range?.index as any, "image", IMG_URL);
        if (!imgCheck) {
          setThumnail(IMG_URL);
          setImgCheck(true);
        }
      } catch {
        console.error("reactQuill IMG URL FORMATTING ERROR");
        console.trace();
      }
    });
  };

  // reactQuill Config
  const modules = useMemo(() => {
    return {
      toolbar: {
        container: [["image"], [{ header: [1, 2, 3, false] }], ["bold", "italic", "underline", "strike", "blockquote"]],
        handlers: {
          image: imageHandler,
        },
      },
    };
  }, []);
  const formats = ["header", "bold", "italic", "underline", "strike", "blockquote", "image"];

  return (
    <IonPage>
      <IonHeader>
        <IonItem>
          <IonItem button onClick={() => history.goBack()}>
            <IonIcon icon={chevronBack}></IonIcon>
          </IonItem>
          <IonIcon slot="end" icon={chevronForward}></IonIcon>
          <IonTitle>게시물 작성</IonTitle>
        </IonItem>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <IonSelect
              value={category}
              placeholder="Category Select!"
              onIonChange={(e) => {
                console.log("Category : ", e.detail.value);
                setCategory(e.detail.value!);
              }}
            >
              <IonSelectOption value="A">공지사항</IonSelectOption>
              <IonSelectOption value="E">이벤트</IonSelectOption>
              <IonSelectOption value="C">커뮤니티</IonSelectOption>
            </IonSelect>
          </IonCardContent>
          <IonCardContent>
            <IonInput
              placeholder="Title here!"
              value={title}
              onIonChange={(e) => {
                console.log("Title : ", e.detail.value);
                setTitle(e.detail.value!);
              }}
            ></IonInput>
          </IonCardContent>
          <IonCardContent>
            <ReactQuill
              ref={(element) => {
                if (element !== null) quillRef.current = element;
              }}
              modules={modules}
              formats={formats}
              value={content}
              onChange={(value) => {
                setContent(value);
                console.log("Content : ", value);
                console.log("Content : ", content);
              }}
            />
          </IonCardContent>
          <IonCardContent>
            <IonButtons>
              <IonButton
                onClick={() => {
                  history.goBack();
                }}
              >
                취소
              </IonButton>
              <IonButton onClick={boardUploadHandler}>등록</IonButton>
            </IonButtons>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default BoardWirte;
