import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import { Row } from 'antd';
import React, { useState ,useEffect} from 'react'
import styles from "./styles.module.css";
import {useNavigate} from 'react-router-dom'
import {db,auth} from '../../../../../firebase'
import { collection, addDoc,doc, updateDoc ,getDoc,getDocs} from "firebase/firestore"; 
import { ToastContainer, toast } from 'react-toastify';
import { onAuthStateChanged} from 'firebase/auth'
import Select from 'react-select'

const EmptyContractForm = () => {
  const navigate = useNavigate();
  const [options,setOptions]=useState(null )
  const [userEmail,setUserEmail] = useState("")
  const [input, setInput] = useState({about:"",name1:"",id1:"",name2:"",id2:"",contract:""});
  const [authUser, setAuthUser] = useState(null);
  // const currDate = new Date().toLocaleDateString();

  useEffect(()=>{
    const getUserEmails = async() => {
      var options = []
      const querySnapshot = await getDocs(collection(db, "users"));
      querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        // console.log(doc.id, " => ", doc.data());
        var temp ={value: doc.id, label: doc.id}
        options.push(temp)
      });
      setOptions(options)
    }
    getUserEmails()
  },[]);
  

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const addContractToUsers = async(id) =>{
    const docRef = doc(db, "users", authUser.email);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const my_contracts = docSnap.data().my_contracts
      my_contracts.push(id)
      await updateDoc(docRef, {
        my_contracts: my_contracts
      });
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  const sendContractToUsers = async(id) =>{
    const docRef = doc(db, "users", userEmail);
    const docSnap = await getDoc(docRef);
    if (docSnap.exists()) {
      console.log("Document data:", docSnap.data());
      const recived_contracts = docSnap.data().recived_contracts
      recived_contracts.push(id)
      await updateDoc(docRef, {
        recived_contracts: recived_contracts
      });
    } else {
      // doc.data() will be undefined in this case
      console.log("No such document!");
    }
  }

  const changeHandler = (e) =>{
    const{name,value} = e.target;
    setInput((prev) => {
      return{...prev,[name]: value}
    })
  }

   const handleSaveClick =async (e)=>{
    e.preventDefault();
    console.log(input)
    const { id }=await addDoc(collection(db, "contracts"), {
      about:input.about,
      name1: input.name1,
      id1:input.id1,
      name2:input.name2,
      id2:input.id2,
      contract:input.contract,
      contact_email: userEmail,
      creater_email:authUser.email,
      remark:""
    });
    addContractToUsers(id)
    sendContractToUsers(id)
    toast.success("Contract Created")
  }
  
  function handleCancelClick() {
    navigate("/home");
  }

  return (
    <div className={styles.contract_container}>
        <form  className={styles.contract_form_container}  onSubmit ={handleSaveClick}>
          <div style={{width:900}}>
            <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <h1>New Contract</h1>
            </Row>
            <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
            < Select
              isSearchable={false}
              options={options}
              onChange={(email)=> setUserEmail(email.value)}
              name = "contact_email"
              id = "contact_email"
            />
              <input
                type="text"
                placeholder="About"
                name="about"
                id="about"
                onChange={changeHandler}
                required
                className={styles.input}
              />
            </Row>
            <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              between
              <input
                type="text"
                placeholder="Name"
                name="name1"
                id="name1"
                onChange={changeHandler}
                required
                className={styles.input}
              />
                <input
                type="number"
                placeholder="ID"
                name="id1"
                onChange={changeHandler}
                required
                className={styles.input}
              />
            </Row >
            <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              and
              <input
                type="text"
                placeholder="Name"
                name="name2"
                onChange={changeHandler}
                required
                className={styles.input}
              />
                <input
                type="number"
                placeholder="ID"
                name="id2"
                onChange={changeHandler}
                required
                className={styles.input}
              />
            </Row >
            <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}} >
                <textarea name='contract'  className={styles.textarea} onChange={changeHandler} />
            </Row>
            <Row style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
              <button type="submit" className={styles.green_btn} >Save</button>
              <button className={styles.white_btn} onClick={handleCancelClick}>Cancel</button>
            </Row>
          </div>
      </form>
      <ToastContainer/>
    </div>
  )
}

export default EmptyContractForm