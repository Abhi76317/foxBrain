import React, { useState,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";


const ForgetPass = () => {

    const navigate=useNavigate()


    const [data, setData] = useState({
        email:"",
        password: "",
        conform_password: "",
    })

    const inputHandler = (e) => {
        setData((preval) => ({
            ...preval, [e.target.name]: e.target.value
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        if(data.password !== data.conform_password){
            alert("Password does not match")
            return 0
        }
        const profile = JSON.parse(localStorage.getItem("profile"))
        if (profile.email === data.email) {
            localStorage.setItem("profile",JSON.stringify({...profile,password:data.password}))
            alert("Password Changed successfully")
            navigate("/")
        } else alert("Please enter registerd email")

    }



    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="card" style={{ width: "40rem", marginTop: "5%" }}>
                    <h1 className="text-center">ForgetPass Form</h1>
                    <form className="card-body d-flex flex-column p-4" action="#"  onSubmit={submitHandler}>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Enter Registered email</span>
                            <input type="email" className="form-control" placeholder="Username" name="email" value={data.email} onInput={inputHandler} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Password</span>
                            <input type="password" className="form-control" placeholder="Password" name="password" value={data.password} onInput={inputHandler} />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" >Conform Password</span>
                            <input type="password" className="form-control" placeholder="Conform Password" name="conform_password" value={data.conform_password} onInput={inputHandler} required />
                        </div>
                        <div className="input-group mb-3">
                            <input type="submit" className="w-100 btn btn-primary" placeholder="Save" />
                        </div>
                        <div className="d-flex justify-content-end ">
                            <span >
                                <Link to={"/"}>already have account</Link>

                            </span>
                        </div>
                    </form>

                </div>
            </div>
        </>
    )
}

export default ForgetPass;