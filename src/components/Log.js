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
import './image2.png';
import Reg from "./Reg"
import eye from "./Reg_modal_imgs/eye.png"
import person from "./Reg_modal_imgs/person.png"
function Log() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/user");
  }, [user, loading]);
  return (
    
    <div style={{marginTop:'0'}} class="row justify-content-center">
        <div class="col-xl-10">
            <div id='logcont' class="card border-0">
                <div class="card-body p-0">
                    <div class="row no-gutters">
                        <div class="col-lg-6">
                          <div style={{paddingTop:'60px', marginLeft:'5px',  height: '650px'}} class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <div style={{width:'700px'}}>
                              <h1 style={{fontSize:'55px',fontWeight: '800', marginBottom: '25px'}}>Вхід</h1>
                              <h4 style={{color:'#7D7D7D', fontSize:'13px', fontWeight: '300', marginBottom:'15px'}}>Увійдіть в обліковий запис</h4>
                              <div id="emaildiv" class="form-outline mb-3">
                                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ваш Email" id="form1Example13" class="form-control form-control-lg" />
                                <img src={person} className="LogInputImg"/>

                              </div>
                    
                              <div id="passdiv" class="form-outline mb-3">
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" id="form1Example23" class="form-control form-control-lg" />
                                <img src={eye} className="LogInputImg"/>
                              </div>
                              
                    
                              <div class="d-flex align-items-center mb-5">
                                
                                <a style={{color: '#FCA4A8', fontWeight:'bold', fontSize:'11px', marginTop:'0'}} Link to='/reset'><Link style={{color:'red'}} to='/reset' target="_blank" rel="noopener noreferrer">Забули пароль?</Link></a>
                              </div>
                    
                              <button onClick={() => logInWithEmailAndPassword(email, password)} id="redbutton" class="btn btn-primary btn-block">Увійти</button>
                    
                              <div style={{width: '270px'}} class="divider d-flex align-items-center my-4">
                               <p style={{fontSize: '12px',width:'30px'}}  class="text-center fw-bold mx-3 mb-0 text-muted">або</p>
                              </div>
                              <div onClick={signInWithGoogle} style={{border: '1px black'}}>
                              <a class="btn btn-lg btn-google btn-block btn-outline"style={{color: '#808080', border:'0.5px black solid', borderRadius:'15px', padding:'20px', fontSize:'11px', width:'270px'}} href="#"> Продовжити через Google</a>
                              </div>
                    
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-6 d-none d-lg-inline-block">
                            <div class="account-block rounded-right">
                                <div class="overlay rounded-right"></div>
                                <div class="account-testimonial">
                                  
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <p id='login_donthave' class="text-muted text-center mt-3 mb-0">Don't have an account? <a href="" class="text-primary ml-1">Register</a></p>


        </div>
    </div>
  );
}
export default Log;