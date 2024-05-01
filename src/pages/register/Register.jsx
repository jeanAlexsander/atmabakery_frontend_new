import React from 'react';
import './Register.css';
import NavbarCustomer from '../navbar/navbarCustomer';

function Register() {
  return (
    <>
        <NavbarCustomer/>
        <div className='wrapper'>
        <div>
            <form action=''>
            <h1>Register</h1>
            <div className='input-box'>
                <input type="text" id='firstname' placeholder='First Name'/>

            </div>

            <div className='input-box'>
                <input type="text" id='lastname' placeholder='Last Name' />

            </div>

            <div className='input-box'>
                <input type="text" id='email' placeholder='Email' />

            </div>

            <div className='input-box'>
                <input type="text" id='nomortelepon' placeholder='Nomor Telepon' />

            </div>

            <div className='input-box'>
                <input type="text" id='username' placeholder='Username' />

            </div>

            <div className='input-box'>
                <input type="text" id='password' placeholder='Password' />

            </div>

            <button type='submit'>Sign Up</button>


        </form>
        </div>
      </div>
    </>
  );    
}

export default Register;
