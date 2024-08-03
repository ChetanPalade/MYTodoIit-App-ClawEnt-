import React from 'react';
import './Signup.css';
import HeadingComponent from './HeadingComponent';
import { useState }  from 'react'
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { authActions }  from "../../store";

const LogIn = () => {
  const dispatch = useDispatch();
  const history = useNavigate();
  const [Inputs, setInputs] = useState({
    email: "",
    password: "",
  });
  const change = (e) => {
    const {name, value} = e.target;
    setInputs({...Inputs, [name]: value});
  };

  const submit = async (e) => {
    e.preventDefault();
    try {
    const response = await axios.post(
      `${window.location.origin}/api/v1/login`, Inputs
      );
       console.log(response.data);
      if (response.data) {
          sessionStorage.setItem("id", response.data.user._id);
          dispatch(authActions.login());
          history("/todo");
      } else {
        console.error("Response data or _id not gound in the response");
      }
    } catch (error) { 
      console.error("An error poccured:", error);
    } 
  };

  return (
    <div className='signup'>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-4 column col-left d-flex justify-content-center align-items-center '>
            <HeadingComponent first="Sign" second="In"/>
          </div>
          <div className='col-lg-8 column d-flex justify-content-center align-items-center bg-primary'>
            <div className='d-flex flex-column  w-100 p-5'>
            <input 
              className='p-2 my-3 input-signup'
              type="email_id" 
              name="email_id"
              placeholder='Enter Your Email'
              value= {Inputs.email_id}
              onChange={change}
            />
          
            <input 
              className='p-2 my-3 input-signup'
              type="password" 
              name="password"
              placeholder='Enter Your Password'
              value= {Inputs.password}
              onChange={change}
            />
            <button className='btn-signup' onClick={submit}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;