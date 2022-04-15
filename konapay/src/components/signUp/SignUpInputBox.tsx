// import "./Layout.css";
import React from "react";

interface SignUpInputBoxInterface {
  name: string;
  item: boolean;
}

const SignUpInputBox: React.FC<SignUpInputBoxInterface> = ({ name, item }) => {
  return (
    <div className="box-init inputLayout" style={{ width: "90%", flexDirection: "column", height: "12.5%", marginTop: "1.25%" }}>
      <div className="box-init" style={{ height: "50%", width: "100%" }}>
        <div className="box-init" style={{ width: "50%", height: "90%" }}>
          <p style={{ color: "black" }}>{name}</p>
        </div>
        <div className="box-init" style={{ width: "50%", height: "90%", backgroundColor: "yellowgreen" }}>
          {item ? <a href="">[중복확인]</a> : null}
        </div>
      </div>
      <div className="box-init" style={{ width: "100%", height: "50%" }}>
        <input type="text" style={{ width: "100%", height: "100%" }} />
      </div>
    </div>
  );
};
export default SignUpInputBox;
