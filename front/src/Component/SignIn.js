import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import "./SignIn.css"
function SignIn() {
    const [email,getEmail]=useState("")
    const [password,getPassword]=useState("")
    const [checkbox,setCheck]=useState(false)
    const navigate=useNavigate()

    const handleSignin=async()=>{
        if(email && password && checkbox){
            fetch("http://localhost:5000/signin",
            {
                method:"post",
                body:JSON.stringify({email,password})
                ,headers:{
                    "Content-Type":"application/json"
                }
            })
            .then(resp=>resp.json())
            .then((data)=>{
                console.log(data.auth)
                localStorage.setItem("token",data.auth)
                localStorage.setItem("user",( data.result.email))
                if(data.auth){
                    navigate("/home")
                }
                console.log(data.result)
            })
            .catch(err=>console.log(err))

        }
    }


    return (
        <div className='container-in'>
            <div id='signin-box'>
                <h1>Sign In</h1>
                <label htmlFor='email'>
                    Email address
                </label>
                <input type="email" id='email'  placeholder='Enter email' onChange={(e)=>{getEmail(e.target.value)}} value={email}/>
                <label htmlFor='password'>
                    Password
                </label>
                <input type="password" id='password' placeholder='Enter password'  onChange={(e)=>{getPassword(e.target.value)}} value={password} />
               
                <div id='save-label'>
                <input type="checkbox" id='save'  onChange={(e)=>{setCheck(e.target.checked)}} value={checkbox} />
                <label htmlFor='save' > Remember me</label>
                </div>
                
                <button onClick={()=>{handleSignin()}}>Submit</button>
                <div id="forgot">
                    <span>Forgot </span>
                    <span style={{ color: "blue", fontWeight: "bold" }}>Password</span>
                </div>
            </div>
        </div>
    )
}

export default SignIn