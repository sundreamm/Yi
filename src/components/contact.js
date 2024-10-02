import React from 'react';
import { createFromIconfontCN,PhoneOutlined,MailOutlined } from '@ant-design/icons';
import { Space,Col, Row , } from 'antd';
import '../style/contact.css'
import Header from './Header';


const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const Contact = () => (
  <div>
<Header></Header>
<div className='main'>
  <Row className='contact'>
    <Col xs={24} sm={12} md={12} lg={8} xl={8} className='contactItem'>
    <PhoneOutlined />
    <span>+1 7096827115</span>
    </Col>
    <Col xs={24} sm={12} md={12} lg={8} xl={8} className='contactItem'>
    <MailOutlined />
    <span>yli22@mun.ca</span>

    </Col>
    <Col xs={24} sm={12} md={12} lg={8} xl={8} className='contactItem'>
    <IconFont type="icon-facebook" />
    <span><a href='https://www.facebook.com/profile.php?id=100082456055188&mibextid=LQQJ4d'>My Facebook Link</a></span>
    </Col>
  </Row></div></div>
);
export default Contact;