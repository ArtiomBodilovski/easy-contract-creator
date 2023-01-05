import React ,{useEffect , useState}from 'react'
import {auth} from '../../../../firebase'
import { onAuthStateChanged ,signOut} from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import styles from "./styles.module.css";


const TopBar = () => {
    const [authUser, setAuthUser] = useState(null);
    const navigate = useNavigate();
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
  
    const userSignOut = () => {
      signOut(auth)
        .then(() => {
          console.log("sign out successful");
          navigate("/")
        })
        .catch((error) => console.log(error));
    };
  

  return (
		<div className={styles.main_container}>
			<nav className={styles.navbar}>
        <h1>Contract Creator</h1>
        {authUser ? (
            <>
              <h2 className={styles.username}>{`Hey! ${authUser.email}`}  </h2>
              <button className={styles.white_btn} onClick={userSignOut}>
                Logout
              </button>
            </>
          ) : (
            <p>Signed Out</p>
          )}
			</nav>
		</div>
	);
};
  
export default TopBar