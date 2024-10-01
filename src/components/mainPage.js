import React from 'react';
import me from '../imgs/banner.png'
import '../style/mainPage.css'; // 从 components 目录跳到上一级再进入 style 目录

const MainPage = () => {
    
    return <div className='profileContainer'>
        <img src={me} alt='me'></img>
   </div>
    // return <div>111</div>
  
}
  
  export default MainPage;