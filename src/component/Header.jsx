import React, { useState } from 'react'
import { useNavigate,Link } from 'react-router-dom'

export default function Header() {

    const navigate = useNavigate()


    const days=["Sunday","Monday","Tuesday","Wednesday","Thrusday","Friday","Saturday"]


    var currentdate = new Date();

    var datetime =days[currentdate.getDay()]+" @ "
        + currentdate.getHours() + ":"
        + currentdate.getMinutes() + ":" + currentdate.getSeconds();


    const logout = () => {
        const profile = JSON.parse(localStorage.getItem("profile"))
        localStorage.setItem("profile", JSON.stringify({ ...profile, isLogin: false }))
        navigate("/")
    }

    return (
        <div>
            <nav className="navbar navbar-light bg-light">
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">FoxBrain</span>
                    <div>
                    <span className="me-2"><b>{datetime}</b></span>
                    <Link className="btn btn-outline-primary me-2" to={"/todo"} >Play with Todo</Link>
                    <button className="btn btn-outline-primary" onClick={logout}> Logout</button>
                    </div>
                      </div>
            </nav>
        </div>
    )
}
