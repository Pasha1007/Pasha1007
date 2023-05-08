import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { auth, sendPasswordReset } from "./firebase";
import "./Reset.css";
function Reset() {
  const [email, setEmail] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    if (loading) return;
    if (user) navigate("/reset");
  }, [user, loading]);
  return (
    <div className="reset">
      <div className="reset__container">
        <h1 style={{fontSize:'20px', fontWeight:'700'}}>Відновлення паролю</h1>
        <div id="emaildiv" class="form-outline mb-3">
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Ваш Email" id="form1Example13" class="form-control form-control-lg" />
                                

        </div>
        <button onClick={() => sendPasswordReset(email)} type="submit" id="redbutton" class="btn btn-primary btn-block">Відновити пароль</button>

        
     
      </div>
    </div>
  );
}
export default Reset;