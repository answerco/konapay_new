import "./SignUpPageLayout.css";
import React from "react";
import SignUpHeader from "./SignUpHeader";
import SignUpHeaderGrid1 from "./SignUpHeaderGrid1";
import SignUpHeaderGrid2 from "./SignUpHeaderGrid2";
import SignUpTextArea from "./SignUpTextArea";
import SignUpCheckBox1 from "./SignUpCheckBox1";
import SignUpCheckBox2 from "./SignUpCheckBox2";
import SignUpCheckBox3 from "./SignUpCheckBox3";
import SignUpInputBox from "./SignUpInputBox";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

const SignUpPage2: React.FC = () => {
  return (
    <div className="grid-init grid">
      <div className="box-init box" style={{ height: "7.5%" }}>
        <SignUpHeader></SignUpHeader>
      </div>
      <div className="box-init box" style={{ height: "7.5%" }}>
        <SignUpHeaderGrid1></SignUpHeaderGrid1>
        <SignUpHeaderGrid2></SignUpHeaderGrid2>
      </div>
      <div className="box-init box" style={{ height: "85%", flexDirection: "column", justifyContent: "start" }}>
        <SignUpInputBox name="아이디" item={true}></SignUpInputBox>
      </div>
    </div>
  );
};

export default SignUpPage2;
