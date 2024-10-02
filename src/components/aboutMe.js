import React from 'react';
import TimeLine from './timeLine';
import Graduate from './graduate';
import Volunteers from './Volunteers';
import Activity from './activities';
import { Collapse,Col, Row, } from 'antd';
import Header from './Header';
import "../style/aboutMe.css"

const items = [
  {
    key: '1',
    label: 'Experience',
    children: <TimeLine></TimeLine>
  },
  {
    key: '2',
    label: 'Academic Achievements During Graduate Studies',
    children: <Graduate></Graduate>
  },
  {
    key: '3',
    label: 'Volunteers',
    children: <Volunteers></Volunteers>
  },
  {
    key: '4',
    label: 'Activities',
    children: <Activity></Activity>
  },
];
const AboutMe = () => {
    const onChange = (key) => {
        console.log(key);
      };
    return <div>
      <Header></Header>
      <div className='main'>
        <Row gutter={24}>
    <Col xs={0} sm={2} md={2} lg={6} xl={6}>
    </Col>
      <Col xs={24} sm={20} md={20} lg={12} xl={12}>
        <div className='aboutMe'>  
            <Collapse items={items} defaultActiveKey={['1']} onChange={onChange} />
            
      </div>
      </Col>
      <Col xs={0} sm={2} md={2} lg={6} xl={6}>
     </Col>
   </Row>
   </div>
   </div>
    // return <div>111</div>
  
}
  
  export default AboutMe;