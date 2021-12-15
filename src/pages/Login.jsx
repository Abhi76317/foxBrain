import React, { useState,useEffect } from "react";
import { Form, Input } from "react-bootstrap"
import { Link, useNavigate } from "react-router-dom";


const Login = () => {

    const navigate=useNavigate()


    const [data, setData] = useState({
        username: "",
        password: ""
    })

    const inputHandler = (e) => {
        setData((preval) => ({
            ...preval, [e.target.name]: e.target.value
        }))
    }
    useEffect(() => {
        const profile = JSON.parse(localStorage.getItem("profile"))
        if (profile.isLogin ){
            navigate("/home")
        } 
    }, [])

    const submitHandler = (e) => {
        e.preventDefault();
        const profile = JSON.parse(localStorage.getItem("profile"))
        if (profile.email === data.username && profile.password === data.password) {
            alert("login successfully")
            localStorage.setItem("profile",JSON.stringify({...profile,isLogin:true}))
            navigate("/home")
        } else alert("Error")

    }



    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="card" style={{ width: "40rem", marginTop: "5%" }}>
                    <h1 className="text-center">Login Form</h1>
                    <form className="card-body d-flex flex-column p-4" action="#"  onSubmit={submitHandler}>
                        <div className="input-group mb-3">
                            <span className="input-group-text">User Name</span>
                            <input type="text" className="form-control" placeholder="Username" name="username" value={data.username} onInput={inputHandler} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Password</span>
                            <input type="password" className="form-control" placeholder="Password" name="password" value={data.password} onInput={inputHandler} />
                        </div>
                        <div className="input-group mb-3">
                            <input type="submit" className="w-100 btn btn-primary" placeholder="LOGIN" />
                        </div>
                        <div className="d-flex justify-content-end ">
                            <span className="me-3">
                                <Link to={"/register"}> REGISTER</Link>

                            </span>
                            <span >
                                <Link to={"/forgotpassword"}> FORGOT PASSWORD</Link>

                            </span>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default Login;