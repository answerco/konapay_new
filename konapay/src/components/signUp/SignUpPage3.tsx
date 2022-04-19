import "./SignUpPageLayout.css";
import React from "react";
import SignUpHeader from "./SignUpHeader";
import Header from "./Header";
import SignUpHeaderGrid1 from "./SignUpHeaderGrid1";
import SignUpHeaderGrid2 from "./SignUpHeaderGrid2";
import SignUpInputBox from "./SignUpInputBox";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const SignUpPage2: React.FC = () => {
  return (
    <div className="grid-init grid">
      <div className="box-init box" style={{ height: "7.5%" }}>
        <Header name="회원가입"></Header>
      </div>
      <div className="box-init box" style={{ height: "7.5%" }}>
        <SignUpHeaderGrid1></SignUpHeaderGrid1>
        <SignUpHeaderGrid2></SignUpHeaderGrid2>
      </div>
      <div className="box-init box" style={{ height: "85%", flexDirection: "column", justifyContent: "start" }}>
        <SignUpInputBox name="아이디" checkValue={true} placeHolder="3-15 영문/숫자조합으로 입력"></SignUpInputBox>
        <SignUpInputBox name="비밀번호" checkValue={false} placeHolder="3-15 영문/숫자조합으로 입력"></SignUpInputBox>
        <SignUpInputBox name="비밀번호 확인" checkValue={false} placeHolder=""></SignUpInputBox>
        <SignUpInputBox name="이름" checkValue={false} placeHolder="한글15자, 영어 30자 까지 가능"></SignUpInputBox>
        <SignUpInputBox name="이메일" checkValue={true} placeHolder=""></SignUpInputBox>
        <div className="box-init" style={{ height: "5%", width: "90%", marginTop: "2%", justifyContent: "flex-start" }}>
          <input type="checkbox" name="" id="checkBox1" style={{ marginLeft: "1.25%" }} />
          <label htmlFor="checkBox1" style={{ color: "black", fontSize: "12px", marginLeft: "2.5%" }}>
            쿠폰/이벤트/혜택 발생 시 이메일로 알림받기(선택)
          </label>
        </div>
        <div className="box-init" style={{ height: "5%", width: "90%", marginTop: "2%", justifyContent: "flex-start" }}>
          <input type="checkbox" name="" id="checkBox2" style={{ marginLeft: "1.25%" }} />
          <label htmlFor="checkBox2" style={{ color: "black", fontSize: "12px", marginLeft: "2.5%" }}>
            쿠폰/이벤트/혜택 발생 시 카카오톡/문자로 알림받기(선택)
          </label>
        </div>
        <div className="box-init" style={{ height: "27.5%", width: "100%", marginTop: "10%", flexDirection: "column", justifyContent: "flex-start" }}>
          <button className="box-init" style={{ height: "25%", width: "65%", color: "gray", border: "none", fontSize: "20px" }}>
            회원가입
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignUpPage2;
