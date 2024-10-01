 import React from 'react';
import { Divider, List,Col, Row, } from 'antd';
import '../style/listItem.css'
import Header from './Header';
const data = [

    
        {title:'Academic Conference Website Maintenance for MUN',
            description:'2024.09-present',
            content:'I assisted my supervisor in maintaining the academic conference website using WordPress.'

        },
    

        {title:'Personal Website',
            description:'2024.09',
            content:'A personal website using React and Ant Design, which is well-designed and responsive.'
        }
    ,
    

        {title:'Shenzhen SF technology Co., Ltd, China',
            description:'2019-2022',
            content:'Developed the Product Life-cycle Management Workbench to manage the product strategy, scheme, product listing, performance, and removal. Utilized Vue Bucket, ElementUI, Axios, and Echarts technology stack to support operational decision-making with visualized data monitoring and intelligent data recommendation.  '
        }
    
];
const Projects = () => (
  <div>
      <Header></Header>
    <div className='main'>
  <Row gutter={24}>
  <Col xs={0} sm={2} md={4} lg={6} xl={7}>
  </Col>
      <Col xs={24} sm={24} md={20} lg={18} xl={10}>
    <Divider className='listTitle' orientation="left">Projects</Divider>
    <List  className='listItem'
      header={<div></div>}
    //   footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item,index) => (
        <List.Item>
        <List.Item.Meta
        //   avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.description}
           />
         {item.content}
         {index === 2 && <p>Responsible for developing and maintaining the internal component library.</p>}
      </List.Item>
      )}
    />
      </Col>
   <Col xs={0} sm={2} md={4} lg={6} xl={7}>
   </Col>
  </Row></div></div>
);
export default Projects;