import { useState, useRef, useContext} from 'react';
import { useNavigate } from 'react-router-dom';

import AuthContext from '../../store/Auth-context';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from './AuthForm.module.css';

const AuthForm = () => {
  const Authctx = useContext(AuthContext);

  const navigate = useNavigate();

  const emailInputRef = useRef();
  const passwordInputRef = useRef();
  const confirmPasswordInputRef = useRef();

  const [isLogin, setIsLogin] = useState(true);
  const [loading , setLoading] = useState(false)

  const submitHandler = (e) => {
    e.preventDefault()

    const enteredEmail = emailInputRef.current.value;
    var enteredPassword = passwordInputRef.current.value;

    var enteredConfirmPassword;
    if(isLogin){
    } 
    else {    
      enteredConfirmPassword = confirmPasswordInputRef.current.value;
      if(enteredPassword !== enteredConfirmPassword){
        return toast('passwords does not match');
      };  
    }
    // console.log(enteredPassword, enteredConfirmPassword)
   
    localStorage.setItem("userEmail", enteredEmail);

    
 setLoading(true);
 let url;
    if (isLogin) {
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCq0D46LMMQdd83yquIDm-07jK4smD1MD4'
    } else {
      url = 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCq0D46LMMQdd83yquIDm-07jK4smD1MD4'
    }

    fetch(url, {
      method: 'POST',
      body: JSON.stringify({
        email: enteredEmail,
        password: enteredPassword,
        returnSecureToken : true
      }),
      headers: {
        'Content-Type' : 'application/json'
      }
    }).then(res => {
         setLoading(false);

      if (res.ok) { 
        return res.json();
      } else {
        res.json().then(data => {   // Json also return promises mi,
          let errorMessage = 'Authentication failed'
          if(data && data.error && data.error.message) {
          errorMessage = data.error.message
          }
        return toast(errorMessage);
        // throw new Error(errorMessage);
        })
      }
    })
    .then((data) => {  
      if(data){
      navigate('/home') ;
      localStorage.setItem("idToken" , data.idToken);
      Authctx.setToken(data.idToken)
      return toast('sucsess');
      }                       
    })
    .catch((err) => {
      return toast(err.message)
    })
  }
  
return (
  <>
    <section className={classes.auth}>
      <h1>{isLogin ? "Login" : "Sign Up"}</h1>
      <form onSubmit={submitHandler}>
        <div className={classes.control}>
          <label htmlFor="email">Your Email</label>
          <input
            ref={emailInputRef}
            type="email"
            id="email"
            required
          />
        </div>
        <div className={classes.control}>
          <label htmlFor="password">Your Password</label>
          <input
            ref={passwordInputRef}
            type="password"
            id="password"
            required
          />
        </div>
        {isLogin ? null : <div className={classes.control}>
          <label htmlFor="password">Confirm Password</label>
          <input
            ref={confirmPasswordInputRef}
            type="password"
            id="password"
            required
          />
        </div>}
        <div className={classes.actions}>
          {loading && <p>Sending request...</p> }
          {!loading && <button>{isLogin ? "Login" : "Create Account"}</button>}
          <button
            type="button"
            className={classes.toggle} onClick={()=> (setIsLogin(!isLogin))}>
            {isLogin ? "Create new account" : "Login with existing account"}
          </button>
        </div>
      </form>
    </section>
    <ToastContainer/>
    </>
  );
};

export default AuthForm;