import React from 'react';
// import { Button } from 'antd';
import { HomeOutlined, SolutionOutlined, MailOutlined, FundProjectionScreenOutlined,AlertOutlined } from '@ant-design/icons';
import { Menu } from 'antd';
import { icons } from 'antd/es/image/PreviewGroup';
import { useLocation, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';


const items = [
  {
    label: (
      <Link to={"/"}>
        Home
      </Link>
    ),
    key: 'Home',
    icon: <HomeOutlined />,
  },
  {
    label: (
      <Link to={"/aboutMe"}>
        About me
      </Link>
    ),
    key: 'aboutMe',
    icon: <SolutionOutlined />
  },
  {
    label: (
      <Link to={"/projects"}>
        Projects
      </Link>),
    key: 'Projects',
    icon: <FundProjectionScreenOutlined />,
    
  },
  {
    key: 'Skills',
    label: (
      <Link to={"/skills"}>
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
  return <Menu onClick={onClick} selectedKeys={[current]} mode="horizontal" items={items} />;
};





export default Header;
