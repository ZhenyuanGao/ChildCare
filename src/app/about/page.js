import React from "react";
import Link from 'next/link';
import About from "./About";
import CustimizedHeader from "../CustomizedHeader";



const Aboutpage = ()=>{

    return (<><About></About></>)




}
/*
Page.getLayout = function getLayout(page) {
    return (
        <>
        <CustimizedHeader></CustimizedHeader>
        {page}
        </>
    )
  }

  */
export default Aboutpage