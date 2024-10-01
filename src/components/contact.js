import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { Space } from 'antd';
import '../style/contact.css'
import Header from './Header';


const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const Contact = () => (
  <div>
<Header></Header>
<div className='main'>
  <Space className='contact'>
    <IconFont type="icon-tuichu" />
    <IconFont
      type="icon-facebook"
      style={{
        color: '#1877F2',
      }}
    />
    <IconFont type="icon-twitter" />
  </Space></div></div>
);
export default Contact;