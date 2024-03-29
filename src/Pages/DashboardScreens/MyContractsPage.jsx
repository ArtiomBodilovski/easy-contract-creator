import React from 'react'
import SlideBar from '../../components/auth/Main/Slidebar/SlideBar'
import TopBar from '../../components/auth/Main/TopBar/TopBar'
import ContractTable from '../../components/auth/Main/Contract/ShowContract/ContractTable/ContractTable'


const MyContracts = () => {
  return (
    <div>
      <TopBar/>
      <div style={{display:"flex",flexDirection:"row"}}>
        <div >
          <SlideBar/>
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh',paddingLeft : '370px'}}>
          <ContractTable/>
        </div>
      </div>
    </div>
  )
}

export default MyContracts