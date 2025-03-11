import React, { useContext, useState } from 'react'
import classes from './Signup.module.css'
import {Link, useNavigate, useLocation} from 'react-router-dom'
import { auth} from '../../Utility/firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import {DataContext} from '../../Components/DataProvider/DataProvider'
import { Type } from '../../Utility/action.type'
import {ClipLoader} from 'react-spinners'

function Auth() {
  const [email, setEmail] = useState("");
  const [password, setPassword] =useState("");
  const [error, setError] = useState("");
  const[{user}, dispatch] = useContext(DataContext)
  const [loading, setLoading] = useState(
    {signIn:false,
    signUp: false,}
  )
  const navigate = useNavigate();
  const navStateData = useLocation();
  // console.log(user)


  const authHandler = async (e)=>{
    e.preventDefault()
    if(e.target.name=="signin"){
      console.log(e.target.name);
       setLoading({ ...loading, signIn: true });
      signInWithEmailAndPassword(auth, email, password).then((userInfo)=>{console.log(userInfo);
        dispatch({
          type:Type.SET_USER, 
          user:userInfo.user
        })
         setLoading({ ...loading, signIn: false });
         navigate(navStateData?.state?.redirect || "/");
      }).catch((err)=>{
        console.log(err);
        setError(err.message);
         setLoading({ ...loading, signIn: false });
      });
    } else {
       setLoading({ ...loading, signUp: true });
      createUserWithEmailAndPassword(auth, email, password).then((userInfo) => {console.log(userInfo);
         dispatch({
           type: Type.SET_USER,
           user: userInfo.user,
         });
         setLoading({...loading, signUp: false});
         navigate(navStateData?.state?.redirect || "/");
      }).catch((err) => {
        console.log(err);
        setError(err.message)
        setLoading({ ...loading, signUp: false });
        });
    }
  };

  return (
    <section className={classes.login}>
      <div>
        <Link to="/">
          <img
            src="https://pngimg.com/uploads/amazon/amazon_PNG12.png"
            alt="Amazon Logo"
          />
        </Link>
      </div>
      <div className={classes.login_container}>
        <h1>Sign in</h1>
        {navStateData?.state?.msg && (
          <small
          style={{
            padding: "5px",
            textAlign: "center",
            color: "red",
            fontWeight: "bold",
          }}
          >
            {navStateData?.state?.msg}
          </small>
        )}
        <form>
          <div>
            <label htmlFor="email">E-mail</label>
            <br />
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <br />
          <div>
            <label htmlFor="password">Password</label>
            <br />
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <br />
          <button
            onClick={authHandler}
            type="submit"
            name="signin"
            className={classes.login_signinButton}
          >
            {loading.signIn ? <ClipLoader color="grey" /> : "sign In"} 
          </button>
          <br />
          <br />
        </form>
        <p>
          By signing your agreement to the Amazon fake clone condition of use
          and sale please see our privacy notice, our cookies notice and our
          interest-based ads notice
        </p>
        <br />
        <button
          onClick={authHandler}
          type="submit"
          name="signup"
          className={classes.login_registerButton}
        >
          {loading.signUp ? (
            <ClipLoader color="grey" />
          ) : (
            "Create your Amazon account"
          )}
          
        </button>
        {error && <p style={{color:"red"}}>{error}</p> }
      </div>
    </section>
  );
}

export default Auth