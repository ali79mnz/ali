import axios from 'axios';
import React, { useState } from 'react'

export default function P() {

    const [Course, setCourse]=useState([])
    const [newCourse, setNewCourse]=useState('')


    const change =(event)=>{
      setNewCourse(event.target.value);
    }

    const addCourse = ()=>{
        setCourse([...Course , newCourse])
        axios.post('http://localhost:5000/data' , {Course})
    }
    const send = ()=>{
        
    }

    
    console.log(Course);

  return (
    
    <>
    <div>
        <input type="text" onChange={change} />
        <button onClick={addCourse}>add</button>
        <button onClick={send}>send</button>
        {Course}
    </div>
    </>
  )
}
