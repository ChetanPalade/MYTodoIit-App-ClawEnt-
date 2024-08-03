import React, { useEffect, useState } from 'react'
import "./Todo.css";
import TodoCards from './TodoCards';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Update from './Update';
import axios from "axios";

let id = sessionStorage.getItem("id");
let toUpdateArray = [];
const Todo = () => {
    const [Inputs, setInputs] = useState({title: "", body: ""});
    const [Array, setArray] = useState([]);
    
    const show = () => {
    document.getElementById("textarea").style.display ="block";
  };
  const change = (e) => {
    const {name, value} = e.target;
    setInputs({...Inputs, [name]: value});
  };
  
  const submit = async () => {
    if (Inputs.title === "" || Inputs.body === "") {
      toast.error("Title or Body Should Not Be Empty")
    } else {
      if (id) {
        await axios.post("http://localhost:30002/api/v2/todos", {title:Inputs.title,body:Inputs.body,id:id})
        .then((response) =>  {
          console.log(response);
        });
        setInputs({title: "", body: ""});
        toast.success("Your Task is Added");
      } else {
        setArray([...Array, Inputs]);
        setInputs({title: "", body: ""});
        toast.success("Your Task is Added");
        toast.error("Your Task is not Added! Please Sign Up");
      }
    }
  };

  const del = async (Cardid) => {
    if (id) {
    await axios.delete(`http://localhost:30002/api/v2/deletetodos/${Cardid}`, { 
        data: {id: id},
      })
      .then((response) => {
      toast.success("Your TAsk Is Deleted");
      });
    }
      else {
        toast.error("Please Sign Up first");
      }
    };

    //console.log(id);
    //Array.splice(id,'1');
    //setArray([...Array]);  


  const dis = (value) => {
    document.getElementById("todo-update").style.display = value;
  };
  const update = (value) => {
    toUpdateArray = Array[value];
  };
  useEffect(() => {
    if (id) {
    const fetch = async() => {
      await axios.get(`${window.location.origin}/api/v2/todos/${id}`).then((response) => 
      {
        setArray(response.data.list);
      });
    };
    fetch();
    }
  },[submit]);
  return (
    <>
    <div className='todo'>
      <ToastContainer />
      <div className='todo-main container d-flex justify-content-center align-items-center my-4 flex-column'>
        <div className='d-flex flex-column todo-input-div w-50 p-1'>
          <input
            type='text'
            placeholder='TITLE'
            className='my-2 p-2 todo-input'
            onClick={show}
            name="title"
            value ={Inputs.title}
            onChange={change}
          />
          <textarea
            id="textarea"
            type='text'
            placeholder='BODY'
            name="body"
            value ={Inputs.body}
            className='p-2 todo-input'
            onChange={change}
           />
        </div>
        <div className='d-flex justify-content-end w-50 my-3'>
          <button className='home-btn px-2 py-1' onClick={submit}>ADD</button>
        </div>
      </div> 
      <div className='todo-body'>
        <div className='container-fluid'>
          <div className='row'>
            {Array && 
              Array.map((item, index) => (
                <div className='col-lg-3 col-10 mx-5 my-2' key={index}>
                  <TodoCards  title={item.title} body={item.body} id={item._id} delid={del} display={dis} 
                    updateId={index} tobeUpdate={update}/>
                </div>
              ))} 
            </div> 
          </div>
        </div>  
      </div>
      <div className='todo-update' id="todo-update">  
        <div className='container update'>
            <Update display={dis} update= {toUpdateArray} />
        </div>
      </div>
    </>
  );
};

export default Todo;