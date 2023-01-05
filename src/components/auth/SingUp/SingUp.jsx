import { createUserWithEmailAndPassword } from 'firebase/auth'
import React,{useState} from 'react'
import {auth} from '../../../firebase'
import {useNavigate} from 'react-router-dom'
import styles from "./styles.module.css";

export const SingUp = () => {
    const [email,setEmail] =useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate();

    const SingUp = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth,email,password)
        .then((userCardential) =>{
            console.log(userCardential);
        })
        .catch((error)=> {
            console.log(error);
        });
    }

    function handleClick() {
        navigate("/");
    }

    return (
    <div className={styles.signup_container}>
        <div className={styles.signup_form_container}>
            <div className={styles.left}>
                <h1>Welcome Back</h1>
                    <button type="button" className={styles.white_btn} onClick={handleClick}>SingIn</button>
            </div>
            <div className={styles.right}>
                <form className={styles.form_container} onSubmit ={SingUp} >
                    <h1>Create Account</h1>

						<input
							type="email"
							placeholder="Email"
							name="email"
                            onChange={(e)=>setEmail(e.target.value)}
                            value={email}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password"
							name="password"
                            onChange={(e)=>setPassword(e.target.value)}
                            value={password}
							required
							className={styles.input}
						/>
                    <button type="submit" className={styles.green_btn}>Sing Up</button>
                </form>
            </div>
        </div>
    </div>
    )
}
export default SingUp