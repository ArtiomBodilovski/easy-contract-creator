import React from 'react'
import SlideBar from '../../components/auth/Main/Slidebar/SlideBar'
import TopBar from '../../components/auth/Main/TopBar/TopBar'
import ResivedContractTable from '../../components/auth/Main/Contract/ShowContract/ContractTable/ResivedContractTable'


const RecivedContract = () => {
  return (
    <div>
      <TopBar/>
      <div style={{display:"flex",flexDirection:"row"}}>
        <div >
          <SlideBar/>
        </div>
        <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', height: '50vh',paddingLeft : '370px'}}>
          <ResivedContractTable/>
        </div>
      </div>
    </div>
  )
}

export default RecivedContract