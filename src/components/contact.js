import React from 'react';
import { createFromIconfontCN } from '@ant-design/icons';
import { Space } from 'antd';
import '../style/contact.css'


const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_8d5l8fzk5b87iudi.js',
});
const Contact = () => (
  <Space className='contact'>
    <IconFont type="icon-tuichu" />
    <IconFont
      type="icon-facebook"
      style={{
        color: '#1877F2',
      }}
    />
    <IconFont type="icon-twitter" />
  </Space>
);
export default Contact;