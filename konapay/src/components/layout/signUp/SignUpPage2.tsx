import "./SignUpPageLayout.css";
import React from "react";
import Header from "./Header";
import SignUpHeaderGrid1 from "./SignUpHeaderGrid1";
import SignUpHeaderGrid2 from "./SignUpHeaderGrid2";
import SignUpTextArea from "./SignUpTextArea";
import SignUpCheckBox3 from "./SignUpCheckBox3";
import { IonRouterLink } from "@ionic/react";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const SignUpPage2: React.FC = () => {
  const locationFunction = () => {
    window.location.href = "/signuppage3";
  };
  return (
    <div className="grid-init grid">
      <div className="box-init box" style={{ height: "7.5%" }}>
        <Header name="회원가입"></Header>
      </div>
      <div className="box-init box" style={{ height: "7.5%" }}>
        <SignUpHeaderGrid1></SignUpHeaderGrid1>
        <SignUpHeaderGrid2></SignUpHeaderGrid2>
      </div>
      <div className="box-init" style={{ height: "30%" }}>
        <SignUpTextArea></SignUpTextArea>
      </div>
      <div className="box-init box" style={{ height: "55%", flexDirection: "column" }}>
        <div
          className="box-init"
          style={{
            width: "100%",

            flexDirection: "column",
            justifyContent: "flex-start",
            height: "70%",
          }}
        >
          <SignUpCheckBox3 description="일반유저"></SignUpCheckBox3>
          <SignUpCheckBox3 description="판매자"></SignUpCheckBox3>
        </div>
        <div className="box-init" style={{ height: "40%", width: "100%", flexDirection: "column", justifyContent: "flex-start" }}>
          <button className="box-init" style={{ height: "25%", width: "65%", color: "gray", border: "none" }} onClick={locationFunction}>
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage2;
