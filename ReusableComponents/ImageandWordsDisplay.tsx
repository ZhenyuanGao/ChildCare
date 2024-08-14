import React, { useContext } from "react";
import {
  Button,
  Flex,
  Image,
  Space,
  Typography,
  ConfigProvider,

} from "antd";
import {
  AntDesignOutlined,
} from "@ant-design/icons";
import { css } from "@emotion/css";
import "./ImageandWordsDisplay.css";
import LeftImageDisplay from "./LeftImageDisplay";

interface ImageandWordsDisplayFormat {
  direction: string;
}

const ImageandWordsDisplay: React.FC<ImageandWordsDisplayFormat> = ({
  direction,
}) => {
  const { Text, Title } = Typography;
  const { getPrefixCls } = useContext(ConfigProvider.ConfigContext);
  const rootPrefixCls = getPrefixCls();
  const linearGradientButton = css`
    &.${rootPrefixCls}-btn-primary:not([disabled]):not(
        .${rootPrefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #6253e1, #04befe);
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
  `;
  //const nonNullClassName: string = linearGradientButton as string;
  const ChurchMessage =
    "We help you start new churches that thrive, grow, and multiply";


  if (direction === "left") {
    return (
      <LeftImageDisplay></LeftImageDisplay>
    );
  } else if(direction==='right') {
    return (
    <>
    <div className="picture_horizontal">
    <Flex wrap={true} gap={'large'} justify="space-around" align="center" >
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
    </div>
    <div className="picture_vertical">
    <Flex wrap={true} gap={'large'} justify="space-around" align="center" >
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
    </div>
    </>
    );
  }
};

export default ImageandWordsDisplay;
