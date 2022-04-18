import "./SignUpPageLayout.css";
import React from "react";
import Header from "./../layout/Header";
import SignUpHeaderGrid1 from "./SignUpHeaderGrid1";
import SignUpHeaderGrid2 from "./SignUpHeaderGrid2";
import SignUpTextArea from "./SignUpTextArea";
import SignUpCheckBox1 from "./SignUpCheckBox1";
import SignUpCheckBox2 from "./SignUpCheckBox2";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const SignUpPage1: React.FC = () => {
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
          <SignUpCheckBox1></SignUpCheckBox1>
          <SignUpCheckBox2 check="필수" description="서비스 이용약관 동의"></SignUpCheckBox2>
          <SignUpCheckBox2 check="필수" description="개인정보 수집 및 이용 동의"></SignUpCheckBox2>
          <SignUpCheckBox2 check="선택" description="마케팅정보 알람 동의"></SignUpCheckBox2>
        </div>
        <div className="box-init" style={{ height: "40%", width: "100%", flexDirection: "column", justifyContent: "flex-start" }}>
          <button className="box-init" style={{ height: "25%", width: "65%", color: "gray", border: "none" }}>
            다음
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage1;
