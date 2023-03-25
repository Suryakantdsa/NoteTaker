import React from 'react'
import { Navigate ,Outlet } from "react-router-dom";
function PrivateComponet() {
    const auth=localStorage.getItem("token")
  return (
    <div>
       { auth?<Outlet/>:<Navigate to="/signup"/>}
    </div>
  )
}

export default PrivateComponet