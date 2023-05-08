import React, { useEffect, useState } from "react";
import {
  MDBContainer,
  MDBInput,
  MDBCheckbox,
  MDBBtn,
  MDBIcon,
  MDBCol,
  MDBRow
}  from 'mdb-react-ui-kit';
import { Link, useNavigate } from "react-router-dom";
import { auth, logInWithEmailAndPassword, signInWithGoogle } from "../firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import "./Login.css";
function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/log");
  }, [user, loading]);
  return (
    
    <MDBContainer className="p-3 my-5 d-flex" style={{width:'1000px'}}>

<MDBRow style={{width:'1000px'}}>

<MDBCol id="collog1" className="collog1 mb-5">
  <div className="collog1 d-flex flex-column ms-5">


    <p>Please login to your account</p>


    <input wrapperClass='formlog mb-4' label='Email address' id='formlog1' type='email'/>
    <input wrapperClass='formlog mb-4' label='Password' id='formlog2' type='password'/>


    <div className=" pt-1 mb-5 pb-1">
      <button id="redbutton" className="signinbut mb-4">Sign in</button>
    </div>
    <a className="text-muted" href="#!">Forgot password?</a>

    <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
      <p className="mb-0">Don't have an account?</p>
      <MDBBtn outline className='mx-2' color='danger'>
        Danger
      </MDBBtn>
    </div>

  </div>

</MDBCol>

<MDBCol className="collog1 mb-5">
  <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">

    <div className="text-white px-3 py-4 p-md-5 mx-md-4">
      <h4 class="mb-4">We are more than just a company</h4>
      <p class="small mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
        exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    </div>

  </div>

</MDBCol>

</MDBRow>
  </MDBContainer>
  );
}
export default Login;