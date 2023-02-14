import React, { useState } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from "./VarifyEmail.module.css";

const VarifyEmail = () => {
    const [text, setText] = useState('Your Email is not varified. Please varified it.')

    const varifyEmailHandler = async () => {

        try {
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCq0D46LMMQdd83yquIDm-07jK4smD1MD4'
            ,{
            requestType: "VERIFY_EMAIL",
            idToken: localStorage.getItem("idToken"),
            }
        );
        setText("Please check your mail. and confirm the mail.");
        toast('Successfully verified');
        } catch (e) {
            toast(e.response.data.error.message);
        }       
    }

    return (
        <>
        <div className={classes.welcome}>
            <div className={classes.heading}><p>{text}</p></div>
        </div>
            <div className={classes.verifyEmail}>
                <button onClick={() => varifyEmailHandler()} type='submit' className={classes.email}>Verify Email</button>
            </div>
            <ToastContainer/>
        </>
    );
};

export default VarifyEmail;