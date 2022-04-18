// import "./Layout.css";
import { url } from "inspector";
import React from "react";
import KonapayLogo from "../../assets/img/KonapayLogo.png";
const SignUpHeaderGrid: React.FC = () => {
  return (
    <div
      style={{
        margin: "5%",
        // backgroundColor: "green",
        height: "100%",
        width: "100%",
        backgroundImage: `url(${KonapayLogo}) `,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "left",
        backgroundSize: "75%",
      }}
    >
      {/* <img src={KonapayLogo} alt="KonapayLogo.png" style={{ height: "30%" }} /> */}
    </div>
  );
};
export default SignUpHeaderGrid;
