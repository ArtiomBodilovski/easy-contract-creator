import React from 'react'
import SlideBar from '../../components/auth/Main/Slidebar/SlideBar'
import TopBar from '../../components/auth/Main/TopBar/TopBar'



const MyContracts = () => {
  return (
    <div>
      <TopBar/>
      <div style={{display:"flex",flexDirection:"row"}}>
        <div >
          <SlideBar/>
        </div>
        <div>
          <p>MyContract</p>
        </div>
      </div>
    </div>
  )
}

export default MyContracts