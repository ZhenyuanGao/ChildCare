import React from "react";
import Link from 'next/link';

import { Layout } from "antd";
import CustimizedHeader from "../app/CustomizedHeader";

interface LayoutProps {
    children: React.ReactNode;
  }
  
  const ComponentLayout: React.FC<LayoutProps> = ({ children }) => {
    return (<>
    
    
    <Layout>

    <CustimizedHeader></CustimizedHeader>
        {children}
    
    </Layout>
    
    </>)




}


export default ComponentLayout