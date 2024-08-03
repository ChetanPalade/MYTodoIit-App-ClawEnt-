import React from 'react';
import './Signup.css';
import { useState }  from 'react'
import HeadingComponent from './HeadingComponent';
import axios from "axios";

import { useNavigate } from "react-router-dom";

const Signup = () => {
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email_id: "",
    username:"",
    password: "",
  });
  const change = (e) => {
    const {name, value} = e.target;
    setInputs({...Inputs, [name]: value});
  };

  const submit = async (e) => {
    e.preventDefault();
    await axios
      .post(`${window.location.origin}/api/v1/register`, Inputs)
      .then((response) => {
        if (response.data.message === "User Already Exists") {
          alert(response.data.message);
        }
        else {
          alert(response.data.message);
          setInputs({
            email: "",
            username: "",
            password: "",
        });
        history("/login");
      }
    });
  };


  return (
    <div className='signup'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-8 column d-flex justify-content-center align-items-center bg-primary'>
            <div className='d-flex flex-column  w-100 p-5'>
            <input 
              className='p-2 my-3 input-signup'
              type="email_id" 
              name="email_id"
              placeholder='Enter Your Email'
              onChange={change}
              value={Inputs.email_id}
            />
            <input 
              className='p-2 my-3 input-signup'
              type="username" 
              name="username"
              placeholder='Enter Your Username'
              onChange={change}
              value={Inputs.username}
            />
            <input 
              className='p-2 my-3 input-signup'
              type="password" 
              name="password"
              placeholder='Enter Your Password'
              onChange={change}
              value={Inputs.password}
            />
              
              <button className='btn-signup p-2' onClick={submit}>Sign Up</button>
            </div>
          </div>

          <div className='col-lg-4 column col-left d-flex justify-content-center align-items-center '>
            <HeadingComponent first="Sign" second="Up"/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;