
'use client'

//import Header from '../app/Header'
import { Button, Flex, Layout } from "antd"
import React ,{useContext}from "react"
import {AntDesignOutlined} 
from '@ant-design/icons'
import {FaXTwitter, FaInstagram, FaSlack, FaYoutube} from "react-icons/fa6"

const { Header, Footer, Sider, Content } = Layout;
const headerStyle: React.CSSProperties = {

 backgroundColor:'white'
};



const CustimizedHeader = ()=>{

   
   
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
      ];


return (<>
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

</>)

}

export default CustimizedHeader;