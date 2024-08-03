import React , {useEffect, useState} from 'react'
import axios from "axios";
import {toast} from "react-toastify";


const Update = ({display, update}) => {
  useEffect(() => {
     setInputs({
      title: update.title,
     body: update.body,
    });
 }, [update]);
  const [Inputs, setInputs] = useState({
  title: "",
  body: "",
 });
  const change = (e) => {
  const {name, value} = e.target;
  setInputs({...Inputs, [name]: value});
 };
 const submit = async () => {
  await axios.put(`${window.location.origin}/updatetodos/${update._id}`).then((response) => {
    toast.success("Your Task Is Updated");
  });
  display("none");
 };

  return (
    <div className='p-5 d-flex justify-content-center align-items-start flex-column update'>
      <h1>Update Your Task</h1> 
      <input type="text" className='todo-input my-4 w-100 p-3' value={Inputs.title} name="title" onchaneg={change}/>
      <textarea className='todo-input w-100 p-3' value={Inputs.body} name="body" onChange={change}/>
      <div>
        <button className='btn btn-dark my-4'>UPDATE</button>
        <button className='btn btn-danger my-4 mx-4' onClick={submit} onChange={change}>Close</button>
      </div>
    </div>
  );
};

export default Update;