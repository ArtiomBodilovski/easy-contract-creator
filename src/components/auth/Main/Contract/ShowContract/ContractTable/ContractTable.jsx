import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import {db,auth} from '../../../../../../firebase'
import { collection,getDocs} from "firebase/firestore";
import './ContractTable.css';

const ContractTable = () => {
    const navigate = useNavigate();
    const [data,setData]=useState({})

    function handleViewClick(contract_id,id) {
        navigate(`/view_contract/${id}`,
        {
          state: {contract_id:contract_id,nav:"/my_contracts"}
        });
    }

    function handleEditClick(contract_id,id) {
        navigate(`/edit_contract/${id}`,
        {
          state: {data:contract_id}
        });
    }

    function handleRemarkClick(contract_id,id) {
        navigate(`/view_remark_contract/${id}`,
        {
          state: {contract_id:contract_id,nav:"/my_contracts"}
        });
    }

    useEffect(() => {
        const getContractsData = async() => {
            var contracts = []
            const querySnapshot = await getDocs(collection(db, "contracts"));
            querySnapshot.forEach((doc) => {
                if(auth.currentUser.email === doc.data().creater_email)
                contracts.push(doc)
            });
            setData(contracts)
          }
          getContractsData()
    },[]);
    


    return (
    <div>
        <table className='styled-table'>
            <thead>
                <tr>
                    <th style={{textAlign:"center"}}>No.</th>
                    <th style={{textAlign:"center"}}>Between</th>
                    <th style={{textAlign:"center"}}>And</th>
                    <th style={{textAlign:"center"}}>Contract about</th>
                    <th style={{textAlign:"center"}}>Actions</th>
                </tr>
            </thead>
            <tbody>
                {Object.keys(data).map((id,index) =>{
                    return (
                        <tr key={id}>
                            <th scope='row'>{index+1}</th>
                            <td>{data[id].data().name1}</td>
                            <td>{data[id].data().name2}</td>
                            <td>{data[id].data().about}</td>
                            <td>
                                    <button className="btn" style={{color:"white",backgroundColor:"#008cba"}} onClick={()=>handleEditClick(data[id].id,id)}>Edit</button>
                                    <button className="btn" style={{color:"black",backgroundColor:"#e7e7e7"}}  onClick={()=>handleViewClick(data[id].id,id)}>View</button>
                                    <button className="btn" style={{color:"white",backgroundColor:"red"}}  onClick={()=>handleRemarkClick(data[id].id,id)} hidden={!data[id].data().remark.length > 0}>Remark</button>
                                    
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
    )
}

export default ContractTable