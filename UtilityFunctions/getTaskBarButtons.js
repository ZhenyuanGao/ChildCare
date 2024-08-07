
import React from "react";
import { Button } from "antd";

/**
 * <Button type="text" size="large">About</Button>
<Button type="text">Get Involved</Button>
<Button type="text">Meet Our Team</Button>
<Button type="primary" color="purple">Fill the Form</Button>
 */




const GetTaskBarButton = (TaskBarArray)=>{

    return (TaskBarArray.map((item)=>{
        if(item.color!==undefined){
            return (<><Button type={item.type} style={{backgroundColor:item.color}}>{item.label}</Button></>)

        }else{
            return (<><Button type={item.type} >{item.label}</Button></>)
        }


    })
    
    )





}


export default GetTaskBarButton;