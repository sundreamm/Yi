import React from 'react';
import me from '../imgs/me2.png'
import bg from '../imgs/bg6.png'
import '../style/mainPage.css'; // 从 components 目录跳到上一级再进入 style 目录
import { Link } from 'react-router-dom';
import { Card, Col, Row,Divider } from 'antd';

const MainPage = () => {
    
    return <div className='profileContainer'>
        <div className='bg'></div>
        <div class="overlay"></div>
<div className='cardItem profile'>
    <div className='name'>
        <h1>Yi Li</h1>
        <div className='avatar'><img src={me}></img></div>
        
        </div>
        
    <p className='descrip'> <b>Master</b> of Engineering (M. Eng), Electrical Engineering,</p>
        <p className='descrip'>in Memorial University of Newfoundland</p>
        <p className='descrip'>4 years of experience as a <b>Front-End Developer</b></p>
</div>
<div className='cardItem about'>
    
    <h1>About Me</h1>
    <p>
        Experience
    </p>
    <p>
        Academic performance
    </p>
    <p>
        Volunteers
    </p>
    <p>
        Activities
    </p>
    <Link to="/AboutMe">
    <button>Read More</button>
    </Link>
</div>
<div className='cardItem card2'>
    <div className='project'>
    <h1>Project</h1>
    <Link to="/Projects">
    <button>Read More</button>
    </Link>
    </div>
    <Divider
        variant="dashed"
        style={{
          borderColor: 'rgb(158, 158, 153,0.4)',
        }}
      >
      </Divider>
    <h1>Skills</h1>
    <Link to="/Skills">
    <button>Read More</button>
    </Link>
</div>
        {/* <img src={bg} alt='bg'></img> */}

   </div>
    // return <div>111</div>
  
}
  
  export default MainPage;