import axios from "axios";
import React, { useRef, useState } from "react"; 
import { NavLink, useNavigate } from "react-router-dom";

import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import classes from './ForgotPassword.module.css';

const ForgotPassword = () => {
    const emailRef = useRef();
    const navigate = useNavigate('');

    const [sending, setSending] = useState(false);

    const submitHandler = async() => {
        setSending(true);

        const email = emailRef.current.value;

        try {
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCq0D46LMMQdd83yquIDm-07jK4smD1MD4'
            ,{
                requestType: 'PASSWORD_RESET',
                email: email,
            });
            toast('Link send successfully');
            toast('Check your email inbox and reset password')
            alert('Check your email inbox and reset password')
            navigate('/');
        } catch(e) {
            toast(e.response.data.error.message);
           }
           setSending(false);
    };

    return (
        <>
        <div className={classes.main}>

            <div className={classes.form}>
                <label>Enter the email with which you have registerd</label>
                <input type='email' ref={emailRef} />
               {!sending && <button type='submit' onClick={submitHandler}>Send link</button>}
               {sending && <p>Sending request...</p>}
                <NavLink to="/">Login Page</NavLink>
            </div>

        </div>
        <ToastContainer/>
    </>
    );
};

export default ForgotPassword;