import './Layout1.css';
import React from 'react';
import { IonGrid, IonRow, IonCol, IonContent } from '@ionic/react';

const meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName('head')[0].appendChild(meta);

interface ContainerProps {
  name: string;
}

const Layout1: React.FC<ContainerProps> = () => {
  return (
    <div className="grid-init grid">
    <div className="box-init box">A</div>
    <div className="box-init box">B</div> 
    <div className="box-init box">C</div> 
    <div className="box-init box">D</div> 
    <div className="box-init box">E</div> 
    <div className="box-init box">F</div> 
  </div>
  );
};

export default Layout1;
