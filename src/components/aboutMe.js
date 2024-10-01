import React from 'react';
import TimeLine from './timeLine';
import Graduate from './graduate';
import Volunteers from './Volunteers';
import { Collapse } from 'antd';
import "../style/aboutMe.css"

const items = [
  {
    key: '1',
    label: 'Timeline',
    children: <TimeLine></TimeLine>
  },
  {
    key: '2',
    label: 'Academic Achievements During Graduate Studies',
    children: <Graduate></Graduate>
  },
  {
    key: '3',
    label: 'Volunteers and Activities',
    children: <Volunteers></Volunteers>
  },
];
const AboutMe = () => {
    const onChange = (key) => {
        console.log(key);
      };
    return <div className='aboutMe'>  
        <Collapse items={items} defaultActiveKey={['1','2','3']} onChange={onChange} />;
        
   </div>
    // return <div>111</div>
  
}
  
  export default AboutMe;