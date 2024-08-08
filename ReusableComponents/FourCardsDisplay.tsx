



import React from 'react';
import { Card, Col, Flex, Row } from 'antd';
import './cardsDisplay.css'
const FourCardsDisplay: React.FC = () => {
const cardsArray = [{name:'Card content 1'},{name:'Card content 2'},{name:'Card content 3'},{name:'Card content 4'}]

return(  <>
<div className='grid_for_largescreen'>
  <Row gutter={[24,24]}>
    <Col span={12}            
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
  </div>
  <div className='flex_for_smallerscreen'>

  <Flex vertical gap={'5rem'}>
  {cardsArray.map((item)=>{
    return (
      <><Card title="Card title" bordered={true} style={{borderColor:'goldenrod'}} >
        {item.name}
    </Card></>
    )
  })}
  
  
  
  
  
  </Flex>

  </div>
    </>)
  
};

export default FourCardsDisplay;


/**
 * 
 *   <Flex wrap gap={'5rem'}>
  {cardsArray.map((item)=>{

    return (
      <><Card title="Card title" bordered={true} style={{borderColor:'goldenrod',maxWidth:'40rem'}} >
        {item.name}
    </Card></>
    )



  })}
  
  
  
  
  
  </Flex>
 */
/**

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
  */