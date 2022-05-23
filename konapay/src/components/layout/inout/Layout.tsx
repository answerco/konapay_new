import {
  IonIcon,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
  IonRow,
  IonItem,
  IonApp,
  IonPage,
  IonContent,
  IonCard,
  IonCardContent,
  IonLabel,
  IonCol,
  IonButton,
  IonGrid,
  IonSlides,
  IonSlide,
  IonList,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  useIonViewWillEnter,
  IonFab,
  IonFabButton,
  IonModal,
  IonCardHeader,
  IonText,
  IonCardSubtitle,
  IonInput,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import { add, arrowUpCircle, qrCode, qrCodeOutline, search, toggleSharp } from "ionicons/icons";
import "./Layout.css";
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import { QrReader } from "react-qr-reader";
import userInfo from "../../../model/user/userinfo";
import Wallet from "../../../model/wallet";
import PayPassword from "../../../model/user/payPassword";
import IsUidWallet from "../../../model/user/uidWallet";
import CopyToClipboard from "react-copy-to-clipboard";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const Layout: React.FC = () => {
  const history = useHistory();
  const [tmpItem, setTmpItem] = useState<string[]>([]);
  const [isInfiniteDisabled, setInfiniteDisabled] = useState(false);
  const [qrReader, setQrReader] = useState<boolean>(false);
  const [eth, setEth] = useState<number>(0);
  const [kspc, setKspc] = useState<number>(0);
  const [address, setAddress] = useState<string>("");
  const [toAddress, setToAddress] = useState<any>("");
  const [sendPrice, setSendPrice] = useState<number>(0);
  const sessionUid = sessionStorage?.getItem("uid");
  const [present] = useIonAlert();
  const [toast, dismiss] = useIonToast();
  const [current, setCurrent] = useState(10)
  const pushRemittanceDataHandeler = async () => {
    if (address) {
      const list = await Wallet.getTransferList(address, current, current + 10)
      setTmpItem([...tmpItem, ...list.data.rows])
      setCurrent(current + 10)
    }
  };

  const loadData = (event: any) => {
    setTimeout(() => {
      pushRemittanceDataHandeler();

      event.target.complete();
    }, 500);
  };

  const [payPassword, setPayPassword] = useState<string>("");

  const isValid = async () => {
    try {
      const res = await PayPassword.payPassword(sessionStorage.uid, payPassword)
      console.log(res[0].state)
      if (res[0].state) {
        sendKscpHandler()
      }
      else {
        toast("결제 비밀번호가 틀렸습니다.", 2000)
      }
    } catch { }
  };

  const isUidValid = async () => {
    try {
      console.log(searchUid)
      const res = await IsUidWallet.isUidWallet(searchUid)
      console.log(res)
      if (res) {
        setToAddress(res.address)
        setSearchUid("")
        setSearchModal(false)
      }
      else {
        toast("존재하지 않는 사용자입니다.", 2000)
      }
    } catch { }
  };

  const sendPriceAlert = async () => {
    if (isNaN(sendPrice) || sendPrice <= 0) {
      present({
        header: "송금 실패",
        message: "금액을 올바르게 입력해주세요.",
        buttons: ["확인"],
      });
      return;
    }
    // 상대 지갑 유효성 검사 백앤드 API필요
    if (toAddress === "") {
      present({
        header: "송금 실패",
        message: "상대 주소를 확인해주세요.",
        buttons: ["확인"],
      });
      return;
    }
    present({
      header: "송금",
      message: "정말로 송금 하시겠습니까?",
      buttons: ["아니오", { text: "네", handler: () => { setPayPass(true) } }],
    });
  };

  const sendKscpHandler = () => {
    console.log("send 준비");
    console.log(sendPrice);
    console.log(toAddress)

    const result = Wallet.FromTransfer(address, "KSPC", sendPrice, toAddress);
    setPayPass(false)
    toast("전송하는데 시간이 걸릴 수 있습니다.", 3000);
    setToAddress("");
    setSendPrice(0);
  };

  // Qr reader Modal op/close
  const qrReaderHandler = () => {
    setQrReader(!qrReader);
  };
  // Qr reader Modal op/close end

  // scrollTop Logic
  const getContent = () => {
    return document.querySelector("ion-content");
  };

  const scrollToTop = () => {
    getContent()?.scrollToTop(500);
  };
  // scrollTop Logic end

  const getUserInfo = async () => {
    const uid: string = sessionUid !== null ? sessionUid : "";
    const user = await userInfo.getUser(uid);
    console.log(user);
    const { address } = user;
    const eth = await userInfo.getCoin(address, "ETH");
    const kspc = await userInfo.getCoin(address, "KSPC");
    setAddress(address);
    setEth(eth);
    setKspc(kspc);
  };

  useEffect(() => {
    getUserInfo();
  }, []);
  useEffect(() => {
    transferList();
  }, [address]);
  useIonViewWillEnter(() => {
    pushRemittanceDataHandeler();
  });

  const [payPass, setPayPass] = useState(false)
  const [searchModal, setSearchModal] = useState(false)
  const [searchUid, setSearchUid] = useState("")

  const transferList = async () => {
    if (address) {
      const list = await Wallet.getTransferList(address, 0, 10)
      console.log(list.data.rows)
      setTmpItem(list.data.rows)
    }
  }

  return (
    <IonApp>
      <IonModal isOpen={qrReader}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start" onClick={qrReaderHandler}>
              <IonBackButton disabled defaultHref="/" text={""} color="dark" />
            </IonButtons>
            <IonTitle>송금 QR</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          <IonCard>
            {/* <IonCardHeader>서비스 준비중입니다</IonCardHeader> */}
            <IonCardContent>
              <QrReader
                onResult={(result: any, error) => {
                  if (!!result) {
                    setToAddress(result.getText())
                    qrReaderHandler()
                  }

                  if (!!error) {
                    // console.log(error);
                  }
                }}
                constraints={{
                  facingMode: "environment",
                }}
              ></QrReader>
            </IonCardContent>
          </IonCard>
        </IonContent>



      </IonModal>
      <IonModal isOpen={payPass}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start" onClick={() => { setPayPass(false) }}>
              <IonBackButton disabled defaultHref="/" text={""} color="dark" />
            </IonButtons>
            <IonTitle>비밀번호</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", height: "125px", width: "95%" }}>
              <IonCard style={{ heigth: "100%", width: "100%", padding: "0 20px" }} >
                <IonInput style={{ width: "100%", height: "100%", fontSize: "200%", letterSpacing: "30px" }} inputmode="numeric" type="password" maxlength={6} onIonChange={(e: any) => setPayPassword(e.target.value)} ></IonInput>
              </IonCard>
            </div>
            <IonButton onClick={isValid}>
              비밀번호 인증
            </IonButton>
          </div>
        </IonContent>
      </IonModal>
      <IonModal isOpen={searchModal}>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start" onClick={() => { setSearchModal(false) }}>
              <IonBackButton disabled defaultHref="/" text={""} color="dark" />
            </IonButtons>
            <IonTitle>사용자 검색</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent>
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center", height: "100%", alignItems: "center" }}>
            <div style={{ display: "flex", justifyContent: "center", height: "125px", width: "95%" }}>
              <IonCard style={{ heigth: "100%", width: "100%", padding: "0 20px" }} >
                <IonInput style={{ width: "100%", height: "100%", fontSize: "200%" }} type="text" value={searchUid} onIonChange={(e: any) => setSearchUid(e.target.value)} ></IonInput>
              </IonCard>
            </div>
            <IonButton onClick={isUidValid}>
              검색
            </IonButton>
          </div>
        </IonContent>
      </IonModal>
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" text={""} color="dark" />
            </IonButtons>
            <IonTitle>송금</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {/* <IonItem>
            <IonButton slot="end" onClick={qrReaderHandler}>
              <IonLabel>QR송금</IonLabel>
              <IonIcon icon={qrCodeOutline}></IonIcon>
            </IonButton>
          </IonItem> */}
          <IonSlides>
            <IonSlide>
              <IonCard style={{ width: "100%" }}>
                {/* <p style={{ fontWeight }}></p> */}
                <IonCardContent style={{ lineHeight: "200%" }}>
                  <IonLabel style={{ fontSize: "20px" }}>{sessionUid} </IonLabel>
                  <br />
                  <IonLabel style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>{kspc.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",")} KSPC</IonLabel>
                  {/* <IonLabel style={{ fontSize: "20px" }}> 입니다</IonLabel> */}
                  <br />
                  <IonItem style={{ marginBottom: "5%" }}>
                    <IonCol>
                      <IonInput
                        value={sendPrice}
                        type="number"
                        placeholder="금액 입력"
                        style={{ textAlign: "right", marginRight: "10%" }}
                        onIonChange={(e) => setSendPrice(parseInt(e.detail.value!, 0))}
                      ></IonInput>
                      <div style={{ display: "flex", alignItems: "center" }}>
                        <IonInput value={toAddress} placeholder="지갑 주소" style={{ textAlign: "right", marginRight: "1%" }} onIonChange={(e) => setToAddress(e.detail.value)}></IonInput>
                        <IonButton onClick={qrReaderHandler} ><IonIcon src={qrCode}></IonIcon></IonButton>
                        <IonButton onClick={() => { setSearchModal(true) }} ><IonIcon src={search}></IonIcon></IonButton>
                      </div>

                    </IonCol>
                  </IonItem>
                  <IonButton style={{ marginRight: "20px" }} onClick={sendPriceAlert}>보내기</IonButton>
                  <IonButton onClick={() => history.push("/mywallet")}>받기</IonButton>
                </IonCardContent>
              </IonCard>
            </IonSlide>
            <IonSlide>
              <IonCard style={{ width: "100%" }}>
                <IonCardContent style={{ lineHeight: "200%" }}>
                  <IonLabel style={{ fontSize: "20px" }}>{sessionUid} </IonLabel>
                  <br />
                  <IonLabel style={{ textAlign: "center", fontSize: "20px", fontWeight: "bold" }}>{eth} ETH</IonLabel>
                  {/* <IonLabel style={{ fontSize: "20px" }}> 입니다</IonLabel> */}
                  <br />
                  <IonItem style={{ marginBottom: "5%" }}>
                    <IonCol>
                      <IonInput
                        onClick={() => {
                          present("서비스 준비중입니다.");
                        }}
                        placeholder="금액 입력"
                        style={{ textAlign: "right", marginRight: "10%" }}
                      ></IonInput>
                      <IonInput
                        onClick={() => {
                          present("서비스 준비중입니다.");
                        }}
                        placeholder="상대 주소 입력"
                        style={{ textAlign: "right", marginRight: "10%" }}
                      ></IonInput>
                    </IonCol>
                  </IonItem>
                  <IonButton
                    onClick={() => {
                      present("서비스 준비중입니다.");
                    }}
                  >
                    송금
                  </IonButton>
                </IonCardContent>
              </IonCard>
            </IonSlide>
          </IonSlides>

          <IonCard>
            <IonList>
              <IonGrid>
                <IonRow>
                  <IonCol>받은이</IonCol>
                  <IonCol>보낸날</IonCol>
                  <IonCol>금액</IonCol>
                  {/* <IonCol>asdasd</IonCol> */}
                </IonRow>
                {tmpItem.map((item: any) => {
                  return (
                    <CopyToClipboard text={item.toAddress}>
                      <IonRow key={item.transferIdx} onClick={() => { toast(`${item.uid} : ${item.toAddress}`, 2000) }}>
                        <IonCol style={{ maxWidth: "111px" }}>{item.uid}</IonCol>
                        <IonCol style={{ maxWidth: "111px" }}>{item.transferAt ? item.transferAt.slice(0, 10) : ""}</IonCol>
                        <IonCol style={{ maxWidth: "111px" }}>{item.amount}</IonCol>
                        {/* <IonCol>{item}</IonCol> */}
                      </IonRow>
                    </CopyToClipboard>
                  );
                })}
              </IonGrid>
            </IonList>
          </IonCard>
          <IonFab vertical="bottom" horizontal="end" slot="fixed">
            <IonFabButton onClick={scrollToTop}>
              <IonIcon icon={arrowUpCircle}></IonIcon>
            </IonFabButton>
          </IonFab>
          <IonInfiniteScroll onIonInfinite={loadData} threshold="100px" disabled={isInfiniteDisabled}>
            <IonInfiniteScrollContent loadingSpinner="bubbles" loadingText="Loading more data..."></IonInfiniteScrollContent>
          </IonInfiniteScroll>
        </IonContent>
      </IonPage>
    </IonApp >
  );
};

export default Layout;
