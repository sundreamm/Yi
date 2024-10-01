 import React from 'react';
import { Divider, List, Typography } from 'antd';
import '../style/listItem.css'
const data = [

    
        {title:'Academic Conference Website Maintenance for MUN',
            description:'2024.09-present',
            content:'I assisted my supervisor in maintaining the academic conference website using WordPress.'

        }
    ,
    

        {title:'Shenzhen Tobo Software Co., Ltd, China',
            description:'2019-2022',
            content:'Developed the Product Life-cycle Management Workbench to manage the product strategy, scheme, product listing, performance, and removal. Utilized Vue Bucket, ElementUI, Axios, and Echarts technology stack to support operational decision-making with visualized data monitoring and intelligent data recommendation.'
        }
    
];
const Projects = () => (
  <>
    <Divider orientation="left">Projects</Divider>
    <List  className='listItem'
      header={<div></div>}
    //   footer={<div>Footer</div>}
      bordered
      dataSource={data}
      renderItem={(item) => (
        <List.Item>
        <List.Item.Meta
        //   avatar={<Avatar src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`} />}
          title={<a href="https://ant.design">{item.title}</a>}
          description={item.description}
           />
         {item.content}
      </List.Item>
      )}
    />
  </>
);
export default Projects;