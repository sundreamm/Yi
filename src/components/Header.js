import React from 'react';
// import { Button } from 'antd';
import { HomeOutlined, SolutionOutlined, MailOutlined, FundProjectionScreenOutlined,AlertOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Col, Row } from 'antd';
import '../style/headerMenu.css'


const items = [
  {
    label: (
      <Link to={"/Yi"}>
        Home
      </Link>
    ),
    key: 'Home',
    icon: <HomeOutlined />,
  },
  {
    label: (
      <Link to={"/AboutMe"}>
        About me
      </Link>
    ),
    key: 'aboutMe',
    icon: <SolutionOutlined />
  },
  {
    label: (
      <Link to={"/Projects"}>
        Projects
      </Link>),
    key: 'Projects',
    icon: <FundProjectionScreenOutlined />,
    
  },
  {
    key: 'Skills',
    label: (
      <Link to={"/Skills"}>
        Skills
      </Link>),
    icon: <AlertOutlined />,
  },
  {
    key: 'mail',
    icon: <MailOutlined />,
    label: (
      <Link to={"/Contact"}>
        Contact
      </Link>),
  },
];

const Header = () => {
  const location = useLocation();
  const [current, setCurrent] = useState('Home');

    // useEffect to update the current state when the location changes
    useEffect(() => {
      if (location.pathname === '/aboutMe') {
        console.log('aboutMe');
        setCurrent('aboutMe');
      } else if (location.pathname === '/Projects') {
        setCurrent('Projects');
      }else if (location.pathname === '/Skills') {
        setCurrent('Skills');
      }else if (location.pathname === '/Contact') {
        setCurrent('mail');
      }
    }, [location]);

  const onClick = (e) => {
    console.log('click ', e);
    setCurrent(e.key);
  };

  return <div className='headerMenu'>
  <Row gutter={24}>
   <Col xs={0} sm={2} md={4} lg={6} xl={8}>
   </Col>
   <Col xs={24} sm={24} md={20} lg={18} xl={10}>
    <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}></Menu>
  </Col>
    </Row>
  <Col xs={0} sm={2} md={4} lg={6} xl={8}>
   </Col>
    </div>
  // <row gutter={24}>
  //   <Col span={6}>
  //   </Col>
  // </row>
  // <Row gutter={24}>
    {/* <Col span={6}>
    </Col> */}
    {/* <Col span={12}>
      <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items}></Menu>
    </Col> */}
    {/* <Col span={6}>
    </Col> */}
  // </Row>;
};

export default Header;
