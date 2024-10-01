import React from 'react';
import { Card, Col, Row,Divider } from 'antd';

const Skills = () => (
    <div>
  <Row gutter={16}>
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
  </div>
);
export default Skills;