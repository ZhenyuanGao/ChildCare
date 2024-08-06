'use client'

//import Header from '../app/Header'
import { Button, Card, Divider, Flex, Image, Layout, Space, Typography,ConfigProvider, Row, Col } from "antd"
import React ,{useContext}from "react"
import {AntDesignOutlined, QuestionCircleOutlined, QuestionOutlined} 
from '@ant-design/icons'
import dynamic from 'next/dynamic'
import { css ,cx} from '@emotion/css'
import SiteFooter from "./Footer"
import {FaXTwitter, FaInstagram, FaSlack, FaYoutube} from "react-icons/fa6"
import MainPageContent from "./MainPageContent"

const { Header, Footer, Sider, Content } = Layout;
const {Text,Title} = Typography;
const headerStyle: React.CSSProperties = {

 backgroundColor:'white'
};

function Homepage() {
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
  const imgStyle: React.CSSProperties = {
    display: 'block',
    maxWidth: 473,
    transform: 'rotate(10deg)', 
  border: '2px solid #000', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };
  const imgStyleRev: React.CSSProperties = {
    display: 'block',
    maxWidth: 473,
    transform: 'rotate(-10deg)', 
  border: '2px solid #000', 
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
  };
  const socials = [
		{
			title: "X (Twitter)",
			url: "",
			icon: <FaXTwitter className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />,
		},
		{
			title: "Instagram",
			url: "",
			icon: <FaInstagram className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />,
		},
		{
			title: "Slack",
			url: "",
			icon: <FaSlack className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />,
		},
		{
			title: "YouTube",
			url: "",
			icon: <FaYoutube className="text-xl md:ml-8 text-primary-500 hover:text-primary-700 transition duration-300" />,
		},
	]
  return <>
  <Layout>
  <Header style={headerStyle} >
  <Flex justify="space-between" align="flex-start">
   <div>   
   <AntDesignOutlined/>
  </div>  
<div>
{socials.map((item)=>{
return (<><Button type="text" size="large" icon={item.icon}></Button></>)
})}
</div>
</Flex>
 

  </Header>
<MainPageContent></MainPageContent>
  </Layout>

  </>
}

export default dynamic(()=> Promise.resolve(Homepage),{ssr:false})