import { Row,Card} from 'antd'
import { Footer} from 'antd/es/layout/layout'
import React from 'react'
import SlideBar from '../../components/auth/Main/Slidebar/SlideBar'
import TopBar from '../../components/auth/Main/TopBar/TopBar'
import {useNavigate} from 'react-router-dom'


const { Meta } = Card;

const HomePage = () => {
  const navigate = useNavigate();

  function handleClick(key) {
    switch (key) {
      case 'new':
        navigate("/contract_items");
        break;
        case 'lease':
          navigate("/home");
        break;
      default:
        break;
    }
  }

  return (
    <div style={{display:"flex",flexDirection:"column",flex:1,height:'100vh'}}>
      <TopBar/>
      <div style={{display:"flex",flexDirection:"row",flex:1}}>
        <div >
          <SlideBar/>
        </div>
        <div >
          <Row style={{margin: '1rem' }}>
                <Card
                  hoverable
                  style={{width:200,margin:'1rem'}}
                  cover={<img alt="example" src='https://img.icons8.com/bubbles/512/add-file.png' />}
                  onClick={()=>handleClick('new')}
                  >
                    <Meta title="New Contract" description="Empty contract" />
                </Card>
                <Card
                hoverable
                style={{width: 200,margin:'1rem'}}
                cover={<img alt="example" src="https://img.icons8.com/bubbles/512/agreement.png" />}
                onClick={()=>handleClick('lease')}
                >
                <Meta title="Lease" description="Template for a rental contract" />
              </Card>
          </Row>
        </div>
      </div>    
      <Footer/>
    </div>
  )
}

export default HomePage