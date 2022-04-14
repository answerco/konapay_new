import './MainPage.css';
import React from 'react';

const meta = document.createElement('meta');
meta.name = "viewport";
meta.content = "width=device-width, height=device-height, initial-scale=1.0, maximum-scale=1.0, user-scalable=no, viewport-fit=cover";
document.getElementsByTagName('head')[0].appendChild(meta);


const MainPage: React.FC = () => {
  return (
  <div className="grid-init grid">
    <div className="box-init box" style={{height:'30%',backgroundColor:'red'}}>
      <a>
        <a>
          <span style={{height:'10%',width:'10%',float:'right',backgroundColor:'black'}}></span>
          <span style={{height:'10%',width:'10%',float:'right',backgroundColor:'white'}}></span>
          <span style={{height:'10%',width:'10%',float:'right',backgroundColor:'yellow'}}></span>

          <span style={{height:'10%',width:'30%',float:'left',backgroundColor:'black'}}></span>

          <div style={{marginTop:'10%', marginLeft:'5%', height:'20%',width:'40%'}}>
            <a style={{fontSize:'30px',fontWeight: 'bold'}}>KONA PAY</a>
          </div>

          <div style={{marginTop:'10%', marginLeft:'5%', height:'40%',width:'60%'}}>
            <a style={{fontSize:'20px',fontWeight: 'bold'}}>언제 어디서든 간편 한 결제</a>
          </div>
        </a>

        

        
      </a>
    </div>
    <div className="box-init box" style={{height:'40%', backgroundColor:'green'}}>
      <a>
        <span style={{height:'10%',width:'20%',float:'right',backgroundColor:'black'}}><a style={{fontSize:'15px'}}>카드선택</a></span>
      </a>
      <div style={{background:'yellow',width:'',height:'70%'}}>
        <div style={{backgroundColor:'white', width:'80%',height:'100%'}}>
          카드
        </div>
      </div>
      <div style={{backgroundColor:'red', width:'20%',height:'15%', alignItems: 'center'}}>
          또옹그라미
      </div>
    </div> 
    <div className="box-init box" style={{height:'15%', backgroundColor:'blue'}}>
      <div>
        <button style={{color:'red' ,height:'5%', width:'20%',marginLeft:'40%',marginTop:'3%',borderRadius:'20px'}}>
          비밀번호
        </button>
        <div style={{color:'red' ,height:'5%', width:'40%',marginLeft:'30%',backgroundColor:'yellow'}}>
          스캔으로 결제 하세요
        </div>
      </div>      
    </div> 
    <div className="box-init box" style={{height:'15%', backgroundColor:'pink'}}>
      <span style={{backgroundColor:'white', width:'100%', height:'100%'}}>
        <span style={{backgroundColor:'red'}}>
          <a>
            ddd
          </a>
        </span>

        <span style={{marginLeft:'30%', backgroundColor:'red'}}>
          <a>
            1111111111111
          </a>
        </span>

        <span style={{marginLeft:'20%', backgroundColor:'red'}}>
          <a>
            jkadslkjlasd
          </a>
        </span>
      </span>

    </div> 
  </div>
  );
};

export default MainPage;
