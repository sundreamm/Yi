import React from 'react';
import { HomeOutlined, SolutionOutlined, MailOutlined, FundProjectionScreenOutlined,AlertOutlined } from '@ant-design/icons';
import '../style/card.css'; // 从 components 目录跳到上一级再进入 style 目录
import { Link } from 'react-router-dom';

import { Flex, Splitter, Typography } from 'antd';
const Desc = (props) => (
  <Flex
    justify="center"
    align="center"
  >
    <Typography.Title 
      type="secondary"
      level={5}
      style={{
        whiteSpace: 'nowrap',
      }}
    >
       
       {props.text}
    </Typography.Title>
  </Flex>
);
const Card = () => (
  <Splitter 
    style={{
      height: 200,
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    }}
  >
    <Splitter.Panel collapsible className='splitPanel'>
      <Link to="/aboutMe">
      <SolutionOutlined></SolutionOutlined>
      <Desc text={'About me'}  />
      </Link>
    </Splitter.Panel>

    <Splitter.Panel className='splitPanel'
      collapsible={{
        start: true,
      }}
    >
      <Link to="/Projects">
      <FundProjectionScreenOutlined></FundProjectionScreenOutlined>
      </Link>
      <Desc text={'Projects'} />
    </Splitter.Panel>
    
    <Splitter.Panel className='splitPanel'>
      <Link to="/Skills">
    <AlertOutlined></AlertOutlined>
      </Link>
      <Desc text={'Skills'} />
    </Splitter.Panel>

    <Splitter.Panel className='splitPanel'>

    <Link to="/Contact">
    <MailOutlined></MailOutlined>
      </Link>
      <Desc text={'Contact'} />
    </Splitter.Panel>
  </Splitter>
);
export default Card;