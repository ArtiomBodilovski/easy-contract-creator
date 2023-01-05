import { Footer } from 'antd/es/layout/layout'
import React from 'react'
import SlideBar from '../../components/auth/Main/Slidebar/SlideBar'
import TopBar from '../../components/auth/Main/TopBar/TopBar'


const HomePage = () => {
  return (
    <div style={{display:"flex",flexDirection:"column",flex:1,height:'100vh'}}>
      <TopBar/>
      <div style={{display:"flex",flexDirection:"row",flex:1}}>
        <div >
          <SlideBar/>
        </div>
        <div>
          <p>Home</p>
        </div>
      </div>    
      <Footer/>
    </div>
  )
}

export default HomePage