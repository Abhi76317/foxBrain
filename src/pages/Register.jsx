import React, { useState } from "react";
import { Link } from "react-router-dom";
import { isName , isAddress, isEmail, isPassword, isPhone} from "../utils/validation";

const Register = () => {

    const [data, setData] = useState({
        first_name: "",
        last_name: "",
        email: "",
        address: "",
        country: "",
        gender: "",
        phone_number: "",
        password: "",
        conform_password: "",
        isLogin:false
    })

    // const [error, setError] = useState("")

    const inputHandler = (e) => {
        setData((preval) => ({
            ...preval, [e.target.name]: e.target.value
        }))
    }

    const validator = () => {
        if (!isName(data.first_name)) {
            // setError("Enter Valid First Name")
            alert("Enter Valid First Name")
            return false;
        }
        else if (!isName(data.last_name)) {
            // setError("Enter Valid Last Name")
            alert("Enter Valid First Name")
            return false;
        }
        else if(!isEmail(data.email)){
            alert("Enter Valid Email")
            return false;
        }
        else if(!isAddress(data.address)){
            alert("Enter Valid Address")
            return false;
        }
        else if(!isPhone(data.phone_number)){
            alert("Enter Valid Phone Number")
            return false;
        }
        else if(!isPassword(data.password)){
            alert("Password must be more than 8 character")
            return false;
        }
        else if(data.password !== data.conform_password){
            alert("Password and Conferm Password does not match")
            return false;
        }
        else{
            return true;
        }
    }

    const submitHandler = (e) => {
        e.preventDefault();
        console.log("data submitted ", data);
        if (validator()) {
            console.log("true");
            const strdata = JSON.stringify(data)
            localStorage.setItem("profile", strdata)
        }


    }




    return (
        <>
            <div className="d-flex justify-content-center">
                <div className="card" style={{ width: "50rem", marginTop: "5%" }}>
                    <h1 className="text-center">Registration Form</h1>
                    <form className="container d-flex w-75 flex-column justify-content-center" action="#"  onSubmit={submitHandler}>
                        <div className="input-group mb-3">
                            <span className="input-group-text" >First Name</span>
                            <input type="text" className="form-control" placeholder="First Name" name="first_name" value={data.first_name} onInput={inputHandler} required />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" >Last Name</span>
                            <input type="text" className="form-control" placeholder="Last Name" name="last_name" value={data.last_name} onInput={inputHandler} required />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" >Email</span>
                            <input type="email" className="form-control" placeholder="Email" name="email" value={data.email} onInput={inputHandler} required />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" >Address</span>
                            <input type="text" className="form-control" placeholder="Address" name="address" value={data.address} onInput={inputHandler} required />
                        </div>
                        <select className="mb-3 form-select" name="country" onChange={inputHandler} required >
                            <option value="India">India</option>
                            <option value="America">America</option>
                            <option value="England">England</option>
                            <option value="Franse">Franse</option>
                            <option value="China">China</option>
                            <option value="Sount Koria">Sount Koria</option>
                            <option value="Rusia">Rusia</option>
                        </select>
                        <div className="d-flex justify-content-around w-25">
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" value="mail" onChange={inputHandler} />
                                <label className="form-check-label" htmlFor="flexRadioDefault1">
                                    Mail
                                </label>
                            </div>
                            <div className="form-check">
                                <input className="form-check-input" type="radio" name="gender" value="femail" onChange={inputHandler} />
                                <label className="form-check-label" htmlFor="flexRadioDefault2">
                                    Femail
                                </label>
                            </div>
                        </div>
                        <div className="input-group mb-3 mt-3">
                            <span className="input-group-text" >Phone Number</span>
                            <input type="number" className="form-control" placeholder="Phone Number" name="phone_number" value={data.phone_number} onInput={inputHandler} required />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text">Password</span>
                            <input type="password" className="form-control" placeholder="Password" name="password" value={data.password} onInput={inputHandler} required />
                        </div>
                        <div className="input-group mb-3">
                            <span className="input-group-text" >Conform Password</span>
                            <input type="password" className="form-control" placeholder="Conform Password" name="conform_password" value={data.conform_password} onInput={inputHandler} required />
                        </div>

                        <div className="input-group mb-3">
                            <input type="submit" className="w-100 btn btn-primary" placeholder="Register" />
                        </div>
                        <div className="d-flex justify-content-end mb-2">
                            <span className="me-3">
                                <Link to={"/"}> LOGIN</Link>
                            </span>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )

}

export default Register;