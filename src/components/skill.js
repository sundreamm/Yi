import React from 'react';
import { Card, Col, Row,Divider } from 'antd';
import Header from './Header';
import '../style/skill.css'

const Skills = () => (
  <div>
      <Header></Header>
      <div className='main skills'>
  <Row gutter={24}>
    <Col xs={0} sm={2} md={4} lg={6} xl={7}>
    </Col>
    <Col  xs={24} sm={24} md={20} lg={18} xl={10}>
    <Row gutter={16}>
      <Col span={8}>
        <Card title="Languages" bordered={false}>
          <p>Javascript | Python | Matlab</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Front End Library" bordered={false}>
        <p>Vue.js | React | Angular </p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="CSS Frameworks" bordered={false}>
        <p>Bootstrap | Ant Design | VUX</p>
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
        <Card title="Agile Development" bordered={false}>
        <p>Jira | GitHub/GitLab | Figma</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="Matlab" bordered={false}>
        <p>Bootstrap | Ant Design | VUX</p>
        </Card>
      </Col>
      <Col span={8}>
        <Card title="111" bordered={false}>
        <p>Bootstrap | Ant Design | VUX</p>
        </Card>
      </Col>
    </Row>
  </Col>
    <Col xs={0} sm={2} md={4} lg={6} xl={7}>
    </Col>
  </Row></div></div>
);
export default Skills;