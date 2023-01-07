import React from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import styles from "../ContractForm/styles.module.css";
import { Row } from 'antd';
import {db,auth} from '../../../../../firebase'
import { doc,getDoc} from "firebase/firestore";

const CreateRemark = () => {
    const location = useLocation();
    const data = location.state; 
    console.log(data)
    const navigate = useNavigate();
    const [contractData,setContractData]=useState({})

    useEffect(() => {
        const getContractData = async() => {
            const docRef = doc(db, "contracts", data.contract_id);
            const docSnap = await getDoc(docRef);
            if (docSnap.exists()) {
                console.log("Document data:", docSnap.data());
                setContractData(docSnap.data())
            } else 
            {
            // doc.data() will be undefined in this case
                console.log("No such document!");
            }
          }
          getContractData()
          console.log(contractData)
    },[]);

    function handleBackClick() {
        navigate(data.nav);
    }

    return (
        <div className={styles.contract_container}>
            <form  className={styles.contract_form_container}>
            <div style={{width:900}}>
                <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
                    <textarea
                     name='contract' 
                     className={styles.textarea}
                     readOnly
                     defaultValue={contractData.contract}
                     />
                </Row>
                <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <button className={styles.white_btn} onClick={()=>handleBackClick()}>Back</button>
                </Row>
            </div>
        </form>
        </div>
    )
}

export default CreateRemark