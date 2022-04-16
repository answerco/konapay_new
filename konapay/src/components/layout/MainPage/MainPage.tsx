import './MainPage.css';
import React from 'react';
import Sidebar from '../../assets/img/sideMenu.png';
import Myinfo from '../../assets/img/myInfo.png';
import Setting from '../../assets/img/setting.png';
import Home from '../../assets/img/home.png';
import Banner from '../../assets/img/bannerImg.png';
import MainCard from '../../assets/img/mainCard.png';
import CardSelectBar from '../../assets/img/cardSelectBar.png';
import FooterMenu_Home from '../../assets/img/footerMenu_home.png';
import FooterMenu_Pay from '../../assets/img/footerMenu_pay.png';
import FooterMenu_Benefit from '../../assets/img/footerMenu_benefit.png';



const meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName('head')[0].appendChild(meta);


const MainPage: React.FC = () => {
  return (
  <div className="grid-init grid">
    <div className="box-init box" style={{height:'30%',backgroundColor:''}}>
      <a>
        <a>
          <span style={{height:'10%',width:'10%',float:'right'}}><img src={Home} style={{height:'80%',width:'50%'}}></img></span>
          <span style={{height:'10%',width:'10%',float:'right'}}><img src={Setting} style={{height:'80%',width:'50%'}}></img></span>
          <span style={{height:'10%',width:'10%',float:'right'}}><img src={Myinfo} style={{height:'80%',width:'50%'}}></img></span>

          <span style={{height:'10%',width:'10%',float:'left', margin:'1%'}}><img src={Sidebar} style={{height:'80%',width:'60%'}}></img></span>

          <div style={{marginTop:'10%', marginLeft:'5%', height:'20%',width:'40%' ,backgroundImage:"url('{{Banner}}')"}}>
            
            <a style={{fontSize:'30px',fontWeight: 'bold', color:'black'}}>KONA PAY</a>
          </div>

          <div style={{marginTop:'10%', marginLeft:'5%', height:'40%',width:'60%'}}>
            <a style={{fontSize:'20px',fontWeight: 'bold',color:'black'}}>언제 어디서든 간편 한 결제</a>
          </div>
        </a>

        

        
      </a>
    </div>
    <div className="box-init box" style={{height:'40%', backgroundColor:''}}>
      <a>
        <span style={{height:'10%',width:'20%',float:'right'}}><h5 style={{fontSize:'15px',fontWeight: 'bold',color:'gray' }}>지갑선택</h5></span>
      </a>
      <div style={{background:'',width:'',height:'70%'}}>
        <div style={{backgroundColor:'', width:'80%',height:'100%'}}>
          <img src={MainCard} style={{height:'100%'}}></img>
        </div>
      </div>
      <div style={{backgroundColor:'', width:'20%',height:'15%'}}>
          <img src={CardSelectBar} style={{width:'50%', height:'50%'}}></img>
      </div>
    </div> 
    <div className="box-init box" style={{height:'15%', backgroundColor:''}}>
      <div>
        <button style={{color:'red' ,height:'5%', width:'20%',marginLeft:'40%',marginTop:'3%',borderRadius:'20px',borderColor:'none'}}>
          <a style={{fontWeight: 'bold',color:'white', backgroundColor:'gray'}}>비밀번호</a>
        </button>
        <div style={{color:'red' ,height:'5%', width:'40%',marginLeft:'30%',backgroundColor:''}}>
          <h5 style={{color:'black'}}>스캔으로 결제 하세요</h5>
        </div>
      </div>      
    </div> 
    
    <div className="box-init box" style={{height:'15%', backgroundColor:'', color:''}}>
      <div style={{backgroundColor:'', width:'100%', height:'100%'}}>
        
          
          <span style={{backgroundColor:''}}>
            <a>
              <img src={FooterMenu_Home} style={{height:'30%', width:'5%'}}></img>
            </a>
          </span>

          <span style={{marginLeft:'30%', backgroundColor:''}}>
            <a>
              <img src={FooterMenu_Pay} style={{height:'30%', width:'10%'}}></img>
            </a>
          </span>

          <span style={{marginLeft:'20%', backgroundColor:''}}>
            <a>
              <img src={FooterMenu_Benefit} style={{height:'30%', width:'5%'}}></img>
            </a>
          </span>
        </div>
      

    </div> 
  </div>
  );
};

export default MainPage;
