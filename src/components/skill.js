import React from 'react';
import { Card, Col, Row,Divider } from 'antd';
import Header from './Header';
import '../style/skill.css'

const Skills = () => (
  <div>
      <Header></Header>
      <div className='main skills'>
  <Row gutter={24}>
    
    <Col  xs={0} sm={2} md={4} lg={6} xl={6}></Col>
    <Col  xs={24} sm={20} md={16} lg={12} xl={12}>

      <Row gutter={24}>
      {/* <Row xs={24} sm={24} md={18} lg={12} xl={12}> */}
        <Col  xs={24} sm={12} md={12} lg={8} xl={8}>
          <Card title="Languages" bordered={false}>
            <p>Javascript | Python | Matlab</p>
          </Card>
        </Col>
        <Col  xs={24} sm={12} md={12} lg={8} xl={8}>
          <Card title="Front End Library" bordered={false}>
          <p>Vue.js | React | Angular </p>
          </Card>
        </Col>
        <Col  xs={24} sm={12} md={12} lg={8} xl={8}>
          <Card title="CSS Frameworks" bordered={false}>
          <p>Bootstrap | Ant Design | VUX</p>
          </Card>
        </Col>
      {/* </Row> */}
      {/* <Divider
          variant="dotted"
          style={{
            borderColor: '#7cb305',
          }}
        >
        </Divider> */}
      {/* <Row gutter={16}> */}
        <Col  xs={24} sm={12} md={12} lg={8} xl={8}>
          <Card title="Agile Development" bordered={false}>
          <p>Jira | GitHub/GitLab | Figma</p>
          </Card>
        </Col>
        <Col  xs={24} sm={12} md={12} lg={8} xl={8}>
          <Card title="Design and User Experience (UX)" bordered={false}>
          <p>Responsive Design | Cross-Browser Compatibility</p>
          </Card>
        </Col>
        <Col  xs={24} sm={12} md={12} lg={8} xl={8}>
          <Card title="Additional Skills" bordered={false}>
          <p>API Interaction | Performance Optimization</p>
          </Card>
        </Col>
      </Row>
    </Col>

  <Col  xs={0} sm={2} md={4} lg={6} xl={6}></Col>
  </Row></div></div>
);
export default Skills;