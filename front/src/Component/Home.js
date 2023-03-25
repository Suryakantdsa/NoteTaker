import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { AiFillHome, AiOutlinePlus, AiFillDelete, AiOutlineExport } from "react-icons/ai";
import { IoTimeSharp } from "react-icons/io5";
import "./Home.css"

function Home() {
    const [data, getData] = useState([])
    const navigate=useNavigate()
    useEffect(() => {
        fetch("http://localhost:5000/home")
            .then(resp => resp.json())
            .then((res) => {
                console.log(res)
                getData(res)
            })
    }, [])
    console.log(data)
    function handleLogout(){
        localStorage.clear()
        navigate("/") 
    }
    return (
        <div id='home'>
            <nav>
                <Link to={"/home"}>
                    <button onClick={()=>{navigate("/home")}}><AiFillHome /> Home</button>
                </Link>
                <Link to={"/addnote"}>
                    <button><AiOutlinePlus /> AddNote</button>
                </Link>
                <Link >
                    <button><AiFillDelete /> DeleteAll</button>
                </Link>
                <Link >
                    <button><AiOutlineExport />  Export</button>
                </Link>
                <Link >
                    <button onClick={{handleLogout}}> LogOut</button>
                </Link>
            </nav>
            <div id='search-bar'>
                <input type="text" placeholder='search ..!' />
                <button >search</button>
            </div>
            { data.length>0?data.map((note, id) => {
                    return (
                        <div className="allNote" key={id} onClick >
                            <p> <span><IoTimeSharp /></span>{note.time}</p>
                            <p>{note.title}</p>
                            <p>{note.description}</p>
                        </div>
                    )
                })
                :
                    <h1>No note is there</h1>
            }



        </div>
    )
}

export default Home