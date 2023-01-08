import saveButtonStyle from "../ContractForm/styles.module.css";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import React, { useEffect, useState } from 'react'
import {useLocation, useNavigate} from 'react-router-dom'
import styles from "../ContractForm/styles.module.css";
import { Row } from 'antd';
import {db,auth} from '../../../../../firebase'
import {collection,doc, updateDoc ,getDoc,} from "firebase/firestore";
import { ToastContainer, toast } from 'react-toastify';

const EmptyContractForm = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const {data} = location.state; 
  const [contractData,setContractData]=useState({})
  const [input, setInput] = useState({about:"",name1:"",id1:"",name2:"",id2:"",contract:""});

  useEffect(() => {
      const getContractData = async() => {
          const docRef = doc(db, "contracts", data);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
              console.log("Document data:", docSnap.data());
              setContractData(docSnap.data())
              setInput(docSnap.data())
          } else 
          {
          // doc.data() will be undefined in this case
              console.log("No such document!");
          }
        }
        getContractData()
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
    const washingtonRef = doc(db, "contracts",data);
    await updateDoc(washingtonRef, {
        about:input.about,
        name1: input.name1,
        id1:input.id1,
        name2:input.name2,
        id2:input.id2,
        contract:input.contract,
      });
    toast.success("Change was saved")
  }
  
  function handleCancelClick() {
    navigate("/my_contracts");
  }

  return (
    <div className={styles.contract_container}>
        <form  className={styles.contract_form_container}  onSubmit ={handleSaveClick}>
          <div style={{width:900}}>
            <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <input
                        type="text"
                        placeholder="About"
                        name="about"
                        id="about"
                        required
                        className={styles.input}
                        defaultValue={contractData.about}
                        onChange={changeHandler}

                    />
                    </Row>
                    <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    between
                    <input
                        type="text"
                        placeholder="Name"
                        name="name1"
                        id="name1"
                        required
                        className={styles.input}
                        defaultValue={contractData.name1}
                        onChange={changeHandler}

                    />
                        <input
                        type="number"
                        placeholder="ID"
                        name="id1"
                        required
                        className={styles.input}
                        defaultValue={contractData.id1}
                        onChange={changeHandler}

                    />
                    </Row >
                    <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    and
                    <input
                        type="text"
                        placeholder="Name"
                        name="name2"
                        required
                        className={styles.input}
                        defaultValue={contractData.name2}
                        onChange={changeHandler}

                    />
                        <input
                        type="number"
                        placeholder="ID"
                        name="id2"
                        required
                        className={styles.input}
                        defaultValue={contractData.id2}
                        onChange={changeHandler}
                    />
                    </Row >
                    <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
                        <textarea
                        name='contract' 
                        className={styles.textarea}
                        defaultValue={contractData.contract}
                        onChange={changeHandler}
                        />
                    </Row>
                    <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                        <button className={styles.white_btn} onClick={()=>handleCancelClick()}>Back</button>
                        <button type="submit" className={saveButtonStyle.green_btn} >Save</button>
                </Row>
          </div>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default EmptyContractForm