import React from 'react';
import { Card, Col, Row,Divider } from 'antd';
import Header from './Header';

const Skills = () => (
  <div>
      <Header></Header>
      <div className='main'>
  <Row gutter={24}>
    <Col xs={0} sm={2} md={4} lg={6} xl={7}>
    </Col>
    <Col  xs={24} sm={24} md={20} lg={18} xl={10}>
    <Row>
      <Col span={8}>
        <Card title="Javascript" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Vue" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="React" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
    <Divider
        variant="dotted"
        style={{
          borderColor: '#7cb305',
        }}
      >
      </Divider>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Python" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Matlab" bordered={false}>
          Card content
        </Card>
      </Col>
      <Col span={8}>
        <Card title="111" bordered={false}>
          Card content
        </Card>
      </Col>
    </Row>
  </Col>
    <Col xs={0} sm={2} md={4} lg={6} xl={7}>
    </Col>
  </Row></div></div>
);
export default Skills;