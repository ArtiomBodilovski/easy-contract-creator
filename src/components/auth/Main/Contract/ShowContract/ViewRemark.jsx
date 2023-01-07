import saveButtonStyle from "../ContractForm/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';
import React ,{ useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import styles from "../ContractForm/styles.module.css";
import { Row } from 'antd';
import {db} from '../../../../../firebase'
import { getDoc,doc,updateDoc} from "firebase/firestore";

const CreateRemark = () => {
    const location = useLocation();
    const data = location.state; 
    console.log(data)
    const navigate = useNavigate();
    const [input, setInput] = useState({remark:""});
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

    const changeHandler = (e) =>{
        const{name,value} = e.target;
        setInput((prev) => {
          return{...prev,[name]: value}
        })
    }

    const handleSaveClick =async (e)=>{
        e.preventDefault();
        console.log(input)
        const docRef = doc(db, "contracts", data.contract_id);
        await updateDoc(docRef, {
            remark:input.remark
        });
        toast.success("Remark send")
      }

    function handleBackClick() {
        navigate(data.nav);
    }

    return (
        <div className={styles.contract_container}>
            <form  className={styles.contract_form_container} onSubmit ={handleSaveClick}>
            <div style={{width:900}}>
                <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
                    <textarea
                        type="text"
                        placeholder="Give Remark"
                        name="remark"
                        id="remark"
                        defaultValue={contractData.remark}
                        className={styles.textarea}
                        onChange={changeHandler}
                    />
                </Row>
                <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <button className={styles.white_btn} onClick={()=>handleBackClick()}>Back</button>
                    <button type="submit" className={saveButtonStyle.green_btn} >Update</button>
                </Row>
                <ToastContainer/>
            </div>
        </form>
        </div>
    )
}

export default CreateRemark