import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./AddNotes.css"
function AddNotes() {
    const [title,getTitle]=useState("")
    const [desc,getDesc]=useState("")
    const navigate=useNavigate()
    const handleAdd=async()=>{
        if(title && desc){
            let time=new Date().toLocaleString()

            fetch("http://localhost:5000/addnote",
            {
                method:"post",
                body:JSON.stringify({title:title,description:desc,time:time})
                ,headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(resp=>resp.json())
            .then((data)=>{
                if(data){
                    navigate("/home")
                }
                console.log(data)
            })
            .catch(err=>console.log(err))

        }
    }

    return (
        <div id="addnote">
            <div>
            <label htmlFor='title'>
                Title:
            </label>
            <input type="title" id='title' placeholder='Enter title' onChange={(e) => { getTitle(e.target.value) }} value={title} />
            <label htmlFor='desc'>
                Description:
            </label>
            <input type="textBox" id='desc' placeholder='what is on your mind' onChange={(e) => { getDesc(e.target.value) }} value={desc} />
            <button onClick={()=>handleAdd()}>Add note</button>
            </div>

        </div>
    )
}

export default AddNotes