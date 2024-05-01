import React, { useState } from 'react'; 
import './Login.css';
import { FaEye, FaEyeSlash, FaLock, FaUser } from "react-icons/fa"; 
import NavbarCustomer from '../navbar/navbarCustomer';

function Login() {
  const [password, setPassword] = useState(""); 
  const [visible, setVisible] = useState(false); 

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <>
      <NavbarCustomer/>
      <div className='wrapper'>
          <form action=''>
            <h1>Sign In</h1>
            <div className='input-box'>
              <input type="text" id="username" placeholder='Username' required/>
              <FaUser className='icon' />
            </div>
            <div className='input-box' style={{ position: 'relative' }}>
              <input type={visible ? 'text' : 'password'} id="password" placeholder='Password' value={password} onChange={(e) => setPassword(e.target.value)} style={{display: 'inline'}} 
      
            />
              <button type="button" onClick={toggleVisibility} className='icon toggle-icon'style={{
                position: 'absolute',
                left:'410px', 
               
                transform: 'translateY(-50%)', 
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                color: 'white',
                width: "5px"   
              }}>
                {visible ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className='remember-forgot'>
              <label><input type='checkbox' />Remember Me</label>
              <a href="#">Forgot Password</a>
            </div>

            <button type='submit'>Login</button>
            
            <div className='register-link'>
              <p>Don't Have an Account?<a href="#" style={{color:'blue', textDecoration:'underline'}}>Register</a></p>
            </div>
          </form>
        </div>
    </>
  );
}

export default Login;
