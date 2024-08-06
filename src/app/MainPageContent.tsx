'use client'



import React,{useContext} from "react"
import { Button, Card, Divider, Flex, Image, Space, Typography,ConfigProvider, Row, Col, Dropdown } from "antd"
import {AntDesignOutlined, MenuOutlined, QuestionCircleOutlined, } from '@ant-design/icons'
import { css } from '@emotion/css'
import getTaskBarButtons from '../../UtilityFunctions/getTaskBarButtons'
import type { MenuProps } from 'antd';
import "./MainContentPage.css";

const MainPageContent:React.FC= ()=>{
    const {Text,Title} = Typography;

    const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
    const rootPrefixCls = getPrefixCls();
    const linearGradientButton = css`
      &.${rootPrefixCls}-btn-primary:not([disabled]):not(.${rootPrefixCls}-btn-dangerous) {
        border-width: 0;
  
        > span {
          position: relative;
        }
  
        &::before {
          content: '';
          background: linear-gradient(135deg, #6253E1, #04BEFE);
          position: absolute;
          inset: 0;
          opacity: 1;
          transition: all 0.3s;
          border-radius: inherit;
        }
  
        &:hover::before {
          opacity: 0;
        }
      }
    ` ;
    //const nonNullClassName: string = linearGradientButton as string;
    const SignInMessage =  `Can't wait, please let us know more about you`;
    const ChurchMessage = 'We help you start new churches that thrive, grow, and multiply';

    const TaskBarArray = [{label:"About", type:'text'},{label:"Get Involved", type:'text'},{label:"Meet Our Team", type:'text'},{label:"Fill the Form", type:'primary',color:"purple"}    ];
   //casting the menuItems
    const items:MenuProps['items'] = TaskBarArray.map((item,index) => ({
        key: index.toString(),
        label: item.label,
      })) ;


       //{getTaskBarButtons(TaskBarArray)}
return (

<Card className="container">
    <Flex justify="space-between" align="flex-start">
   <div>   
  <QuestionCircleOutlined  />
  </div>  
<div>

<div className="menu_horizontal">
{getTaskBarButtons(TaskBarArray)}
</div>
<div className="menu_outlined">
<Dropdown
    className="menu_outlined"
    menu={{
        items,
      selectable: true,
    }}
  >
    <Typography.Link>
        <MenuOutlined style={{fontSize:'large'}}/>
    </Typography.Link>
  </Dropdown>
</div>

</div>

</Flex>

<Divider plain style={{padding:"5rem"}}></Divider>
<Space size={'large'}><div></div><div></div></Space>

<Flex wrap={true} gap={'large'} justify="space-around" align="center">
<div         className="right_image_pos" style={{padding:'40px'}}>
<Image  alt="avatar"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        className="right_image_pos"
        preview={false}
        >
        </Image>
        </div>
<Flex vertical gap={'large'}  justify="flex-start"> 
   <Title level={2} style={{maxWidth:'500px'}}>{ChurchMessage}</Title>
   <ConfigProvider
      button={{
          className:linearGradientButton,
      }}
    >
      <Space>
        <Button type="primary" size="large" shape="round" icon={<AntDesignOutlined/>}>
          Start Now
        </Button>
      </Space>
    </ConfigProvider>
</Flex>

</Flex>

<div  style={{padding:"10rem"}}></div>

<Flex wrap={true} gap={'large'} justify="space-around" align="center" className="picture_horizontal">
<Flex vertical gap={'large'}  justify="flex-start"> 
    
    <Title level={2} style={{maxWidth:'500px'}}>{ChurchMessage}</Title>
    <ConfigProvider
       button={{
           className:linearGradientButton,
       }}
     >
       <Space>
         <Button type="primary" size="large" shape="round" icon={<AntDesignOutlined/>}>
           Start Now
         </Button>
       </Space>
     </ConfigProvider>
 </Flex>
<div         className="right_image_pos" style={{padding:'40px'}}>
<Image  alt="avatar"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        className="right_image_pos"
        preview={false}
        >
        </Image>
        </div>


</Flex>
<Flex wrap={true} gap={'large'} justify="space-around" align="center" className="picture_vertical">
<div         className="right_image_pos" style={{padding:'40px'}}>
<Image  alt="avatar"
        src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        className="right_image_pos"
        preview={false}
        >
        </Image>
        </div>
<Flex vertical gap={'large'}  justify="flex-start"> 
    
    <Title level={2} style={{maxWidth:'500px'}}>{ChurchMessage}</Title>
    <ConfigProvider
       button={{
           className:linearGradientButton,
       }}
     >
       <Space>
         <Button type="primary" size="large" shape="round" icon={<AntDesignOutlined/>}>
           Start Now
         </Button>
       </Space>
     </ConfigProvider>
 </Flex>



</Flex>

  </Card>

)

}


export default MainPageContent;