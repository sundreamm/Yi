import React from 'react';
import '../style/graduate.css'
import academic from '../imgs/Academic.jpg'
import PSDP from '../imgs/PSDP.jpg'

const Graduate = () => {
    
    return <div className='graduate'>
        <div>
            <h1>Honors</h1>
            <p>
            Fellow of the School of Graduate Studies 2023-2024
            </p>
        </div>
        
        <div className='academicResult'>
        <h1>
            Academic performance
        </h1>
        <img src={academic} alt='academic performance'></img>
        </div>
        <h1>Publications</h1>
        <p>
        [1] Yi Li and Weimin Huang, “Assessment of Factors Influencing the Accuracy of Ocean Current Measurement by Shipborne Marine X-Band Radar”, IEEE NECEC Conference, St. John's, Canada, 2023.
        </p>
        <p>
        [2] Yi Li and Weimin Huang, “An algorithm for Ocean Current Inversion from X-band Marine Radar Images”, IGARSS 2024 - 2024 Int. Geosci. Remote Sens. Symp., Athens, Greece, 2024.
       
        </p>
        <p>
            [3] Yi Li and Weimin Huang, "Analyzing Sources of Inaccuracy in Ocean Surface Current Estimation From Shipborne Marine X-Band Radar Data", OCEANS 2024 - Halifax, Halifax, Canada, 2024. (Accepted)
        </p>
        <p>
         [4] Yi Li, Zhiding Yang and Weimin Huang, “An Improved PCS Algorithm for Ocean Current Retrieval From X-Band Radar”, Remote Sens.,2024. （The manuscript is currently under review.）
       
        </p>
        <div className='Certifications'>
            <h1>Certifications</h1>
            <img src={PSDP} alt='PSDP'></img>
        </div>
   </div>
    // return <div>111</div>
  
}
  
  export default Graduate;