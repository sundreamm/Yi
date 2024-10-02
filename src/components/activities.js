import React from 'react';
import NECEC from '../imgs/NECEC.jpg'
import me from '../imgs/me.png'
import '../style/activity.css'

const Activity = () => {
    
    return <div className='activity'>
        <div className='acItem'>
            <p>[1] IEEE NECEC Conference, St. John's, Canada, 2023</p>
            <div className='imgBox'><img src={NECEC}></img></div>
        </div>
        <div className='acItem oceans'>
            <p>[2] OCEANS 2024 - Halifax, Halifax, Canada, 2024</p>
            <div className='imgBox'><img src={me}></img></div>
        </div>
   </div>
    // return <div>111</div>
  
}
  
  export default Activity;
