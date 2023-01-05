import React from 'react'
import {Menu} from "antd";
import {HomeOutlined,DeliveredProcedureOutlined,AuditOutlined} from "@ant-design/icons/lib/icons"
import {useNavigate} from 'react-router-dom'

const SlideBar = () => {
  const navigate = useNavigate();
  return (
      <div >
        <Menu style={{height:'100vh'}} 
        onClick={({key})=>{
            switch (key) {
                case "dashboard":
                    navigate("/home")
                  break;
                case "my_contracts":
                    navigate("/my_contracts")
                  break;
                case "recived_contacts":
                    navigate("/home")
                  break;
                default:
                   console.log("navigate problem")
            }
        }}
        items={[
            {label:"Home",key:"dashboard",icon:<HomeOutlined/>},
            {label:"My Contracts",key:"my_contracts",icon:<DeliveredProcedureOutlined />},
            {label:"Recived Contacts",key:"recived_contacts",icon:<AuditOutlined />},
        ]}
        ></Menu>
    </div>
  )
}

export default SlideBar