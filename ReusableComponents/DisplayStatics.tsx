import React from 'react';
import type { StatisticProps } from 'antd';
import { Col, Row, Statistic } from 'antd';
import CountUp from 'react-countup';

const formatter: StatisticProps['formatter'] = (value) => (
  <CountUp end={value as number} separator="," />
);

const DisplayStatics: React.FC = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Statistic title="Active Users" value={112893} formatter={formatter} />
    </Col>
    <Col span={12}>
      <Statistic title="Totla Church Helped" value={112893} precision={2} formatter={formatter} />
    </Col>
    <Col span={12}>
      <Statistic title="Total Child Care Center Built" value={5000} precision={2} formatter={formatter} />
    </Col>
  </Row>
);

export default DisplayStatics;