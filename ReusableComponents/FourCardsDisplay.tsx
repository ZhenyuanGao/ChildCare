



import React from 'react';
import { Card, Col, Row } from 'antd';

const FourCardsDisplay: React.FC = () => (
    <>
  <Row gutter={[24,24]}>
    <Col span={12}            xl={{ flex: '100%' }}
    >
      <Card title="Card title" bordered={true} style={{borderColor:'goldenrod'}}>
        Card content
      </Card>
    </Col>
    <Col span={12}>
    <Card title="Card title" bordered={true} style={{borderColor:'goldenrod'}}>
    Card content
      </Card>
    </Col>

    <Col span={12}>
    <Card title="Card title" bordered={true} style={{borderColor:'goldenrod'}}>
    Card content
      </Card>
    </Col>
    <Col span={12}>
    <Card title="Card title" bordered={true} style={{borderColor:'goldenrod'}}>
    Card content
      </Card>
    </Col>
  </Row>
  </>
);

export default FourCardsDisplay;