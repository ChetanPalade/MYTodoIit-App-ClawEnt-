import React from 'react'
import { RiDeleteBin6Line } from "react-icons/ri";
import { GrDocumentUpdate } from "react-icons/gr";
const TodoCards = ({title,body, id,delid, display, updateId, tobeUpdate}) => {
  return (
    <div className='p-3 todo-card'>
      <div>
        <h1 className='todo-card-head'>{title}</h1>
        <p className='todo-card-para'>{body.split("", 80)}...</p>
      </div>
      <div className='d-flex justify-content-around '>
        <div className='d-flex justify-content-center align-items-center card-icon-head px-1 py-1'
            onClick={() => {
            display("block");
            tobeUpdate("updateId");

          }}
        >
          < GrDocumentUpdate className='card-icon'/> Update
        </div>
        <div 
          className='d-flex justify-content-center align-items-center card-icon-head px-2 py-1 text-danger' 
          onClick={() => {
            delid(id);
          }}
        >
          <RiDeleteBin6Line className='card-icon del'/> Delete
        </div>
      </div>
    </div>
  )
}

export default TodoCards;