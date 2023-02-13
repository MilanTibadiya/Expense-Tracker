import React, { useRef } from "react";
import axios from "axios";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import classes from "./CompleteProfile.module.css";

const CompleteProfile = () => {
    const fullName = useRef();
    const photourl = useRef();

    const profileSubmitHandler = async (e) => {
        e.preventDefault();

        const enteredFullName = fullName.current.value;
        const enteredphotourl = photourl.current.value;
        // console.log(enteredFullName, enteredphotourl);

        let idToken = localStorage.getItem('idToken')

        try {
            const res = await axios.post(
       "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCq0D46LMMQdd83yquIDm-07jK4smD1MD4",
       {
         idToken: idToken,
         displayName: enteredFullName,
         photoUrl : enteredphotourl,
       }
     );
         toast('Profile Updated')
         console.log(res);
        //  document.querySelector("form").reset();
     } catch (e) {
           toast(e.response.data.error.message);
     }

        // fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyCq0D46LMMQdd83yquIDm-07jK4smD1MD4"
        // ,{
        //     method: 'POST',
        //     body: JSON.stringify(({
        //         idToken: idToken,
        //         displayName: enteredFullName,
        //         photoUrl: enteredphotourl,
        //     })),
        //     headers: {
        //         'Content-Type' : 'application/json'
        //       },
        // })
        // .then((res) => {
        //     if(res.ok){
        //         toast('Profile Updated')
        //         console.log(res);
        //     }else{
        //         res.json().then(data => {   // Json also return promises mi,
        //           return toast(data.error.message);
        //           })
        //     }
        // })
        // .catch((err) => {
        //     return toast(err.message)
        //   })
    
    };

  return (
    <>
    <div className={classes.container}>
      <div className={classes.header1}>
        <div className={classes.left1}> Winners never quite, Quitters never win.</div>
        <div className={classes.right1}> Your profile is 64% completed. A completed profile has a higher chances of landing a job. </div>
      </div>
      {/* below section */}

      <form>
      <div className={classes.contactDetail1}>
        <div className={classes.main}>
          <div className={classes.header}>
            <div className={classes.ContactDetail}> Contact Details </div>
            <button className={classes.cancel}>Cancel</button>
          </div>

          <div className={classes.input}>
            <div className={classes.left}>
              <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt='name'/>
              <div className={classes.fullName}>Full Name : </div>
              <input type="text" ref={fullName} required/>
            </div>
            <div className={classes.right}>
              <img src="https://cdn-icons-png.flaticon.com/512/2301/2301129.png" alt='profile url'/>
              <div className={classes.photourl}>Profile Photo url : </div>
              <input type="text" ref={photourl} required/>
            </div>
          </div>
          <button onClick={profileSubmitHandler} className={classes.update} type="submit">
            Update
          </button>
        </div>
      </div>
      </form>
    </div>
    <ToastContainer/>
    </>
  );
};

export default CompleteProfile;
