import { signInWithEmailAndPassword } from 'firebase/auth'
import React,{useState} from 'react'
import {auth} from '../../../firebase'
import {useNavigate} from 'react-router-dom'
import styles from "./styles.module.css";

export const SingIn = () => {
    const [email,setEmail] =useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate();

    const singIn = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth,email,password)
        .then((userCardential) =>{
            console.log(userCardential);
            navigate('/home')
        })
        .catch((error)=> {
            console.log(error);
        });
    }

    function handleClick() {
        navigate("/singup");
    }

  return (
    <div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
                    <form className={styles.form_container} onSubmit ={singIn} >
                        <h1>Login to Your Account</h1>
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
                        <button type="submit" className={styles.green_btn}>
							Sing In
						</button>
                    </form>
                </div>
                <div className={styles.right}>
					<h1>New Here ?</h1>
                    <button className={styles.white_btn} onClick={handleClick}>SingUp</button>
				</div>
            </div>
    </div>
  )
}

export default SingIn