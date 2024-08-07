import React, { useContext,useState } from "react";
import {
  Button,
  Flex,
  Image,
  Space,
  Typography,
  ConfigProvider,
  Steps,
  Card,

} from "antd";
import {
  AntDesignOutlined,
} from "@ant-design/icons";
import { css } from "@emotion/css";
//import {StepItemsArray} from '../UtilityFunctions/ConstructStepItemsArray' 
import type { StepProps } from "antd"
import {missionStatement} from '../UtilityFunctions/rawData'
import './MissionStatement.css'


const MissionStatement:React.FC = ()=>{
    const { Text, Title } = Typography;

    const [current, setCurrent] = useState(0);
    const {Paragraph} = Typography
    let stepItemsArray = missionStatement.map(({title,content})=>{
  return {title:<Button shape="round" type='default' style={{borderColor:'burlywood'}} size="large">{title}</Button>,description:<div style={{minHeight:'30rem'}}>
    
    <div style={{minHeight:'4rem'}}></div>
    <Card>
            <Title level={4}>
                {content}
            </Title> 

        </Card>
        </div>}
    })
    const typedStepsItemsArray:StepProps[] = stepItemsArray
   
    const onChange = (value: number) => {
        console.log('onChange:', value);
        setCurrent(value);
      };
      const description = 'This is a description.';
    
      const items = [
        {
          title: 'Finished',
          description,
        },
        {
          title: 'In Progress',
          description,
        },
        {
          title: 'Waiting',
          description,
        },
      ];
      
    return (
        
        <Flex justify="center" wrap={true} >
         <Flex vertical >
            <Title level={2}>Mission Statement goes here</Title>
            
            </Flex>   


        <Steps
        current={current}
        onChange={onChange}
        direction="vertical"
        items = {typedStepsItemsArray}
      />
      
      </Flex>




    )

}


export default MissionStatement