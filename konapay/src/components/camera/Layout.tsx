import "./Layout.css";
import React from "react";
import { Camera, CameraOptions } from "@awesome-cordova-plugins/camera";

const meta = document.createElement("meta");
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName("head")[0].appendChild(meta);

interface ContainerProps {
  name: string;
}

const captureImage = () => {};

const Layout: React.FC = () => {
  return (
    <div className="grid-init grid">
      <p>camera Test Page</p>
    </div>
  );
};

export default Layout;
