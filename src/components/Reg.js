
import React,{ useEffect, useState } from 'react';
import {
    MDBContainer,
    MDBInput,
    MDBCheckbox,
    MDBBtn,
    MDBIcon,
    MDBCol,
    MDBRow
  }
  from 'mdb-react-ui-kit';
  import { auth, signInWithGoogle, registerWithEmailAndPassword } from "../firebase";
  import {Link, useNavigate, useHistory} from "react-router-dom";
  import { useAuthState } from "react-firebase-hooks/auth";
  import "./Reg.css";
  import pen from "./Reg_modal_imgs/pen.png"
  import eye from "./Reg_modal_imgs/eye.png"
  import person from "./Reg_modal_imgs/person.png"



function Reg(){
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [fop_group,setFopGroup]=useState("");
  const [workers,setWorkers] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const register = () => {
    if (!name) alert("Please enter name");
    registerWithEmailAndPassword(name,fop_group,workers, email, password);
  };

  useEffect(() => {
    if (loading) return;
    if (user) navigate("/user");
  }, [user, loading]);
  return (
    
    <div class="row justify-content-center">
        <div  class="col-xl-10">
            <div id='logcont' class="card border-0">
                <div  class="card-body p-0">
                    <div  class="row no-gutters">
                        <div class="col-lg-6">
                          <div style={{paddingTop:'10px', marginLeft:'5px',  height: '550px'}} class="col-md-7 col-lg-5 col-xl-5 offset-xl-1">
                            <div style={{ marginTop:"-70px",width:'700px'}}>
                              <h1 style={{fontSize:'50px',fontWeight: '800', marginBottom: '25px'}}>Реєстрація</h1>
                              
                              <div id="emaildiv" class="form-outline mb-3">
                                
                                <input value={email} onChange={(e) => setEmail(e.target.value)} label='Email address' id='form11' type='email' type="email" placeholder="Ваш Email" id="form1Example13" class="form-control form-control-lg" />     
                                <img src={person} className="RegInputImg"/>
                              </div>
                    
                              <div id="passdiv" class="form-outline mb-3">
                                <input value={password} onChange={(e) => setPassword(e.target.value)} label='Password' id='form2' type='password' type="password" placeholder="Пароль" id="form1Example23" class="form-control form-control-lg" />
                                <img src={eye} className="RegInputImg"/>
                              </div>

                              <div id="passdiv" class="form-outline mb-3">
                                <input value={name} onChange={(e) => setName(e.target.value)} label='Full name' id='form3' type='text' type="text" placeholder="Повне ім'я" id="form1Example23" class="form-control form-control-lg" />
                                <img src={pen} className="RegInputImg"/>
                              </div>
                              
                              
                              <div id="passdiv" class="form-outline mb-3">
                                <select value={fop_group} onChange={(e) => setFopGroup(e.target.value)}  id='form3' type="text" id="form1Example23" class="form-control form-control-lg" >
                                <option selected value="Група фоп">Група фоп</option>
                                  <option value="Група 1">Група 1</option>
                                  <option value="Група 2">Група 2</option>
                                  <option value="Група 3">Група 3</option>
                                  </select>
                              </div>
                              <div id="passdiv" class="form-outline mb-3">
                                <select value={workers} onChange={(e) => setWorkers(e.target.value)}  id='form3' type="text" id="form1Example23" placeholder='dsadasda' class="form-control form-control-lg" >
                                <option selected value="Працівники">Працівники</option>
                                  <option  value="Без найманих працівників">Без найманих працівників</option>
                                  </select>
                              </div>
                    
                              <div onClick={register}>
                              <button id="redbutton">Зареєструватися</button>
                              </div>
                    
                              <div style={{width: '270px'}} class="divider d-flex align-items-center my-4">
                                <p style={{fontSize: '12px', marginTop:'20px'}}  class="text-center fw-bold mx-3 mb-0 text-muted">або</p>
                              </div>
                              <div onClick={signInWithGoogle} style={{border: '1px black'}}>
                              <a class="btn btn-lg btn-google btn-block btn-outline"style={{color: '#808080', border:'0.5px black solid', borderRadius:'15px', padding:'20px', fontSize:'11px', width:'270px'}} href="#"> Продовжити через Google</a>
                              </div>
                    
                            </div>
                          </div>
                        </div>

                        <div class="col-lg-6 d-none d-lg-inline-block">
                            <div class="account-block1 rounded-right">
                                <div class="overlay rounded-right"></div>
                                <div class="account-testimonial">
                                  
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <p class="text-muted text-center mt-3 mb-0">Already have an account? <a href="" class="text-primary ml-1">Log In</a></p>


        </div>
    </div>
  );
}
export default Reg;