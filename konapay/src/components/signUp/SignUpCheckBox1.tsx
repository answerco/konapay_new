// import "./Layout.css";
import React from "react";

const SignUpCheckBox2: React.FC = () => {
  return (
    <div
      className="box-init"
      style={{
        marginBottom: "5%",
        width: "90%",
        height: "15%",
        backgroundColor: "yellowgreen",
        justifyContent: "flex-start",
      }}
    >
      <div style={{ height: "100%", lineHeight: "100%", backgroundColor: "purple", marginLeft: "2.5%", marginRight: "2.5%" }}>
        <input type="checkbox" id="모두" />
      </div>
      <div>
        <label htmlFor="모두" style={{ fontSize: "20px" }}>
          모두 동의하기
        </label>
      </div>
    </div>
  );
};
export default SignUpCheckBox2;
